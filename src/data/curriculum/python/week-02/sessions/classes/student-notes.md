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

![visualization of two instances of the Student class](../images/python-class-instances.png)

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

## Class Construction Arguments

The `__init__()` method on a Python class can accept as many arguments as you like. Those arguments can then be used to initialize the properties of each object created from the class. Here's an example.

```py
class Book:

    def __init__(self, title, publisher, author, year_published):
        # Establish the properties of each book
        # with a default value
        self.title = title
        self.publisher = publisher
        self.author = author
        self.current_page = 1
        self.year_published = year_published
        self.currently_reading = False


the_water_dancer = Book("The Water Dancer", "One World", "Ta-Nehisi Coates", 2019)
```

By passing the property value in during the instantiation of the object, I don't have to manually create the properties on a separate line of code.

```py
# No need to do this!!
the_water_dancer.year_published = 2019
the_water_dancer.publisher = "One World"
```

## Practice: Urban Planner

[Link to this exercise](/python/intro-to-classes-urban-planner-i)

## Type Relationships

You can define two types in your system that represent two real-world entities that have a relationship with each other. Consider libraries and library go-er's. What is their relationship?

Let's say that each library in our scenario only has one copy of each book. But a Library go-er's (or a reader) can check out multiple books at a time. This is a one-to-many relationship. In Python, you can establish this relationship by defining a list on the reader object that will contains instances of customers. Consider the following code.

```py
class Reader:

    def __init__(self, name):
        self.full_name = name
        self.books = list()
```

When you create a reader, you specify the reader's name on construction, and it get initialized with an empty list of books.

```py
levar_burton = Reader("LeVar Burton")
```

Now, create a few more books for our library.

```py
things_fall_apart = Book("Things Fall Apart", "Penguin Publishing Group", "Chinua Achebe", 1994)
the_hate_u_give = Book("The Hate U Give", "Balzer + Bray", "Angie Thomas", 2017)
becoming = Book("Becoming", "Crown", "Michelle Obama", 2018)
```

LeVar chooses to check out each of these books, so add the object references to the `books` list on the reader.

```py
levar_burton.books.append(things_fall_apart)
levar_burton.books.append(the_hate_u_give)
levar_burton.books.append(becoming)
```

Now the object have a relationship with each other. If you want to view all the books a reader has checked out, just iterate the `books` list.

```py
for book in levar_burton.books:
    print(f'{book.title} by {book.author} has been checked out by {levar_burton.full_name}')
```

## Practice: Companies and Employees

[Link to this exercise](/python/intro-to-classes-companies-and-employees)

## Practice: Urban Planner II

[Link to this exercise](/python/intro-to-classes-urban-planner-ii)
