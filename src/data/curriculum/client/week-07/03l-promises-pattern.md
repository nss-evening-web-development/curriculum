---
title: '03L. Promises Pattern Exercise'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '🥼 LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - Webpack
is_featured: true
---
1. Create a [Gist](https://gist.github.com/)
1. Name the file `promises.js`. This will give you some syntax highlighting.
1. Type out the pattern for promises 20 times. Type **EVERY** letter:

```js
const promise = () => new Promise((resolve, reject) => {
    fetch('http://example.com/movies.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
})
```
