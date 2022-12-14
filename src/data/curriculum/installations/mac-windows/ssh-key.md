---
title: "SSH Key"
date: "2022-09-01 08:00:00"
path: "/installations/"
# use the path equal to the location of the file in the directory (directory structure)

type: "π ASSIGNMENT"
# type options: π©π½βπ« LIVE LEARNING SESSION, βΉοΈ INFO, π₯ VIDEO, π» CODE ALONG, π₯ΌLAB, β©οΈ REVIEW/NOTES, π₯ GROUP LEARNING, π·πΌββοΈ GROUP PROJECT, π§  ASSESSMENT, π ASSIGNMENT

category: "Installations - Mac + Windows"
# category: Use the Name + week for each (follow the format above)
tags:
  - Installations
is_featured: true
---
SSH is a technology that allows you to create a very secure connection between your computer, and a computer located somewhere else in the world. It's an acronym for Secure SHell. When you create an SSH key on your computer, it actually creates two files:

- A public key file that you share with other people and computers. It is usually named **id_rsa.pub**.
- A private key file that you never, ever, ever, ever, ever share with anyone. It is usually named **id_rsa**.

Let's create the SSH Key in the terminal so that you can work with GitHub.

#### Step 1:
Copy/Paste the following into the command line. **Make sure to use the email address that you used when you signed up for your GitHub account.**

```shell
ssh-keygen -t rsa -b 4096 -C "YOUR GITHUB ACCOUNT EMAIL"
```

#### Step 2
After entering in the line above, press enter **three more times** and you will see your key's randomart image. π

#### Step 3
Now, we want to make sure that the key was generated properly. In your terminal run the following commands in order:

1. 
```shell
cd
```
2. 
```shell
cd .ssh
```
3. 
```shell
ls
```

If you see `id_rsa` and `id_rsa.pub`, then you are good to go! Sample image below.
![Screen Shot 2022-02-17 at 8 30 08 AM](https://user-images.githubusercontent.com/29741570/189227648-f4902bdf-d847-4fea-ab1e-fc651dcaf5c9.png)

#### Step 4
Now we need to tell the agent to use this key. In your terminal, run:

```shell
ssh-add ~/.ssh/id_rsa
```

You should get a response stating `Identity added` with your email address at the end.

Once you have completed all the steps above, push the button below to close this page and check the box on the list to mark as completed.

<button class="report m-1 p-3 btn-lg btn-outline-warning btn" onclick="window.close()">Close Page</button>
