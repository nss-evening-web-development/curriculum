---
title: '05. Project (CREATE, UPDATE, Clean up)'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 08 - Auth, CRUD, Persistent Data
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
In this lesson, we are going to be implementing the endpoints that we created in Postman in into our code.

We will be focusing on CREATE and UPDATE.

- CREATE
  - Book
- UPDATE
  - Book

### CLEAN UP

As you may have noticed, there are some bugs in the application now that we have the relationship between books and authors implemented in the UI of the application.

1. When a user deletes an author, when visiting the book, the book details view either shows undefined values or breaks
   - This is caused because there is a relationship between the book and the author. How do we know? Because the author ID from the author entity is on the book entity.
   - **TODO:** Walk through how we handle removing relationships on delete
2. When there are no books or authors in the database, there is an error that we need to handle
   - **TODO:** Update the getBooks function to handle a null value from the API
![Screen Shot 2022-05-28 at 6 37 07 AM](https://user-images.githubusercontent.com/29741570/191143656-dcbee419-dc81-4685-9b83-09a1674b5831.png)