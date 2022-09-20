---
title: '01. Project (USER AUTH)'
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
In this lesson, we will be looking briefly at authentication with Firebase.

We do not go deeply into authentication because:

1. you will likely not be responsible for auth as a new engineer
1. Authentication implementation varies so much on a case-by-case basis
1. COPY PASTA: You will be using the code provided to you for your authentication

**In your webpack template, you have access to 3 files that are built based on the Firebase documentation:**

These methods are a part of the Business logic layer, which tell the application what to do when the functions are called.

1. `utils/auth.js` - Gives us access to 2 methods for logging in and out of the application
   - signIn.js - The Firebase method that allows users to login using Google with the Firebase App we created
   - signOut.js - The Firebase method that allows users to logout using Google with the Firebase App we created

```js
import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export { signIn, signOut };
```

2. `utils/viewDirector.js` - Determines if a user is logged in. If so, show them the log out button, else show them the login button

```js
import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import client from '../../utils/apiKeys';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
```

You also have access to some simple buttons that call the functions above on the DOM

These buttons are the UI presentation for users to be able to login and out.

- `components/loginButton.js`
- `components/logoutButton.js`

## NOTE:
When deploying, make sure to reference this video at the 2:00 mark on how to add your domain to Firebase so that auth will work.

<div style="padding:56.2% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/599246465?h=41b5e9c84e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="7. Firebase App Deployment with env variables"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
