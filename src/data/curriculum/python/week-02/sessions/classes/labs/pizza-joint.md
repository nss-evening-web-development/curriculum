---
title: 'Intro to Classes - Pizza Joint'
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

## Practice: Pizza Joint

### Setup

```bash
mkdir -p ~/workspace/python/exercises/intro-to-classes && cd $_
touch classes.py
```

### Instructions

1. Create a **`Pizza`** type for representing pizzas in Python. Think about some basic properties that would define a pizza's values; things like size, crust type, and toppings would help. Define those in the `__init__` method so each instance can have its own specific values for those properties.

1. Add a method for interacting with a pizza's toppings, called `add_topping`.

1. Add a method for outputting a description of the pizza _(sample output below)_.

1. Make two different instances of a pizza. If you have properly defined the class, you should be able to do something like the following code with your Pizza type.

```py
meat_lovers = Pizza()
meat_lovers.size = 16
meat_lovers.style = "Deep dish"
meat_lovers.add_topping("Pepperoni")
meat_lovers.add_topping("Olives")
meat_lovers.print_order()
```

You should produce output in the terminal similiar to the following string.

```sh
"I would like a 16-inch, deep-dish pizza with Pepperoni and Olives."
```
