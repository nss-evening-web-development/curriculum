---
title: 'Hello, World!'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# In Class: 🥼 LAB, 👷🏼‍♂️ GROUP PROJECT, 👩🏽‍🏫 LIVE LEARNING SESSION, 📝 ASSIGNMENT
# ℹ️ INFO, 🎥 VIDEO, ↩️ REVIEW/NOTES,🧠 ASSESSMENT, 👥 GROUP LEARNING, 💻 CODE ALONG
category: Python - Week 01 - Python Fundamentals
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

## Setup

We're going to get your first Python console application *(also known as a "command line interface" application or "cli" app)* set up and running so that we can review some basics of the language.

1. Navigate to your python directory in your workspace
1. Create a directory called `hello-world`
1. Open your new directory in VSCode
1. Create a README.md file and push this new directory to GitHub for version control.
1. Create a file in this directory called `hello_world.py`
1. Add the following block of code into your new `hello_world.py` file.

    ```python
    print("Hello, World!")
    ```

1. Your file structure should now look like this

    ```terminal
    .
    ├── README.md
    └── hello_world.py

    0 directories, 2 files
    ```

Before we dig any deeper, let’s run our new application. Make sure your terminal is open and in the location to which the `hello_world.py` file lives. Run this file by typing `python hello_world.py` in your terminal and pressing Enter.

Add this code into your `hello_world.py` file, replacing everything there.

```python
print("Howdy Y'all!!");
```

Next, because changes have been made, you need to re-run the program to make sure there are no errors.

Because this is a console application, the termins in which you ran the command to run the file should have `Howdy Y'all!!` printed out on it.

Add the following code to your `hello_world.py` .

```python
animals = [ "Triceratops", "Gorilla", "Corgi", "Toucan"]

for animal in animals:
    print(animal)
```

Luckily, the `if-then` syntax works very similar to JavaScript. Let's put a condition around what animals get displayed.

## Exercise

1. Add a feature to your application that will only print animal names that have 5 characters or more.
1. Add a feature to your application that will accept an input that asks the user to pick from at least 3 different greetings. Obviously the default option should be "Southern"

> HINT: you might need to google or ask someone how to pass arguments into your console app.
