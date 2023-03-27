---
title: 'Common Types: Python Tuples'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '🥼LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: Python - Week 01 - Python Fundamentals
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

Tuples are like lists, but are immutable. They can't be modified once defined. However, finding values in a tuple is faster than in a list.

## References

* [Python tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

## Instructions

1. Create a tuple named `zoo` that contains 10 of your favorite animals.
1. Find one of your animals using the `tuple.index(value)` syntax on the tuple.

    ```py
    # Example
    flowers = ("daisy", "rose")
    flower.index("rose") # Output is 1
    ```

1. Determine if an animal is in your tuple by using `value in tuple` syntax.

    ```py
    animal_to_find = "kangaroo"
    if animal_to_find in zoo:
        # Print that the animal was found
    ```

1. You can reverse engineer (unpack) a tuple into another tuple with the following syntax.

    ```py
    children = ("Sally", "Hansel", "Gretel", "Svetlana")
    (first_child, second_child, third_child, fourth_child) = children
    print(first_child) # Output is "Sally"
    print(second_child) # Output is "Hansel"
    print(third_child) # Output is "Gretel"
    print(fourth_child) # Output is "Svetlana"
    ```

    Create a variable for the animals in your zoo tuple, and print them to the console.
1. Convert your tuple into a list.
1. Use `extend()` to add three more animals to your zoo.
1. Convert the list back into a tuple.

## Try it out
<iframe src="https://replit.com/@callmedrt/Common-Types-Python-Tuplesembed=true" width="100%" height="400"></iframe>
