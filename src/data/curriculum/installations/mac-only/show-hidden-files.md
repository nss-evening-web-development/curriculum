---
title: "Show Hidden Files"
date: "2022-09-01 08:00:00"
path: "/installations/"
# use the path equal to the location of the file in the directory (directory structure)

type: "📝 ASSIGNMENT"
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: "Installations - Mac"
# category: Use the Name + week for each (follow the format above)
tags:
  - Installations
is_featured: true
---
Your computer has a lot of files that are intentionally hidden to prevent everyday users from accidentally changing really important stuff. As a software developer, you will be interacting with these important files on a regular basis, so let's make sure you can see them in your Finder Application as well as your terminal.

Run the following command in the terminal:

```shell
defaults write com.apple.finder AppleShowAllFiles YES
```
Now, run the following command in the terminal:

```shell
killall Finder
```

Close and then Open your Finder application again. Now you should be able to see all the files that are normally hidden.

Once you have completed all the steps above, push the button below to close this page and check the box on the list to mark as completed.

<button class="report m-1 p-3 btn-lg btn-outline-warning btn" onclick="window.close()">Close Page</button>
