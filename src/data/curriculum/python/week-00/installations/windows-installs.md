---
title: 'Installations - Windows'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: Python - Week 00 - Onboarding
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

These are the steps for installing Python on your Windows computer. Please go to the Mac installations if you are using a Mac.

## Visual Studio Code Extensions

Install these extensions to get your VS Code editor set up for writing Python code.

* [Pylance][1]
* [Python Extension Pack][2]
* [SQLite][3]
* [Python Test Explorer][4]
* [Python Docstring Generator][5]

## Python
Python is not included with Windows. You must go to the [Python downloads](https://www.python.org/downloads/) page, download version 3.9, and install it. It will be installed in the `C:\Python39` directory.

After installing it, you must add `C:\Python39` to your system path. Here's how:

1. Press your Windows key.
2. Begin by typing **Control**.
3. The Windows Control Panel should be the first result in the search results. Click on it.
4. When the control panel screen appears, begin typing `environment` in the upper right corner search bar.
5. Choose the option to modify environmental variables. If you are given two options, you may select either one.
6. When the screen appears, click the Environment Variables button at the bottom.
7. Next, select on the `PATH` variable and click the Edit button.
8. Enter a semicolon and the new path entry at the end of the string. `;C:\Python39`

[1]: https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance
[2]: https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack
[3]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite
[4]: https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter
[5]: https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring
