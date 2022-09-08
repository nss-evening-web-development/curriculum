---
title: "Troubleshooting"
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
If you get an error that has code EACCES error like the example shown below...

```shell
npm ERR! path /usr/local/lib/...
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/...'
npm ERR!  { Error: EACCES: permission denied, access '/usr/local/lib/...'
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/...' }
npm ERR! 
npm ERR! Please try running this command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/macbookmd101/.npm/_logs/2018-02-21T16_26_08_421Z-debug.log
```

try running the terminal command with `sudo` right before the command you were trying to run like this:

NOTE: The curly braces are not meant to be copied. You will need to replace the command you were trying to run where the curly braces are

```shell
sudo {REPLACE THIS WITH THE_COMMAND}
```

After running using sudo, you may be prompted for your password, use the password you use to log into your machine and then press enter.

**NOTE: The cursor will not move as you type so carefully input the password, then press enter**

Once you have completed all the steps above, push the button below to close this page and check the box on the list to mark as completed.

<button class="report m-1 p-3 btn-lg btn-outline-warning btn" onclick="window.close()">Close Page</button>
