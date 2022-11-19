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

### **GET (READ) - Merge Data**
  - Single Book (book card - when a user clicks the icon to view book, show the single book details along with the author details on the DOM)

  ![Screen Shot 2022-11-15 at 12 28 57 PM](https://user-images.githubusercontent.com/29741570/201997840-a5186eb9-84e7-411a-89aa-d00cc6263744.png)


1 We need to use the  API call that gets a single book

```js
// api/bookData.js

const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});
```
2. We need to use the  API call that gets a single author

```js
// api/authorData.js

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});
```
3. We will use both of these calls to get the data and then manipulate it before sending it to the UI

```js
// api/mergedData.js

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
// GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
// GET AUTHOR
// Create an object that has book data and an object named authorObject
});
```

---
## BONUS: Another way to write this using async/await for promises

```js
const getBookDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise) 
  const bookObject = await getSingleBook(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
  const authorObject = await getSingleAuthor(bookObject.author_id); // this function uses the data response from the bookObject

  return { ...bookObject, authorObject };
};
```
NOTE: we only want to use async/await as used above when we have data that is dependent on another API call. For all else, we can use `Promise.all`, `Promise.allSettled`, etc. Why? Because we do not want to wait for each API call to be made if it is not necessary. This would slow down the code.
