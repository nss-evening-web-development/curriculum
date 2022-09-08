---
title: "Add SSH Key to GitHub Account"
date: "2022-09-01 08:00:00"
path: "/installations/"
# use the path equal to the location of the file in the directory (directory structure)

type: "📝 ASSIGNMENT"
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: "Installations - Mac + Windows"
# category: Use the Name + week for each (follow the format above)
tags:
  - Installations
is_featured: true
---
Now, we are going to copy our newly created SSH Key over to GitHub.

<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/747820719?h=831665900d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="add-ssh-to-github.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

The video above will walk you through the steps below.

1. Navigate to: [https://github.com/settings/keys](https://github.com/settings/keys) (Login if Prompted)
1. Click "New SSH Key"
1. Title your key: NSS SSH Key

Go back to the terminal and type the following:
```shell
cd
```
```shell
cd .ssh
```
```shell
cat id_rsa.pub
```

You will see the output. Copy/paste into GitHub and save.

**If prompted for password, type it in.**


Once you have completed all the steps above, push the button below to close this page and check the box on the list to mark as completed.

<button class="report m-1 p-3 btn-lg btn-outline-warning btn" onclick="window.close()">Close Page</button>
