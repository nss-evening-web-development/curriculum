---
title: '06. User Specific Data'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: 'đ ASSIGNMENT'
# type options: đŠđŊâđĢ LIVE LEARNING SESSION, âšī¸ INFO, đĨ VIDEO, đģ CODE ALONG, đĨŧ LAB, âŠī¸ REVIEW/NOTES, đĨ GROUP LEARNING, đˇđŧââī¸ GROUP PROJECT, đ§  ASSESSMENT, đ ASSIGNMENT

category: Client Side - Week 13 - Intro to React
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
We have created a custom hook for you to be able to access the user info.

You can get user info and details by using this hook. See the code example below.

```js
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <h1>Hello {user.displayName}! </h1>
    </>
  );
}

export default Home;
```

There are a couple of pieces of code that is handling this, which is broiler plate for you, but if you are interested in learning more AFTER you have picked up the basic concepts of React, let an instructor know and we can set up a session to walk through it.
