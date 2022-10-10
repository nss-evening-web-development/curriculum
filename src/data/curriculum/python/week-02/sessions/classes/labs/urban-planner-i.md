---
title: 'Intro to Classes - Urban Planner I'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '🥼LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Python - Week 02 - Advanced Fundamental Sessions
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE TAGS
is_featured: true
---

## Practice: Urban Planner

### Setup

```sh
mkdir -p ~/workspace/python/exercises/intro-to-classes/planner && cd $_
touch building.py
```

In this exercise, you are going to define your own **`Building`** type and create several instances of it to design your own virtual city. Create a class named **`Building`** in the `building.py` file and define the following fields, properties, and methods.

### Properties

* `designer` - It will hold your name.
* `date_constructed` - This will hold the exact time the building was created.
* `owner` - This will store the same of the person who owns the building.
* `address`
* `stories`

### Methods

* Define a `construct()` method. The method's logic should set the `date_constructed` field's value to `datetime.datetime.now()`. You will need to have `import datetime` at the top of your file.

* Define a `purchase()` method. The method should accept a single string argument of the name of the person purchasing a building. The method should take that string and assign it to the `owner` property.

### Constructor

Define your `__init__` method to accept two arguments

1. `address`
2. `stories`

Once defined this way, you can send those values as  parameters when you create each instance

```py
 eight_hundred_eighth = Building("800 8th Street", 12)
 ```

### Creating Your Buildings

1. Create 5 building instances
1. Have each one get purchased by a real estate magnate
1. After purchased, construct each one
1. Once all building are purchased and constructed, print the address, owner, stories, and date constructed to the terminal for each one.

#### Example

```sh
800 8th Street was purchased by Bob Builder on 03/14/2018 and has 12 stories.
```
