---
title: '06. Project (Book Details)'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 08 - Auth, CRUD, Persistent Data
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
In this lesson, we are going to be implementing the endpoints that we created in Postman in into our code.

<a href="https://docs.google.com/presentation/d/1CuB2rkWka0Tgo_pwtAWAFQLQG9jnJh6oes9H8hFjnhI/edit?usp=sharing" target="_blank">Link to Presentation</a>

We will be focusing on GET (READ) Book Details, which includes the Author info.

- **GET (READ) - Merge Data**
  - Single Book (book card - when a user clicks the icon to view book, show the single book details along with the author details on the DOM)

- **GET (READ) - Author Books**
  - We want to be able to get all of the author's books

```js
// authorData.js

const getAuthorBooks = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="author_id"&equalTo=${firebaseKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
```
