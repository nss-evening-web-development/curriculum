---
title: '03. Project (READ, FILTER, DELETE)'
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

We will be focusing on GET (READ), Filters, and DELETE.

### **GET (READ)** - All Books (navigation and on app load after login)

1. Create the API call to get all books

```js
// api/bookData.js

// TODO: GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
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

2. Update the All Books navigation event

```js
// events/navigationEvents.js

// TODO: ALL BOOKS
document.querySelector('#all-books').addEventListener('click', () => {
  getBooks().then(showBooks);
});
```

3. Add function to get books in `startApp` so that books load when app initially runs

```js
// utils/startApp.js

const startApp = () => {
  ...

  // TODO: Put all books on the DOM on App load
  getBooks().then((books) => showBooks(books));
};
```

### **Filters** - Books on Sale (navigation)

1. Create the API call to get all books on sale

```js
// api/bookData.js

// TODO: FILTER BOOKS ON SALE
const booksOnSale = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="sale"&equalTo=true`, {
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

2. Update the Books on Sale navigation event

```js
// events/navigationEvents.js

// TODO: BOOKS ON SALE
document.querySelector('#sale-books').addEventListener('click', () => {
  booksOnSale().then(showBooks);
});
```

### **DELETE** - Book (card)

1. Create the API call to delete a book

```js
// api/bookData.js

// TODO: DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
```

2. Update the DOM event, which captures the click on the delete button on the book card to grab the firebaseKey
3. then call the delete function
4. Then, after the delete, we want to get all the updated books
5. rerender the DOM with the new data from the API

```js
// events/domEvents.js

// TODO: CLICK EVENT FOR DELETING A BOOK
if (e.target.id.includes('delete-book')) {
  // eslint-disable-next-line no-alert
  if (window.confirm('Want to delete?')) {
    console.warn('CLICKED DELETE BOOK', e.target.id);
    const [, firebaseKey] = e.target.id.split('--');

    deleteBook(firebaseKey).then(() => {
      getBooks().then(showBooks);
    });
  }
}
```
