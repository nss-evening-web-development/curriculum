---
title: 'Debugging: `print` Statements'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '🥼LAB'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: Python - Week 01 - Python Fundamentals
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE_TAGS
is_featured: true
---

Using print statements in Python is another method of debugging. This is the equivalent of using `console.logs` in JavaScript.

Here's an example of how you would use a print statement.

Let's say you have written the following script:

```python
import requests

api_url = "https://jsonplaceholder.typicode.com/todos/1"
response = requests.get(api_url)
response.json()
```

How would you go about seeing this API call's response? `response.json()`, which turns the API response to JSON, is already being called, but you want to know what it looks like before you build on top of it.

You could use the debugger, but what if you wanted to see this every time this code was executed? Or perhaps you'd like to display this information to the end user at the terminal. In either case, you could use the print statement.

Here's an example of how you use the print statement:

```python
import requests

api_url = "https://jsonplaceholder.typicode.com/todos/1"
response = requests.get(api_url)


print(response.json())
```

When you run this code, it will appear in the console where your server is running. As an example:

```bash
{'userId': 1, 'id': 1, 'title': 'delectus aut autem', 'completed': False}
```
