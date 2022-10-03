---
title: 'Promises'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - Webpack
is_featured: true
---
**Objective:** Students will understand and demonstrate knowledge on how promises work and implement them in their code. 

## Learning Objectives
- Being able to explain promises
- Creating new Promises, using resolve and reject
- `.then()` and `.catch()`
- Be able to explain the difference between callbacks and promises
  - A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future.
- Be able to explain promise chaining
- `Promise.all()`, `Promise.allSettled()`

## Overview:
JS reads top to bottom, but there will be times that we want to get data from an external source such as APIs. While the data is fetching, we do not want the program to stop running or fail, so we can use promises to allow the other portions of the code to continue running while the data is being fetched.

Promises allow us to tell our code to run out and grab the data, but don’t stop and wait for it to come back before loading all the other JS we have THEN once we have either the data or an error, we can handle that on the client.

## IN CLASS
- [Talk about Front End Layers](https://www.figma.com/file/M4tCBTbmxMkBCiOncR0Lul/Front-End-Organization?node-id=0%3A1)
- [Presentation](https://prezi.com/view/5v5n29dEPm0JfJfTgVbR/)
- [Exercise](https://nss-evening-curriculum.netlify.app/client/03l-promises-pattern-exercise)
