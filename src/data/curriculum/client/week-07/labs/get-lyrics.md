---
title: 'Get Some Lyrics'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '🥼 LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - Webpack
is_featured: true
---
Using the pattern that you learned today and the <a href="https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search" target="_blank">Lyrics API</a>, create a function that gets the lyrics and `console.log` the results.

### Part 1
1. Go to your cohort organization on github and use the webpack template to start this project. Name the project "Lyrics API"
1. Do all the setup for the project
1. <a href="https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search" target="_blank">REVIEW THE DOCUMENTATION!</a>
1. Once you have reviewed the documentation, you will want to set up your API call in your code to ensure you are getting data back (wrap the call in a function). You should hardcode your artist and song for the test.

### To test:
- GET: Lizzo - Tempo
- GET: Prince - Purple Rain
- GET: 3 songs of your choice

### Part 2
Now that you know you are recieving data from the API, you can create an App that allows users to search for lyrics via the API. Using the Lyrics API, create a form that allows users to search the API and put the lyrics on the DOM.

1. Create a form that accepts user input
1. On submit, interpolate the user input into the API call to get the correct lyrics the user requested
1. Place the lyrics on the DOM

### Get some help
This video uses different ways to call the API, but the premise is similar. If you get stuck, feel free to use it the help you get unstuck or create a discussion ticket

<div style="padding:56.2% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/711242007?h=2469c71268&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Lyrics API Code along"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
