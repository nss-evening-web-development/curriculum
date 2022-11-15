---
title: '01. Refactor with User data'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 09 - Multiuser Application Setup
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
Up until this point, we have created the Almost Amazon in such a way that all users see all the authors and books that have been added to the application.

In some instances, that may be what you would like to see happen, but for this app, we want users to be able to:

- Create and manage their own authors (CRUD)
- Create and manage their own books (CRUD)
- Only have access to the books and authors that they create

### 🥇NOTE: You usually want to set this up first...
Why? So that as you are writing the functionality, you keep users in mind and build/test that way.

We did not do it first with Almost Amazon because it was important for you to understand CRUD (something you are familiar with) using an API.

In this lesson, we are going to look at how to update the methods we have created to ensure that users only are able to access and modify their own authors and books.

#### TODO
1. Take a look at the user object that we have access to through FB Google Auth
    - [Link to Firebase documentation for accessible properties](https://firebase.google.com/docs/reference/js/v8/firebase.User#properties)
2. Update the Firebase rules to include "uid" on both collections (books and authors)
    - [uid is a property on the user object](https://firebase.google.com/docs/reference/js/v8/firebase.User#uid) that we want to use for all records created by a user

```json
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

3. Head to Postman and test out some endpoints: We need to modify a couple of calls in Postman to get back only books that have a specific user ID

- Create a new folder called User Specific Requests
- Create 2 endpoints:
   - GET Books by UID
   - GET Authors by UID
4. When the app loads, pass the UID to start app > all the functions that need the user ID (See code samples below)

```js
// utils/viewDirector.js
import firebase from 'firebase/app'; // import the firebase app dependency
import 'firebase/auth'; // import the firebase auth dependency
import loginButton from '../components/buttons/loginButton';
import startApp from './startApp';
import firebaseConfig from '../../api/apiKeys';

const ViewDirectorBasedOnUserAuthStatus = () => {
  // This line initializes your firebase app using the values from your .env file
  firebase.initializeApp(firebaseConfig);

  // This function is looking for anytime the Auth State Changes.
  // In this app, this happens on 2 occasions:
  // 1. When a user logs in, their auth state changes to logged in
  // 2. When a user logs out, their auth state changes to logged out
  // Inside of this function, we will determine what happens when a user logs in and what happens when they log out
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in do something...
      loginButton(); // CLEAR THE DOM AND SHOW THE LOGIN BUTTON
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
```

5. We want to ensure that all the events get access to the UID so when we are CRUDing, we have the UID available.

```js
// utils/startApp.js

import { getBooks } from '../api/bookData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showBooks } from '../pages/books';

const startApp = (user) => {
  domBuilder(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  domEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  formEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  navBar(); 
  logoutButton(); 
  navigationEvents(); 

  // TODO: Put all books on the DOM on App load
  getBooks(user.uid).then((books) => showBooks(books));
};

export default startApp;
```

6. Modify relevant API calls to include the UID as a parameter. Below is an example of the few. As you work through, you will encounter errors, this is a part of learning, so move through them and fix as you go.

Advice: Start making your modifications in the following order:

- READ by UID (Books + Authors)
- CREATE with UID (Books + Authors) - ensure that when you create the UID is on the object you push to firebase

NOTE: If users can only READ their items and CREATE with their UID on the item, then they will only be able to UPDATE and DELETE their own stuff, so those endpoints should be OK to leave as is.

```js
// api/bookData.js

const getBooks = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="uid"&equalTo=${uid}`, {
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

const booksOnSale = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="uid"&equalTo=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const onSale = Object.values(data).filter((item) => item.sale);
      resolve(onSale);
    })
    .catch(reject);
});
```

- Here are some assumptions we are making:
  - CREATE: we need to add the uid to the payload so that when we GET we can index on the uid
  - READ: we need to modify the endpoint to only GET the logged in users stuff
  - UPDATE/DELETE: Since the user will only have access to their stuff on READ, they should be able to UPDATE and DELETE anything that they are able to READ, so we do not have to modify these endpoints.
