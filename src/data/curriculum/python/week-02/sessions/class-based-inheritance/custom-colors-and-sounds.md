---
title: 'Class Based Inheritance - Custom Colors and Sounds'
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
## Setup

```sh
mkdir -p ~/workspace/python/exercises/class-based-inheritance && cd $_
touch garage.py
```

1. Define 5 of your favorite vehicles
1. Move all common properties in your vehicles to a new **`Vehicle`** class.
1. Create an instance of each vehicle.
1. Define a different value for each vehicle's properties.
1. Create a `drive()` method in the **`Vehicle`** class.
1. Override the `drive()` method in all the other vehicle classes. Include the vehicle's color in the message _(i.e. "The blue Ram drives past. RRrrrrrummbbble!")_.
1. Create a `turn(self, direction)` method, and a `stop(self)` method on **`Vehicle`**. Define a basic implementation of each.
1. Override all three of those methods on some of the vehicles. For example, the `stop()` method for a plane would be to output the message _"The white Cessna rolls to a stop after rolling a mile down the runway."_
1. Make your vehicle instances perform all three behaviors.
