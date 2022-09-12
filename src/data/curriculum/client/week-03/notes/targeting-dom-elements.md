---
title: 'Notes - 03. Targeting DOM Elements'
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
When we want to target elements on the DOM in our JS, there are a couple of ways to do that. We will focus on one below.

Q: Why would you want to target elements on the DOM?

A: So that we can use JS to dynamically or conditionally render.

Let's take a quick look at what this means. [See Example Here](https://codesandbox.io/s/dom-targeting-c8q85h?file=/index.js)

1. Notice that there is no text in the HTML document (`index.html`) below that reads "Hello World!"
2. We want to put the text "Hello World!" inside of the div with an id of "app"

```html
<!--index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Iteration</title>
</head>
<body>
  <div id="app"></div>
  <script src="iteration.js"></script>
</body>
</html>
```

To dynamically add "Hello World!":
1. we target the element with an id of `app`
2. set the innerHTML to `"Hello World!"`

```js
// TARGETING ELEMENTS ON THE DOM
// To target, we will use the querySelector method and pass it the selector, 
// which in this case is an id with the value of "app"
const app = document.querySelector("#app");

app.innerHTML = "Hello World!"
```

## Give it a try

<iframe src="https://codesandbox.io/embed/dom-targeting-c8q85h?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="DOM Targeting"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
