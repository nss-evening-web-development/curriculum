---
title: '03. React - CREATE'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION + 🥼 LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 15 - CRUD React
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
### 👩🏽‍🏫 LIVE LEARNING SESSION: CREATE Books (30 minutes)
In this lesson, we will be focusing on CREATE.

- **CREATE** Book
    - Create form
        - Initial State
        - Form input and binding values

**Things to remember about forms:**
- Always have state
- In order for inputs to work properly, there should be a value attribute that is connected to the state value and a name attribute whose value is the same as the key in state:

```HTML
<input 
  type="text"
  name="title"
  value={variable.title}
  onChange={handleChange}
/>
```

- When modifying data in state for the inputs, ALWAYS use the previous state in the setter function like so:

```JAVASCRIPT
const handleChange = (event) => {
  const { name, value } = event.target;

  setVariable((prevState) => ({
    ...prevState,
    [name]: value, // we can use the attributes for the inputs to dynamically update the values
  }));
}
```

### 🥼 LAB: DELETE Authors (60 minutes)
In this lab, we will be focusing on CREATE.

- **CREATE** Author
    - Create form
        - Create a form that allows users to enter author details and on submit adds to database
        - When submitted, the DOM is rerendered with the new author added
