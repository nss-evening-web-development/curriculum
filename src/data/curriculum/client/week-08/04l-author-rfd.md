---
title: '04L. Authors (READ, FILTER, DELETE)'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '🥼 LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 08 - Auth, CRUD, Persistent Data
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
In this lab, you are going to GET (READ), Filter, and DELETE Authors

- GET (READ)
  - All Authors (navigation)
- Filters
  - Favorite Authors (add a navigation item that when clicked, gets all the favorite authors and renders them to the DOM)
  - Modify the Author card to add an element that shows if an author is a favorite author (Take a look at the implementation on the Book card for on sale books)
- DELETE
  - Author (on card)
- GET (READ) - Merge Data - Single Author Details and Books
  - create a new view that shows the single author details as well as all of their books on the DOM
  - Add a click event in the domEvents.js file to capture the click on the 'view-author-btn' that is in the author card
  - when a user clicks the icon to view author, show the new view you created with all the details.
  - See example layout below
  ![aa-ss](https://user-images.githubusercontent.com/29741570/191143238-f5fd8102-5562-4292-8fd3-1fabfe648cfe.png)