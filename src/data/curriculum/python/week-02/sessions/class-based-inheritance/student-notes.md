---
title: 'Class Based Inheritance'
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
Class based inheritance lets you specify that one type will contain **all** of the properties and methods that are defined in another type, without having to duplicate the code in the two source code files. Inheritance is a powerful feature of Python, but it should be used sparingly when you are defining many types in your program.

## Why Are You Learning This?

You will use inheritance to reduce the amount of duplicated code that can arise in a system with dozens of types that all share the **exact** same properties and/or methods. It's one of the mechanisms to introduce polymorphism into a program.

You will likely be asked about inheritance during the interview process and should be able to describe it in one of the following ways.

1. Allows one type to include all of the public properties and methods of another type.
1. It reduces duplicated code when many types in a program all have the same properties and methods.

## Gary's Wholesale Garage

When considering interfaces, you examine your code to look for properties and methods that **some** of the classes have in common. When considering inheritance, you examine your code to look for properties and methods that **all** of the classes have in common.

Are there any in the classes below?

```py
# Electric motorcycle
class Zero:
    def __init__(self):
        self.battery_kwh = 0
        self.main_color = 0
        self.maximum_occupancy = 0

    def charge_battery(self):
        ...
```

```py
# Propellor light aircraft
class Cessna:
    def __init__(self):
        self.fuel_capacity = 0
        self.main_color = 0
        self.maximum_occupancy = 0

    def refuel_tank(self):
        ...
```

```py
# Electric car
class Tesla:
    def __init__(self):
        self.battery_kwh = 0
        self.main_color = 0
        self.maximum_occupancy = 0

    def charge_battery(self):
        ...
```

```py
# Gas powered truck
class Ram:
    def __init__(self):
        self.fuel_capacity = 0
        self.main_color = 0
        self.maximum_occupancy = 0

    def refuel_tank(self):
        ...
```

That's right. They all share `main_color` and `maximum_occupancy`.

As you add more vehicle types to your system, it would get very tedious to keep defining those properties in each of those classes. It would also increase the possibililty of bugs being introduced. If your team decided to change the `main_color` property to renamed to `base_color`, all of the classes would need to be changed. Since human beings are highly prone to error, a class could be missed during refactoring.

To avoid these kinds of problems, you are going to create a more general type in your system and then have all vehicles inherit from it.

## Vehicle Class

Since all of the types are vehicles, a good name for this new type would be `Vehicle`.

```py
class Vehicle:
    def __init__(self):
        self.main_color = ""
        self.maximum_occupancy = ""
```

Then each of the other, more specific, types would inherit from it. The syntax for inheritance is to specify the parent class in parenthesis after the class definition.

```py
class Tesla(Vehicle):
    def __init__(self):
        self.battery_kwh = 0

    def charge_battery(self):
        ...
```

Now any instance of `Tesla` will have both of those properties on it automatically.

## Overriding Parent Behavior

To this point, you've seen how to inherit common properties from a parent class, and now you're going to implement a behavior on a parent class. Each child class will automatically inherit it, but then **_override_** the default logic.

You can safely assume that each vehicle can be driven. What you would then do is implement a `drive()` method on the **`Vehicle`** class.

```py
class Vehicle:
    def __init__(self):
        self.main_color = ""
        self.maximum_occupancy = ""

    def drive(self):
        print("Vroooom!")
```

Once you do this, all of the specific vehicles can be driven. For now, however, they will all make the same sound, which is ridicuous because a plane doesn't sound like a truck which doesn't sound like a motorcycle.

```cs
fxs = Zero()
modelS = Tesla()
mx410 = Cessna()

fxs.drive()
modelS.drive()
mx410.drive()
```

To have each vehicle make its own sound, all you need to do is define that method in the child.

```py
class Tesla(Vehicle):
    def __init__(self):
        self.battery_kwh = 0

    def drive(self):
        print("Zoooooooooooom!")
```

Now you can run the program again and the Tesla will make a different noise.
