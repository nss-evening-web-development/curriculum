---
title: 'Intro to Classes'
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

## Why are you Learning This?

You are learning about the syntax and usage of classes because when you extract data from a relational database later in the course, each row of data represents the state of certain things, such as a student, a building, a book, or any other real-world object that you want to store data about.

Classes let you define your own, custom type in Python. The current types that you know about are `list`, `dict`, and `set`. These data structure types are very limiting when you need to represent a complex object in code, though.

## Introduction to Classes

Much like Javascript, almost everything in Python is based on objects. The ability to create objects in a predictable, organized way is essential. This is where classes come into play.

A class is like an object constructor, or a blueprint for creating objects. It helps us define the representation of something from the real world, in code. That 'something' is defined by its values and behaviors (properties).

Once a class is defined, you can use it to crank out objects based on the class. We call those objects _instances_ of the class.

![python-class-instances](https://user-images.githubusercontent.com/29741570/228077303-c3a5ebbc-698c-4566-a590-48f09d5b563a.png)

To define a class, you begin with the keyword `class` and then define at least an `__init__` method on for the class. The `__init__` method holds the instructions for what to do when a developer makes an instance of your class.

Imagine you want to build a Python application that allows a person to keep track of all of their books in their library. Each book has common properties, and things that can be done with it.

A book has properties such title, publisher, author, and year published.

You can also _do stuff_ with a book. You can read a book. You can put a bookmark it in to save your spot as you read it.

Here's how you would define a template for how each book will be represented in your application.

```py
class Book:

    def __init__(self):
        # Establish the properties of each book
        # with a default value
        self.title = ""
        self.publisher = ""
        self.author = ""
        self.current_page = 1
        self.year_published = 0
        self.currently_reading = False

    def start_reading(self):
        self.currently_reading = True
        print(f'You start reading {self.title} at page {self.current_page}')

    def stop_reading(self, page):
        self.current_page = page
```

To create an instance of the class, you type the name of the class and put parenthesis after it. You should always store the object instance in a variable.

```py
the_water_dancer = Book()
```

> **Tip:** What's up with that _self_ parameter that is the first argument of all of the methods? It's the instance of the class that you created.

For any class, when you create an instance of it, it executes an internal `__init__` method. In this method, one common thing to do is to define properties that every instance of the class will contain. Time to examine what the value of each of our book's properties are.

Put this code in your module.

```py
for prop, value in the_water_dancer.__dict__.items():
    print(f'{prop}:\n{value}\n')
```

You will see the following output:

```py
title:


publisher:


author:


current_page:
1

year_published:
0

currently_reading:
False
```

Now define some values for each property.

```py
the_water_dancer = Book()
the_water_dancer.title = "The Water Dancer"
the_water_dancer.publisher = "Penguin Books"
the_water_dancer.author = "Ta-Nehisi Coates"
the_water_dancer.year_published = 2019
the_water_dancer.publisher = "One World"

for prop, value in the_water_dancer.__dict__.items():
    print(f'{prop}:\n{value}\n')
```

Examine the properties again by moving the `for` loop you used earlier to after you have define the properties. You will see the following output.

```py
title:
The Water Dancer

publisher:
One World

author:
Ta-Nehisi Coates

current_page:
1

year_published:
2019

currently_reading:
False
```

Now let's do something with the book. You will start and stop reading the book.

```py
the_water_dancer = Book()
the_water_dancer.title = "The Water Dancer"
the_water_dancer.publisher = "Penguin Books"
the_water_dancer.author = "Ta-Nehisi Coates"
the_water_dancer.year_published = 2019
the_water_dancer.publisher = "One World"

print(the_water_dancer.currently_reading)
the_water_dancer.start_reading()
print(the_water_dancer.currently_reading)
the_water_dancer.stop_reading(34)
the_water_dancer.start_reading()
the_water_dancer.stop_reading(89)
the_water_dancer.start_reading()
```

When you run that code, it produces the output.

```py
False
You start reading The Water Dancer at page 1
True
You start reading The Water Dancer at page 34
You start reading The Water Dancer at page 89
```

## Practice: Pizza Joint Practice

[Link to this exercise](/python/intro-to-classes-pizza-joint)
