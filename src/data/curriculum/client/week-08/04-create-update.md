---
title: '04. Project (CREATE, UPDATE)'
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

We will be focusing on CREATE and UPDATE.

### CREATE Book
- Form - `components/forms/addBookForm.js`
- Select Menu for Authors - `components/forms/selectAuthor.js`

TODO: 
1. First, Let's create the API calls for these features

```js
// api/bookData.js

// TODO: CREATE BOOK
const createBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE BOOK
const updateBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
```

2. On click of "Add A Book" button, show form

```js
// events/domEvents.js

if (e.target.id.includes('add-book-btn')) {
  addBookForm();
}
```
3. On submit of form, capture all the data in `events/formEvents.js`

```js
// events/formEvents.js

if (e.target.id.includes('submit-book')) {
  const payload = {
    title: document.querySelector('#title').value,
    description: document.querySelector('#description').value,
    image: document.querySelector('#image').value,
    price: document.querySelector('#price').value,
    author_id: document.querySelector('#author_id').value,
    sale: document.querySelector('#sale').checked,
  };

  createBook(payload).then(({ name }) => {
    const patchPayload = { firebaseKey: name };

    updateBook(patchPayload).then(() => {
      getBooks().then(showBooks);
    });
  });
}
```
### UPDATE Book

TODO:
1. On click of update button, grab the book firebaseKey

```js
// events/domEvents.js

// TODO: CLICK EVENT EDITING/UPDATING A BOOK
if (e.target.id.includes('edit-book-btn')) {
  const [, firebaseKey] = e.target.id.split('--');

  getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
}
```

2. Make a call to the API to get the single book object

```js
// api/bookData.js

// TODO: GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
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

3. Pass the object to the ` addBookForm` function as an argument

```js
// events/domEvents.js

// TODO: CLICK EVENT EDITING/UPDATING A BOOK
if (e.target.id.includes('edit-book-btn')) {
  const [, firebaseKey] = e.target.id.split('--');

  getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
  // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
}
```

3. On submit of form, grab all the values and add `firebaseKey` to the payload
4. Pass to update function

```js
// events/formEvents.js

// TODO: CLICK EVENT FOR EDITING A BOOK
if (e.target.id.includes('update-book')) {
  const [, firebaseKey] = e.target.id.split('--');
  const payload = {
    title: document.querySelector('#title').value,
    description: document.querySelector('#description').value,
    image: document.querySelector('#image').value,
    price: document.querySelector('#price').value,
    author_id: document.querySelector('#author_id').value,
    sale: document.querySelector('#sale').checked,
    firebaseKey,
  };

  updateBook(payload).then(() => {
    getBooks().then(showBooks);
  });
}
```
