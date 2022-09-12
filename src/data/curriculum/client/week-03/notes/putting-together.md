---
title: 'Notes - 05. Putting it all together'
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
So, now that we have the data and we know how to target elements on the DOM and iterate through the data, let's put it all together, but use [Bootstrap](https://getbootstrap.com/)

- Go to get started on Bootstrap and add the CSS link and the script tag
- Go to components and get the first card and let's use it.

Let's start with the data we are going to use.

```js
const pies = [
  {
    id: 1,
    name: "Dutch Apple Pie",
    ingredients: "apples,sugar,butter,nutmeg,dutch people",
    bakeTemp: 5000,
    drinkPairing: "Earl Grey Tea",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
    instructor: "Doc",
    iceCream: "Vanilla"
  },
  {
    id: 2,
    name: "Berry Pie",
    ingredients: "berries",
    bakeTemp: 400,
    drinkPairing: "wine",
    imageUrl:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg",
    instructor: "Doc",
    iceCream: "banana"
  },
  {
    id: 3,
    name: "Pumpkin Pie",
    ingredients: "pumpkins, nutmeg, cinnamon, graham crackers, pilgrims",
    bakeTemp: 42,
    drinkPairing: "egg nog",
    imageUrl:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg",
    instructor: "Aja",
    iceCream: "Vanilla"
  }
];
```

Now, let's get those pies on the DOM
```js
const targetingApp = document.querySelector("#app");

let domString = "";
for (const pie of pies) {
  // CARD FROM BOOTSTRAP: https://getbootstrap.com/docs/5.1/components/card/#example Removed the button
  domString += `<div class="card" style="width: 18rem;">
      <img src=${pie.imageUrl} class="card-img-top" alt=${pie.name}>
      <div class="card-body">
        <h5 class="card-title">${pie.name}</h5>
        <p class="card-text">${pie.ingredients}</p>
      </div>
    </div>`;
};

targetingApp.innerHTML = domString;
```

## Give it a try!
Challenge: Use another component from Bootstrap and replace it in the code editor below.


<iframe src="https://codesandbox.io/embed/put-it-together-jmwm1w?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Put it together"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
