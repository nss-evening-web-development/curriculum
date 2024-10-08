---
title: 'Routes (Next JS)'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 13 - Intro to React
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
**_See the react-topics project for code samples_**

- App Router
  - In the react-topics project, navigate to the app directory, create a new folder named the path.(e.g. contact)
  - Navigate to that page in the address bar. (e.g. http://localhost:3000/contact)
  - You will notice that you get a 404, that is because you may not have created the `pages.js` file that is required. Do that and then refresh. You will see a blank page.
     - NOTE: In the video, we use the shortcut `rfc` to create something called a functional component. This is an extention that you were to install earlier in the workflow. If you have not, do it now.
  - You may also have nested routes by creating directories/folders (see code example: my-folder)
- Dynamic Routes
  - Are determined by naming a folder with square brackets and then the name of the dynamic key between: `[dynamicKey]`
  - The folder must have a file named `page.js` inside just like all other routes.
  - The folder name **MUST** have square brackets if is using a dynamic route
  - You can only have one dynamic folder per directory
