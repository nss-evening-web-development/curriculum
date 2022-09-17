---
title: 'Notes - 01. Describing Data as Entities'
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
We describe data using entities. This helps us share information with other developers and provides useful documentation

For instance, if we wanted to create objects with properties that describe pies, we need to define the keys and the data types associated with the properties so that we can keep our data clean.

We can use a tool like [dbdiagram.io](https://dbdiagram.io/) to help with this.

```sql
-- How to represent an entity in dbdiagram 

Table pie {
  id integer [pk]
  name string
  ingredients string
  bakeTemp integer
  drinkPairing string
  imageUrl string
  instructor string
  iceCream string
  favorite boolean
}
```

Our actual data objects will have keys and values, while our diagram shows the keys and data types as seen below:

<img width="338" alt="piedbdio" src="https://user-images.githubusercontent.com/29741570/189730348-001a7b3f-8f72-4a42-b66b-2b075073a1de.png">
