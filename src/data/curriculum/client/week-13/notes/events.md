---
title: '01. Events'
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
<a class="rn-button btn-purple" href="https://repo-copier.netlify.app/u/codetracker-learning/react-topics" target="_blank">COPY REPO</a>


Click the button above to see the code examples for the next few topics. After getting the repo, follow the readme.

Events in React are treated the same as DOM events in Vanilla JS. The function always has access to the event the same as in Vanilla JS as well.

The major difference is:

1. We do not querySelect the element we want to target
1. We do not use the addEventListener method on the element to capture the event

We directly add the event on the element and pass a function in one of 2 ways **_(NOTE: these are the same ways we did with addEventListener):_**

- Anonymous function
- Callback

### Most Used Events:
- `onClick` (buttons)
  - Standard function name: `handleClick`
- `onChange` (form elements)
  - Standard function name: `handleChange`
- `onSubmit` (form)
  - Standard function name: `handleSubmit`

```js
// callback example:
 <button type="button" onClick={handleClick}>Increment</button>

// Anonymous function example
 <button type="button" onClick={() => setValue(0)}>Reset</button>

// form example
 <form onSubmit={handleSubmit}>
   <input onChange={handleChange} value={inputValue} />
 </form>
 ```
