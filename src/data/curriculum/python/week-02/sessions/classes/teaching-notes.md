---
title: 'Intro to Classes - Teaching Notes'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: 'ℹ️ INFO'

# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Python - Week 02 - Advanced Fundamental Sessions
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE TAGS
is_featured: true
---

## Why are we teaching you about classes?

Before we get into what a class is and actually start looking at syntax, let's talk about why you're learning about classes.

- Classes let you you define your own custom type.
- There are existing types in python that you know of already, `list`, `dict`, and `set`, but these data structure types are limiting when you need to represent a complex object within your code.
- This is where classes come in

## What is a Class?

- A class is basicly a blueprint for creating objects.
- It helps us represent something from the real world in our code.
- That 'something' is defined by its values and behaviors (properties)
- When you define a class, you can use it to build out objects based on the class.
  - We call those objects _instances_ of the class.

### Let’s Build a Library

Copy these instructions into your code

```python
'''
Imagine you want to build a Python application that allows a person to keep track of all of their books in their library.

Each book has common properties, and things that can be done with it.

A book has a title, publisher, author, and year published.

You can read a book, and you can put a bookmark it in to save your spot as you read it.
'''
```

#### Defining a class with `class`

```python
class Book:
```

#### Defining a `__init__`

This method holds the instructions for what to do when a developer makes an instance of your class.

```python
class Book:

    def __init__(self):
    pass
```

##### What's up with the `self`?

Self represents the instance of the class that you created.

When you create an instance of a class, this `__init__` method gets run. In this method, one common thing to do is to define properties that every instance of the class will contain.

##### Add Properties to the book

```python
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
```

#### Add Methods to the book

```py
class Book:

    ...

    def start_reading(self):
        self.currently_reading = True
        print(f'You start reading {self.title} at page {self.current_page}')

    def stop_reading(self, page):
        self.current_page = page
```

#### Create an instance of the class

```py
the_water_dancer = Book()
```

##### Let's examine the values of this instance's properties

```py
for prop, value in the_water_dancer.__dict__.items():
    print(f'{prop}:\n{value}\n')
```

##### Now define some values for each property

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

##### Using the methods

```py
print(the_water_dancer.currently_reading)
the_water_dancer.start_reading()
print(the_water_dancer.currently_reading)
the_water_dancer.stop_reading(34)
the_water_dancer.start_reading()
the_water_dancer.stop_reading(89)
the_water_dancer.start_reading()
```

## Practice: Pizza Joint Practice

## Class Construction Arguments

You can pass arguments to the `__init__` method to initialize peoperties of each object.

Remember how we defined properties before?

We can do this in a cleaner way

Let's update our Book's Init method

```python
    def __init__(self, title, publisher, author, year_published):
        # Establish the properties of each book
        # with a default value
        self.title = title
        self.publisher = publisher
        self.author = author
        self.current_page = 1
        self.year_published = year_published
        self.currently_reading = False
```

Let's also update how we're instantiating our the_water_dancer instance of a book

```python
the_water_dancer = Book("The Water Dancer", "One World", "Ta-Nehisi Coates", 2019)
```

## Practice: Urban Planner

## Type Relationships

We can define two types using classes thaat represent two real-world entities that have a relationship with each other. Consider book's and Library go-er's?

Here's an example of a Reader object

```py
class Reader:

    def __init__(self, name):
        self.full_name = name
        self.books = list()
```

When you create a reader, you define their fullname and it get initialized with an empty list of books.

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

```py
for book in levar_burton.books:
    print(f'{book.title} by {book.author} has been checked out by {levar_burton.full_name}')
```

## Practice: Companies and Employees

## Practice: Urban Planner II
