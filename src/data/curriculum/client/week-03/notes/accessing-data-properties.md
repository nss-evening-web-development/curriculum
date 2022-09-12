---
title: 'Notes - 02. Accessing Data Properties'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '↩️ REVIEW/NOTES'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 03 - Intro to JavaScript
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
```js
const pie = {
  name: "Dutch Apple Pie",
  ingredients: "apples,sugar,butter,nutmeg,dutch people",
  bakeTemp: 5000,
  drinkPairing: "Earl Grey Tea",
  imageUrl:
    "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
  instructor: "Doc",
  iceCream: "Vanilla",
  favorite: false
}
```

## Accessing Properties
To access a property of an object, you use a dot (.). You start with the variable name whose value is the object, type a dot, then type the name of the property you want to see. So, if I wanted to see the bakeTemp, we could code:

```js
console.log(pie.bakeTemp);
```

You can also use bracket notation. This is especially important if you are using variables. It would look like this:

```js
console.log(pie["bakeTemp"]);
```
