---
title: '2. Test Python Installation'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: Python - Week 00 - Introduction
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

We are going to do a spin-off of the traditional `Hello, world` program to test that Python was installed properly. Let's get started!

## Create Python directory

You need another directory to store all of the python code you will be writting these next 6 months. So, let's go ahead and create one.

1. Navigate to your `workspace` directory

    ```bash
    cd ~/workspace
    ```

1. Create a direcotry called `python`.

    ```bash
    mkdir python
    ```

1. Check to make sure the directory was created. Run the command to list out all the files and directiroes in the current location

    ```bash
    ls
    ```

1. There should be a directory called `python` that shows up in the output. If it does not, try steps 1-3 again until the correct thing is outputted.

## Hello World (Running Python File)

1. Open your `python` direcotyr in VSCode
1. Create a file named `hello.py` and add the following lines of code to it:

    ```python
    print("Hello!")
    print("Is it me you're looking for?")
    ```

1. In your terminal, make sure you are in the directory that this file exists.
1. Execute the following command in the `python` directory.

    ```bash
    python hello.py
    ```

1. If everything is working correctly, you should see the following output in your terminal:

    ```bash
    Hello!
    Is it me you're looking for?
    ```

## Running Python in the terminal

You can use the CLI interpreter to enter and run some code that you just want to test out without having to put it in a file and running it.

1. In your terminal, type `python` and press `Enter`.
1. You should see the following output:

    ```bash
    Python 3.8.1 (default, Apr 15 2020, 15:07:02)
    [Clang 10.0.1 (clang-1001.0.46.4)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>>
    ```

1. You can now type in python directory into your terminal and run it. Follow the next steps to try it out.
1. Copy and paste the following lines into your terminal one by one, pressing enter after each one.

    ```python
    i_am_awesome = True
    ```

    ```python
    if i_am_awesome:
    ```

    ```python
        print("bow down to me") # Make sure to copy the indent!
    ```

1. You should have seen the text "bow down to me" printed in your terminal.

    ```python
    >>> print("bow down to me")
    bow down to me
    >>> i_am_awesome = True
    >>> if i_am_awesome:
    ...     print("bow down to me")
    ...
    bow down to me
    >>>
    ```

1. You have just created two Python Applications!!! Now you need to exit the python interpreter. To do so, type `exit()` then press enter in your terminal.
1. The interpreter should hav ebeen exited.