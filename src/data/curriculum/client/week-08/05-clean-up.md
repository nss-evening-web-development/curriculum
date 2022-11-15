---
title: '05. Project (Clean up)'
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
In this lesson, we are going to be cleaning up

### CLEAN UP

As you may have noticed, there are some bugs in the application now that we have the relationship between books and authors implemented in the UI of the application.

1. When a user deletes an author, when visiting the book, the book details view either shows undefined values or breaks
   - This is caused because there is a relationship between the book and the author. How do we know? Because the author ID from the author entity is on the book entity.
   - **TODO:** Walk through how we handle removing relationships on delete. When we delete an author, first, we need to delete the book(s) associated with the author and then delete the author.
      - In order to get all of the books, we will need to create an array of promises
      - We will pass this array to `Promise.all()`. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank">(Docs)</a>
      - Once all the books have been deleted, THEN we will delete the author

```js
// mergedData.js
const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

// domEvents.js

// FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
if (e.target.id.includes('delete-author-btn')) {
  // eslint-disable-next-line no-alert
  if (window.confirm('Want to delete?')) {
    // console.warn('DELETE AUTHOR', e.target.id);
    // console.warn(e.target.id.split('--'));

    const [, firebaseKey] = e.target.id.split('--');

    deleteAuthorBooksRelationship(firebaseKey).then(() => {
      getAuthors().then(showAuthors);
    });
  }
}
```

2. When there are no books or authors in the database, there is an error that we need to handle
   - **TODO:** Update the getBooks function to handle a null value from the API

   ![Screen Shot 2022-05-28 at 6 37 07 AM](https://user-images.githubusercontent.com/29741570/191143656-dcbee419-dc81-4685-9b83-09a1674b5831.png)

```javascript
// bookData.js
const getBooks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
```
