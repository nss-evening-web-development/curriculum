---
title: 'Array Methods'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '👥 GROUP LEARNING'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 04 - Lab & Array Methods
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
## Get Started
In JavaScript, an array is a data structure that contains list of elements which store multiple values in a single variable. The strength of JavaScript arrays lies in the array methods.

**Array methods** are functions built-in to JavaScript that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.

Here are a few methods. To see more, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">check out the docs</a>.

```js
const list = [1, 2, 3];

// MUTATES/MODIFIES ORIGINAL ARRAY:
list.push(4); // [1, 2, 3, 4]
list.pop(); // [1, 2]
list.shift(); // [2, 3]
list.unshift(1); // [1, 1, 2, 3]
list.reverse(); // [3, 2, 1]

// RETURNS BOOLEAN
list.includes(4); // false
list.every(n => n < 4); // true
list.some(n => n > 4); // false

// CREATES A NEW ARRAY
list.concat([4, 5]); // [1, 2, 3, 4, 5]
list.map(n => n * 2); // [2, 4, 6]
list.filter(n => n % 2 === 0); // [2]

// RETURNS ITEM/ELEMENT
list.find(n => n % 2 === 0); // 2 

// RETURNS A STRING
list.join('-'); // '1-2-3'

// RETURNS A NUMBER
list.indexOf(3); // 2
list.findIndex(n => n === 2); // 1

// RETURNS A SINGLE VALUE
list.reduce((a, b) => a + b, 0) // 10

// RETURNS A SHALLOW COPY OF ARRAY - https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
list.slice(1); //  [2, 3]
```

![array-prototype-cheat-sheet-](https://user-images.githubusercontent.com/29741570/190023356-a9976082-4365-4b0c-adc9-a68c0c030729.png)


## Code Along

Also, this project uses modules for JS. Do not worry about that. Just focus on the array methods and completing the items in the main.js

For this assignment, you should either code along with the video above or open the `scripts/main.js` file and update with the array methods in the comments.

### Get Started
- Copy repo
- Clone repo
- Start your server and get aquainted with the code
- Code along with the video
- The video is about 2.5 hours long, so you can take it a little at a time, but it will prepare you for work with array methods.

<a class="rn-button btn-purple" href="https://githubtools.reppedintech.com/u/codetracker-learning/ASSIGNMENT-intro-js-array-methods" target="_blank">COPY REPO</a>

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/697961784?h=c3847ab686&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Array Methods: Black Excellence"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

I keep referencing "for..in" loop, but I mean "for...of" charge it to my head and not my heart! LOL!
