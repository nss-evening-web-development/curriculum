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

> Practice Ledgend
>
> * 🔴 **REQUIRED** - You **MUST** complete this curriculum item
> * 🟡 **RECOMMENDED** - While not required, it is highly recommended that you complete this curriculum item before the next group project
> * 🟢 **OPTIONAL** - Lessons for students with faster processing speeds or to come back to

## 🔴 Practice: Random Numbers

### Random Numbers Instructions

1. Use the following code to create a list of 10 random numbers. Each number will be between 0 and 6.

    ```py
    import random

    my_randoms = list()
    for i in range(10):
        my_randoms.append(random.randrange(1, 6))
    ```

    The `my_randoms` list will now contain random numbers

    ```py
    [1, 3, 1, 2, 4, 2, 5, 4, 2, 5]
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
        my_randoms.append(random.randrange(1, 6))

    # Generate a list of numbers 1..10
    numbers_1_to_10 = range(1, 11)

    # Iterate from 1 to 10
    for number in numbers_1_to_10:
        the_numbers_match = False

        # Iterate your random number list here

        # Does my_randoms contain number? Change the boolean.

        print(f'{number} is in the random list')
    ```

#### Example Output in the Terminal

```sh
my_randoms list contains 0
my_randoms list does not contain 1
my_randoms list does not contain 2
my_randoms list contains 3
my_randoms list contains 4
my_randoms list does not contain 5
```

> **NOTE:** Each run will produce different output.

## 🔴 Practice: Planet List

### Setup

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
