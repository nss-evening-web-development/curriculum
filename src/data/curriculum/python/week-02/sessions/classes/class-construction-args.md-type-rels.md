---
title: 'Class Construction Arguments and Type Relationships'
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

## Class Construction Arguments

The `__init__()` method on a Python class can accept as many arguments as you like. Those arguments can then be used to initialize the properties of each object created from the class. Here's an example.

- <a href="https://replit.com/@callmedrt/Class-Construction-Arguments-Python#main.py" target="_blank"> Link to code below"</a>

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

<a href="/python/intro-to-classes-urban-planner-i" target="_blank">Link to this exercise</a>

## Type Relationships

You can define two types in your system that represent two real-world entities that have a relationship with each other. Consider libraries and library go-er's. What is their relationship?

Let's say that each library in our scenario only has one copy of each book. But a Library go-er's (or a reader) can check out multiple books at a time. This is a one-to-many relationship. In Python, you can establish this relationship by defining a list on the reader object that will contains instances of customers. Consider the following code.

- <a href="https://replit.com/@callmedrt/Type-Relationships-Python#main.py" target="_blank"> Link to code below"</a>

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

<!-- ## Practice: Companies and Employees

[Link to this exercise](/python/intro-to-classes-companies-and-employees) -->

## Practice: Urban Planner II

<a href="/python/intro-to-classes-urban-planner-ii" target="_blank">Link to this exercise</a>
