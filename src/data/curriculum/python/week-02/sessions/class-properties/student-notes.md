---
title: 'Class Properties'
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

## Resources

- <a href="https://replit.com/@callmedrt/Class-Properties-Python#main.py" target="_blank">Code Sample</a>

By default, if you set an attribute of an object instance in, say, the `__init__` method, those values can be changed without restriction.

```py
class Product():

    def __init__(self):
        self.price = 0
        self.title = ""
        self.description = ""

kite = Product()
kite.price = 14.99
kite.title = "A red kite"
kite.description = "Flies up to 150 meters in the air. Made of nylon."

# Since Python is a dynamically typed language, I can set
# the value of those variable to anything
kite.price = dict()  # No complaints here
kite.description = 1024  # Python don't care
```

Since Python is dynamically typed, simple attributes have no way of enforcing what value they accept. Fortunely, the language provides a way for you to check and enforce value restrictions - the `@property` decorator.

```py
class Product():

    @property # The getter
    def price(self):
        try:
            return self.__price # Note there are 2 underscores here
        except AttributeError:
            return 0

    @price.setter # The setter
    def price(self, new_price):
        if type(new_price) is float:
            self.__price = new_price
        else:
            raise TypeError('Please provide a floating point value for the price')
```

Now you have set a type check on what the value of the `price` attribute can be.

```py
p = Product()
p.price = 1

>>> TypeError: Please provide a floating point value for the price
```

Now set the value to a floating point decimal.

```py
p = Product()
p.price = 1.0 # Everything works ok
```

## "Private" Variables

The `self.__price` is considered a privately scoped attribute and should not be accessed. It is obfuscated by Python to not show up as an attribute. There is a method in Python named `dir()`. It returns a list of valid attributes of the object. Look at what the valid attributes are for the object referenced by `p`.

```py
print(dir(p))

['__class__', '__delattr__', '__dict__', '__dir__',
 '__doc__', '__eq__', '__format__', '__ge__',
 '__getattribute__', '__gt__', '__hash__', '__init__',
 '__init_subclass__', '__le__', '__lt__', '__module__',
 '__ne__', '__new__', '__reduce__', '__reduce_ex__',
 '__repr__', '__setattr__', '__sizeof__', '__str__',
 '__subclasshook__', '__weakref__', 'price']
```

Note that `price` is in that list, but `__price` is not. Therefore, even though you, as the class designer, know that `__price` exists, you should not try to access it on an instance of the class.
