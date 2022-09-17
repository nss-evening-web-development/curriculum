---
title: '03R5. Review Topic - Conditionals'
date: "2022-09-01 08:00:00"
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '↩️ REVIEW/NOTES'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 02 - HTML, CSS, and JS Review
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

There are different types of conditionals in JavaScript:

- “If” statements: where if a condition is true, the code block runs.
- “Else” statements: if the `if` condition is false, code in the `else` block will run.
- “Else if” statements: if the `if` condition is false, and we want to evaluate another condition to see if it is true. If so, the code block runs.

**Falsey Values** evaluate to false. The following are falsey values:
- `“”`
- `0`
- `false`
- `null`
- `undefined`
- `NaN`

### Examples
```js
// The if Statement
if (condition) {
  // block of code to be executed if 
  // the condition is true
}

//  else condition
if (condition) {
  // block of code to be executed if the 
  // condition is true
} else {
  // block of code to be executed if the 
  // condition is false
}

// The else if condition
if (condition1) {
  // block of code to be executed if the condition1 is true
} else if (condition2){
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```
