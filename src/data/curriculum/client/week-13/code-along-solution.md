---
title: 'In Class Code Along Solution'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: 'đŠđŊâđĢ LIVE LEARNING SESSION'
# type options: đŠđŊâđĢ LIVE LEARNING SESSION, âšī¸ INFO, đĨ VIDEO, đģ CODE ALONG, đĨŧ LAB, âŠī¸ REVIEW/NOTES, đĨ GROUP LEARNING, đˇđŧââī¸ GROUP PROJECT, đ§  ASSESSMENT, đ ASSIGNMENT

category: Client Side - Week 13 - Intro to React
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
Using the `intro-to-react` repo, we will code a counter. Below is the code for the Counter App we started in class. Use it to get a better understanding of events and state.

```js
import { useState } from 'react';

function Home() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>Counter Title</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</button>
      <button type="button" onClick={() => setValue(0)}>Reset</button>
    </>
  );
}

export default Home;
```
