---
title: '04. APIs + Postman'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - Webpack
is_featured: true
---
## Get Started
- You should have done this with installs, but if you have not, [download the DESKTOP version of Postman](https://www.postman.com/downloads/)
- [Presentation](https://docs.google.com/presentation/d/e/2PACX-1vQ1K4xIBAWarDTsVJ4CRkEcANVAI9GcFtc8nvx_26q46xqeTfmTkTp1xB7B2voDlDlvg4bGeet0CPbF/pub?start=false&loop=false&delayms=60000)

### Overview:

Postman is a tool that allows us to make calls to APIs without thinking about code implementation. It allows us to make requests and see the shape of data and endpoint testing. We will learn HTTP Request verbs and status codes using our first Firebase project.

### IN CLASS: 
**Firebase**

You should have already watched the videos and taken notes for setting up firebase **AND created the Almost Amazon Firebase project**. While you may not fully understand the what and why, the videos will help you with the how. We will quickly walk through what you should have already completed to get a project ready.

**HTTP Request Verbs**

- GET - Read (sometimes requires ID depending on request)
- POST - Create (Requires a payload)
- PATCH - Update (Requires a payload AND an ID in the endpoint)
- DELETE - Delete (requires an ID)
- Status Codes:
  - http://httpstatusrappers.com/
  - http://httpstat.us/503 

**Postman Learning**
- Create a collection
- Save endpoints to a collection

_For this lesson, we will be using the Almost Amazon firebase database that you created. Grab the URL from your firebase project._

![fbgeturl](https://user-images.githubusercontent.com/29741570/191059293-0dc2893e-b741-4d6e-9cc5-49ca5291fb18.png)

- GET (READ)
  - SHOW: All Books
  - SHOW: Single Book
- POST (CREATE)
  - SHOW: Book > Patch Book
- PATCH (UPDATE)
  - SHOW: Book
- DELETE
  - SHOW: Book
- [Filter Data](https://firebase.google.com/docs/database/rest/retrieve-data#section-rest-filtering)
  - [Setup FB rules](https://firebase.google.com/docs/database/security/indexing-data#section-indexing-order-by-child) (See below)
  - SHOW: Books on sale
  - SHOW: Books by UID
- Share a collection

![fbrules](https://user-images.githubusercontent.com/29741570/191059608-ed6bb999-76d6-41c1-9277-01d4ce8be69e.png)

```json
{
  "rules": {
    "dinosaurs": {
      ".indexOn": ["height", "length"]
    }
  }
}
```
