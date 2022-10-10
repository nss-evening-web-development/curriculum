---
title: 'Interface Based Programming - Uncle Jakes Flower Shop'
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
Uncle Jake (a.k.a. Jake Mendenhyll) opened his flower shop in 1972, at the height of the Flower Power cultural phenomenon. Since then, his two daughters, and 1 grandson have joined him in running the shop.

Their two biggest seasons are Mother's Day and Valentine's Day. Throughout Denver, the tradition of sending an Uncle Jake arrangement has passed across generations, and people trust Jake and his family to send the best flowers. Since 1980, the contents of each arrangement has never changed.

### Mother's Day Arrangement

The Mother's Day arrangement contains daisies, baby's breath, and poppies. This arrangement is a bit more reserved, and Jake makes sure that each flower stem is cut to 4 inches.

Also, each flower in this arrangement is organically grown with no pesticides used. Because of this, these arrangements have to be transported in a non-refrigerated container.

### Valentine's Day Arrangement

The Valentine's Day arrangement includes the traditional rose. Jake has red, pink, and blue ones to send the right message. It also has lillies and alstroemeria to add more depth to the color of the arrangement.

This arrangment is flamboyant and extravagent. Each flower stem is cut to 7 inches. Flowers in this arrangement are not organically grown, so they can be transported in a refrigerated container.

#### Instructions

Your task is to define classes for each type of flower, and a class for each arrangement type. Each arrangement instance should have an attribute of `flowers` which will contain at least one of each type of the corresponding flowers listed above.

Your code must ensure that only the right flowers can be added to each arrangement. Here's some terse starter code.

* Rose, lillies, and alstroemeria share some attribute that the others do not _(perfect case for an interface class)_
* All flowers share some common attributes

```py
class Arrangement:

    def __init__(self):
        self.__flowers = []

    def enhance(self, flower):
        self.__flowers.append(flower)


class MothersDay(Arrangement):

    def __init__(self):
        super().__init__()

    # Override the `enhance` method to ensure only
    # roses, lillies, and alstroemeria can be added


class ValentinesDay(Arrangement):
    def __init__(self):
        super().__init__()


class Rose:
    pass

if __name__ == "__main__":
    for_beth = ValentinesDay()
    red_rose = Rose()

    for_beth.flowers.append(red_rose)
```
