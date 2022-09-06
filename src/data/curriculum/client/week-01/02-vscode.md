---
title: '02. Visual Studio Code (VSCode)'
date: "2022-09-01 08:00:00"
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '💻 CODE ALONG'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 01 - Tools
# category: Use the Name + week for each (follow the format above)
tags: 
    - Code Editor
    - VSCode

---
<iframe width="100%" height="400" src="https://www.youtube.com/embed/JOFZ_v9Ju7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Visual Studio Code (VSC) is the code editor that we will be using for this course. It will allow us to code our projects among other things.
 
### Searching in VS
There are two ways to search for things in VS Code. Use the right method for the job you are trying to complete:
 
1. Global Search Use this when you are trying to find all occurrences of some text in ANY file in your open project.
    - **Shortcut Keys:**
        - Mac Users: `SHIFT + CMD + F`
        - Windows Users: `SHIFT + CTR + F`
 
1. Local Search Use this when you are trying to find any occurrences of some text in the current file you are in.
    - **Shortcut Keys:**
        - Mac Users: `CMD + F`
        - Windows Users: `CTR + F`
 
### Formatting
VS Code has great support for source code formatting:
- Format Document (⇧⌥F) - Format the entire active file.
 
### Settings to Change
These are things to make your life easier/your instructors lives easier/etc etc etc
 
To open your user and workspace settings, use the following VS Code menu command:
- On Windows/Linux - `File > Preferences > Settings`
- On macOS - `Code > Preferences > Settings`
 
_You can also open the Settings editor from the Command Palette (⇧⌘P) with Preferences: Open Settings or use the keyboard shortcut (⌘,)._
 
1. Explorer: Compact Folders - not checked. 
1. Editor: Tab Size - 2
1. Files: Insert Final Newline - checked
1. Files: Trim Final Newlines - checked
1. Editor: Word Wrap - on
 
### Extensions
Extensions are what make VS code so popular and easy to use. There are thousands of different plugins for everything you can imagine. Most of them are written to make development easier and more efficient.

To install or manage your extensions go to the extension tab by clicking on the extension icon in the left navigation bar. Once the extension tab is open you can search the marketplace for extensions and install or uninstall them.
 
### Extensions to Install
Here are some good extensions to get your productivity going. Search for these names in the extension tab and click install to get them working.
- [Auto Rename Tag](https://github.com/formulahendry/vscode-auto-rename-tag) - when you decide to rename an html tag this plugin automatically fixes the closing tag for you.
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - this extension matches pairs of brackets and colors them for you. Next time you are looking for a missing curly bracket or parenthesis just look for the one that doesn't have a closing tag of the same color
- [ESLint](https://github.com/Microsoft/vscode-eslint) - This extension checks your code for common errors using ESLint. We will talk more about this a few months into class.
- [GitLens](https://github.com/eamodio/vscode-gitlens) - Gives you insight into what git stuff is going on inside your project. You can see things like when the line was last modified and who modified it.
- [IntelliSense for CSS class names in HTML](https://github.com/Zignd/HTML-CSS-Class-Completion) - Auto completes HTML and CSS for any file that has been linked. Never type those whole bootstrap class names again.
- [Markdown Preview Github Styling](https://github.com/mjbvz/vscode-github-markdown-preview-style) - changes VS Code's built in markdown preview to match the Github flavor. Know exactly what those README files will look like before you push them.
- [Prettier](https://github.com/prettier/prettier-vscode) - Code Formatter - formats JS and CSS code inside a file.
- [Visual Studio Code Live Share](https://docs.microsoft.com/en-us/visualstudio/liveshare/use/vscode) - We'll just download the package for now and get it all setup later on. Allows you to share your VS Code editor with your friends!
- [Live Server OPTIONAL](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). If you have issues with the http-server working, you can choose to use this instead. Please read the docs for more info on how to use and get started.
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [ES7 React/Redux/GraphQL/React-Native snippets For React](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)
