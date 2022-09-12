---
title: 'Notes - 04. Iteration'
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
## Combining Data Structures
So that we can allow our programs to be more scalable, it is better if we combine data types so that we can have more than one pie, I mean who ONLY likes one pie? Not this guy!

So, rather than having a bunch of variables that we have to hardcode, we can create an array of objects so we can iterate over them.

```js
const pies = [
  {
    name: "Dutch Apple Pie",
    ingredients: "apples,sugar,butter,nutmeg,dutch people",
    bakeTemp: 5000,
    drinkPairing: "Earl Grey Tea",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
    instructor: "Doc",
    iceCream: "Vanilla",
    favorite: false
  },
  {
    name: "Berry Pie",
    ingredients: "berries",
    bakeTemp: 400,
    drinkPairing: "wine",
    imageUrl:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg",
    instructor: "Doc",
    iceCream: "banana",
    favorite: true
  },
];
```
We can now see all the pie bake temps if we iterate over them:

```js
for (const pie of pies) {
    console.log(pie.bakeTemp) // 5000, 400
}
```

There are a few ways we can iterate. There are for loops, for...of loops (the example above) and there are forEach loops (only for arrays). See below for some more deets on each one:

## For Loop

<img width="1206" alt="forloop" src="https://user-images.githubusercontent.com/29741570/189755454-989bdce9-6933-47c5-a518-bda94320b081.png">

```js
for (let i = 0; i < pies.length; i++) {
    console.log(pies[i].bakeTemp) // 5000, 400
}
```

## For...of Loop
<img width="1073" alt="forof" src="https://user-images.githubusercontent.com/29741570/189755451-1b6b3470-4c54-4bcb-b34a-b86af5af6d00.png">

```js
for (const pie of pies) {
    console.log(pie.bakeTemp) // 5000, 400
}
```

## ForEach Loop

<img width="1251" alt="foreach" src="https://user-images.githubusercontent.com/29741570/189755449-31dec29d-9f7f-4b41-a585-3ede1b38ec58.png">

```js
pies.forEach((pie) => {
    console.log(pie.bakeTemp) // 5000, 400
});
```
## Give it a try!

<iframe src="https://codesandbox.io/embed/iteration-vpm2hv?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Iteration"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
