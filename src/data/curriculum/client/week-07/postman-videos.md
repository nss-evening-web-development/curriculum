---
title: 'Postman Videos'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '🎥 VIDEO'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - Webpack
is_featured: true
---

<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/9964054/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>

_For this lesson, we will be using the Almost Amazon firebase database that you created. Grab the URL from your firebase project._

### Use this link to import collection `https://www.getpostman.com/collections/279b9c2d1902567e1b72`

![fbgeturl](https://user-images.githubusercontent.com/29741570/191059293-0dc2893e-b741-4d6e-9cc5-49ca5291fb18.png)

- GET (READ)
  - SHOW: All Books
  - SHOW: Single Book
- POST (CREATE)
  - SHOW: Book > Patch Book
- PATCH (UPDATE)
  - SHOW: Book
- DELETE
  - SHOW: Book
- <a href="https://firebase.google.com/docs/database/rest/retrieve-data#section-rest-filtering" target="_blank">Filter Data</a>
  - <a href="https://firebase.google.com/docs/database/security/indexing-data#section-indexing-order-by-child" target="_blank">Setup FB rules</a> (See below)
  - SHOW: Books on sale
  - SHOW: Books by UID
![fbrules](https://user-images.githubusercontent.com/29741570/191059608-ed6bb999-76d6-41c1-9277-01d4ce8be69e.png)

```json
// Rules for this project
{
  "rules": {
    ".read": "true",
    ".write": "true",
    "books": {
      ".indexOn": ["author_id", "uid", "sale"]
    },
    "authors": {
      ".indexOn": ["favorite", "uid"]
    }
  }
}
```

- Share a collection (BONUS)
