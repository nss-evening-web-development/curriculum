---
title: 'Simply Books Setup'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '🥼 LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 14 - React Topics
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
<a class="rn-button btn-purple" href="https://repo-copier.netlify.app/u/codetracker-learning/IN-CLASS-simply-books" target="_blank">COPY REPO</a>

<iframe width="100%" height="500" src='https://dbdiagram.io/embed/60315ba6fcdcb6230b20bbaa'> </iframe>

### Description
For this project we are making the following assumptions:

- Users can only CRUD on items they created (this includes filtered data like favorites)
- an author can have many books
- a book can have one and only one author

We will also be touching on the all of the following concepts:

- Google Authentication with Firebase
- User specific data
- React basics and working with components
- State and working with events
- Rendering lists and conditional content (READ)
- Props
- Hooks
   - useState (State)
   - useEffect
- Routing (including dynamic routing)
   - Links & Navigation
- Forms (CREATE/UPDATE)
   - Two-way binding (listening to changes in input as well as the value)

**_All CRUD concepts touched in topics above_**

## Lab
In this lab, we want to get acclimated with the project template and get some things set up in prep for coding features next week. Below are a list of the items that you should complete prior to class on Monday evening:

### 1. Google Authentication with Firebase
- Complete "Starting the Project" on the Repo README
- Relevant files:
   - .env (Add firebase credentials to .env file)
      - Note that the env vars in Next.js require the prefix **`NEXT_PUBLIC_`** before the name to be accessed in your code
   - `utils/client.js`
   - `utils/auth.js`


### 2. File based routes ([Routing Docs](https://nextjs.org/docs/routing/introduction))

Remember: 
- In the pages directory, create a new file named the path specified.(e.g. contact.js)
- You may have nested routes by creating directories/folders

Create the following new file based routes and add filler code **(IMPORTANT: make sure ALL of the functions names start with a capital letter)**
   - `pages/authors.js`
   - `pages/profile.js`
   - `pages/author/new.js`


### 3. DYNAMIC routes ([Routing Docs](https://nextjs.org/docs/routing/introduction))

Remember: 
- DYNAMIC routes are determined by naming a file with square brackets and then the name of the dynamic key - between: [dynamicKey].js’
- The filename MUST have square brackets if the page is using a dynamic route
- You can only have one dynamic file per directory
- You can name the dynamic key ANYTHING. It is a taco.

Create the following new file based DYNAMIC routes **(IMPORTANT: make sure ALL of the functions names start with a capital letter)**
- `pages/author/[firebaseKey].js`
- `pages/author/edit/[firebaseKey].js`

### 4. [Links & Navigation](https://nextjs.org/docs/api-reference/next/link)

- Update the `NavBar.js` component to include the following links. Link the pages to the relevant pages you created in the routing activity
   - Authors
   - Create Author
   - Profile

### 5. [Extracting Dynamic Route Data](https://nextjs.org/docs/routing/dynamic-routes)
- Now that you have some pages/routes set up, let's grab the data from the dynamic routes.
- The actual value for *DYNAMIC_KEY* is whatever you named your file. In this instance it is **firebaseKey**, so make sure to update the code below inside of your component

```js
import { useRouter } from 'next/router';

// inside component use
const router = useRouter();
const { DYNAMIC_KEY } = router.query;
```

### 6. Working with components
- **Create User component:** a component that accepts the user object and uses the image, name, email, and last login
    - For any images be sure to use the `<img/>` tag instead of the `<Image/>` component from Next/Image.
    - An eslint error: **Do not use <img>. Use Image from 'next/image' instead. See [https://nextjs.org/docs/messages/no-img-element.](https://nextjs.org/docs/messages/no-img-element)** Just disable this error for the entire file.
    
    - If you do use Next/Image component you will need to add your image domain in to the `config.next.js` file. 
        - ```images: { domains: ['lh3.googleusercontent.com'], },```
        - Next/Image also requires the `width` & `height` props.
- **Create AuthorCard component:** a component that accepts the author data and displays it.
- Setup PropTypes and use default props to give default values to the component so you can test it


### 7. User specific data

- Relevant files
   - `utils/context/authContext.js`
- useAuth custom hook
   - Use the following code anywhere inside your components to get access to the user details

```js
const { user } = useAuth();
```
- In the pages/profile.js page, use the **User component** you created to display the user information.
- Add the Sign Out button below the user component
- Use the code above inside of your component to get access to the useAuth hook **_(Make sure to import the dependency located in `utils/context/authContext.js`)_**

### 8. Bring over the data

Go to your old Almost Amazon project and bring copy/paste the author, books and merged data API calls you created into the relevant files. **DO NOT OVERWRITE ANY FUNCTIONS** that currently are in those files unless yours are different.
