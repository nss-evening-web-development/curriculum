---
title: 'Accepting User Input'
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

Python provides one basic methods to read user input on the command line.

## input()

The <a href="https://docs.python.org/3/library/functions.html#input" target="_blank">`input()`</a> method is used to receive data from the keyboard. This function accepts an optional parameter, prompt, which is a string that is printed to the screen whenever the function is called.

```python
>>> txt = input("Type something to test this out: ")
Type something to test this out: Test this text here!
>>> print(f"Is this what you just said? {txt}")
Is this what you just said? Test this text here!
```

## Hello World, Nice to Meet You

1. Add an extra feature to your ***Hello World*** application that will prompt the user to enter funny animal names, **then** greet them with their new animal names.

    ```bash
    # Example of prompt
    List out some funny animal names: spider monkey, pig in a blanket, flying squirrel

    # Example of output
    Hi there! These are the names you've submitted: spider monkey, pig in a blanket, flying squirrel
    ```

1. Update the output for the last prompt to have each aninal each on their own lines with numbers besude them.

    ```bash
    # Example of new output
    Hi there! These are the names you've submitted:
    1. spider monkey
    2. pig in a blanket
    3. flying squirrel
    ```

1. Add an extra feature that will prompt the user for their favorite color **then** ask them if they would like a random animal (from their funny animal input) of that color (ex. `Would you like to have a blue triceratops?`)

    ```bash
    # Example of prompt
    What is your favorite color: red

    # Example of output
    Would you like to have a red spider monkey?
    ```

In the end your application should run like this:

```bash
# Output
Triceratops
Gorilla
Corgi
Toucan

# User Input prompt
List out some funny animal names: spider monkey, pig in a blanket, flying squirrel

# Output
Hi there! These are the names you've submitted:
1. spider monkey
2. pig in a blanket
3. flying squirrel

# User input prompt
What is your favorite color: red

# Output
Would you like to have a red spider monkey?
```
