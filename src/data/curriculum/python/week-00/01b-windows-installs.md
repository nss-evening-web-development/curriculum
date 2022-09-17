---
title: '1b. Installations - Windows'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: Python - Week 00 - Introduction
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

These are the instructions for installing Python on your Windows Machine. If you are using a Mac, please go to the Mac installations.

## Visual Studio Code Extensions

Install these extensions to get your VS Code editor set up for writing Python code.

* [Pylance][1]
* [Python Extension Pack][2]
* [SQLite][3]
* [Python Test Explorer][4]
* [Python Docstring Generator][5]

## Python

Windows does not come with Python installed. You need to visit the [Python downloads](https://www.python.org/downloads/) site and grab version 3.9 and install it. It will get installed to the `C:\Python39` directory.

After it is installed, you must add `C:\Python39` to your system path. Here's how.

1. Press your Windows key.
2. Start typing **Control**.
3. The search results should have the Windows Control Panel as the first result. Press enter.
4. When the control panel screen appears, start typing in `environment` in the search bar in the upper right corner.
5. Select the option to change environment variables. If you are presented with two options, choosing either one is fine.
6. When the screen appears, click the button at the bottom for environment variables.
7. Next, click on the `PATH` variable and choose to edit it.
8. Go to the end of the string, and enter a semi-colon, and the new path entry. `;C:\Python39`

[1]: https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance
[2]: https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack
[3]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite
[4]: https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter
[5]: https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring
