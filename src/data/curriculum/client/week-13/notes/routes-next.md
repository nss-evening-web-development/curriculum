---
title: '04. Routes (Next JS)'
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

- Pages
  - In the react-topics project, navigate to the pages directory, create a new file named the path.(e.g. contact.js)
  - Navigate to that page in the address bar. (e.g. http://localhost:3000/contact.js)
  - You may have nested routes by creating directories/folders (see code example: my-folder)
- Dynamic Routes
  - Are determined by naming a file with square brackets and then the name of the dynamic key between: `[dynamicKey].js`
  - The filename **MUST** have square brackets if the page is using a dynamic route
  - You can only have one dynamic file per directory
