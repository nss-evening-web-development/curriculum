---
title: 'Common Types: Python Lists'
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

A list is the new array from JavaScript. They are collections of similar items. The syntax is identical to JavaScript's array.

```py
animals = ["Jack", "Noonan", "Blue", "Gypsy"]
```

## Reference

* [Python Lists](https://docs.python.org/3.6/tutorial/datastructures.html)
* [Learn Python - Lists](http://www.learnpython.org/en/Lists)


## Practice: Random Numbers

### Random Numbers Instructions

1. Use the following code to create a list of 10 random numbers. Each number will be between 0 and 11.

    ```py
    import random

    my_randoms = list()
    for i in range(10):
        my_randoms.append(random.randrange(1, 11))
    ```

    The `my_randoms` list will now contain random numbers

    ```py
    [1, 3, 8, 2, 4, 8, 5, 4, 2, 5]
    ```

1. Then iterate a different list of numbers that are sequential from 1 to 10. Use the following code as your starting point.

    ```py
    import random
    """
    Print a message to the console indicating whether each value of
    `number` is in the `my_randoms` list.
    """

    my_randoms = list()
    for i in range(10):
      my_randoms.append(random.randrange(1, 11))

    # Generate a list of numbers 1..10
    numbers_1_to_10 = range(1, 11)

    # Iterate from 1 to 10
    for number in numbers_1_to_10:
        # check if the number exists in the my_randoms list
        # if so, print(f'my_randoms list contains {number}')
        # else print(f'my_randoms list does not contain {number}')
    ```

#### Example Output in the Terminal

```sh
my_randoms list contains 1
my_randoms list does not contain 2
my_randoms list contains 3
my_randoms list does not contain 4
my_randoms list contains 5
my_randoms list does not contain 6
my_randoms list contains 7
my_randoms list does not contain 8
my_randoms list contains 9
my_randoms list contains 10
```

> **NOTE:** Each run will produce different output.

## Try it out
<iframe src="https://replit.com/@callmedrt/Common-Types-Python-Lists?embed=true" width="100%" height="400"></iframe>

## Practice: Planet List

<iframe src="https://replit.com/@callmedrt/Exercise-Planet-List?embed=true" width="100%" height="400"></iframe>

<!-- ### Setup

```sh
mkdir -p ~/workspace/python/lists && cd $_
echo 'planet_list = ["Mercury", "Mars"]' >> planets.py
```

### Planet List Instructions

1. Use `append()` to add Jupiter and Saturn at the end of the list.
1. Use the `extend()` method to add another list of the last two planets in our solar system to the end of the list.
1. Use `insert()` to add Earth, and Venus in the correct order.
1. Use `append()` again to add Pluto to the end of the list.
1. Now that all the planets are in the list, slice the list in order to get the rocky planets into a new list called `rocky_planets`.
1. Being good amateur astronomers, we know that Pluto is now a dwarf planet, so use the `del` operation to remove it from the end of `planet_list`.

## 🟡 Challenge: Iterating over planets

1. Create another list containing tuples. Each tuple will hold the name of a spacecraft that we have launched, and the names of the planet(s) that it has visited, or landed on.

    ```py
    # Example spacecraft list
    spacecraft = [
       ("Cassini", "Saturn"),
       ("Viking", "Mars"),
    ]
    ```

1. Iterate over your list of planets, and inside that loop, iterate over the list of tuples. Print, for each planet, which satellites have visited it.
 -->
