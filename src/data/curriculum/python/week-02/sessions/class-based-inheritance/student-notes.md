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


_( Admit it, you were about to just keep on reading without asking what polymorphism is, weren't you? Go ahead. Look it up. We'll wait. This [article](https://www.programiz.com/python-programming/polymorphism) is especially easy to read. Later in the chapter you'll see a small example of it in action )_

You will likely be asked about inheritance during the interview process and should be able to describe it in one of the following ways.

1. Allows one type to include all of the public properties and methods of another type.
1. It reduces duplicated code when many types in a program all have the same properties and methods.

## Resources
- <a href="https://replit.com/@callmedrt/Vehicle-Class-Python" target="_blank">Vehicle Code Sample</a>
- <a href="https://replit.com/@callmedrt/LLama-Animals-Python#main.py" target="_blank">Animals Code Sample</a>

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

---

## `super()` Lean and Mean Critters

NOTE: Those vehicles above did not need take in any properties. What happens when the inherited class does need properties?

To to take things a step farther, let's create a base class and name it **`Animal`**

```py
class Animal:
    def __init__(self, name, species, food, chip_num):
        self.name = name
        self.species = species
        self.food = food
        self.__chip_number = chip_num
        self.date_added = date.today()

    def feed(self):
        print(f'{self.name} was fed {self.food} on {date.today().strftime("%m/%d/%Y")}')
```

Without using class-based inheritance, a single animal might look like this:

**Before:**
```py
class Llama:

    def __init__(self, name, species, shift, food, chip_num):
        self.name = name
        self.species = species
        self.shift = shift
        self.date_added = date.today()
        self.food = food
        self.__chip_number = chip_num
        self.walking = True
    
    def feed(self):
        print(f'{self.name} was fed {self.food} on {date.today().strftime("%m/%d/%Y")}')
  
    ...
```
**After:**
```py
# Designate Llama as a child class by adding (Animal) after the class name
class Llama(Animal):

    # Remove redundant properties from Llama's initialization, and set their values via Animal
    def __init__(self, name, species, shift, food, chip_num):
        super().__init__(name, species, food, chip_num)
        self.shift = shift # stays on Llama because not all animals have shifts
        self.walking = True
```
Luckily, the syntax for making a llama object stays exactly the same: 

```py
stinky = Llama("Stinky", "domestic llama", "afternoon", "barley hay")
```

Some things to note about these changes:
1. The `walking` atribute was not added to **`Animal`**, but instead stays on **`Llama`**. Why? It's not unique to Llama, right? True, but because it's not a property shared by all critters in our system, it doesn't belong on **`Animal`**

2. We can still pass the values for a llama object to **`Llama`**, even though those properties are now defined in **`Animal`**. How? Inside **`Llama`**'s `__init__` function we call **`Animal`**'s `__init__` function and pass those values "up" to it. `super()` is Python's way of designating the parent class. Here, `super` is used in the sense of meaning 'above' or 'of the highest power'.

3. Notice that we did not directly use **`Animal`** to make our llama object. At no point will you ever directly instantiate a base class. Instances are always created from the child class.

## Overriding Parent Behavior

Earlier in this chapter you may remember a mention of polymorphism. In a very small nutshell polymorphism means the ability to take various forms. Sounds like Invasion of the Body Snatchers, but this example shows how that can be expressed in Python.  

You've now seen how to inherit common properties from a parent class. Each child class of **`Animal`**, for example can call `feed()` because they automatically inherit it. This is great for when the act of feeding a critter is exactly the same for every critter type. But it's not ideal if you have an outlier or two that require a different behavior for the same action of 'feeding'. 

Let's use our **`Llama`** class again. Let's say that Bobby's llamas are a bit skittish and won't eat unless they feel calm and safe. Bobby has found that singing "Rockytop" to them somehow calms them down, and they then gobble all their Llama Chow. Feeding a llama, then, requires an extra step.

So, if feeding a llama is an action unique to a llama, you might decide that the key is to define a method directly on **`Llama`** to describe the action of feeding a llama. And you'd be right!

And that function's behavior could be 
```py
print(f'on {date.today()}, {self.name} had "Rockytop" sung to it so it would eat its {self.food}')
```
That way only llamas get fed while singing to them. The question is, what do you name that function? `feed_llama`? Nope. Actually, you would name it `feed`. By giving it exactly the same name as **`Animal`**'s method for feeding _all_ animals, you then **_override_** the default logic.  

[Method overriding](https://en.wikipedia.org/wiki/Method_overriding), in object-oriented programming, is a language feature that allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses (parent classes). 

Now, `feed` has multiple forms, but is implemented differently in different contexts using method overriding. That's polymorphism, and it's really cool and powerful. (Got your attention now? Here's that [article](https://www.programiz.com/python-programming/polymorphism) again.)
