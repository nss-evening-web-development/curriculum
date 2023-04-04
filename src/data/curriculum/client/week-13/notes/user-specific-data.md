---
title: '06. User Specific Data'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 13 - Intro to React
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---

This lesson is informational and not intended for you to complete anything.

We have created a custom hook for you to be able to access the user info.

You can get user info and details by using this hook. See the code example below.

```js
import { useAuth } from '../utils/context/authContext'; // import the hook

function Home() {
  const { user } = useAuth(); // use the hook to get user info

  return (
    <>
      <h1>Hello {user.displayName}! </h1>
    </>
  );
}

export default Home;
```

There are a couple of pieces of code that is handling this, which is broiler plate for you, but if you are interested in learning more AFTER you have picked up the basic concepts of React, let an instructor know and we can set up a session to walk through it.
