---
title: '03. JSON Explained'
date: "2022-09-01 08:00:00"
course: ''
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 07 - Webpack, APIs, ERDs
# category: Use the Name + week for each (follow the format above)
tags: 
    - Webpack
is_featured: true
---
[Read this article on JSON](https://www.freecodecamp.org/news/what-is-json-a-json-file-example/) as when we get data from an API it comes in this format, which is similar to a JavaScript object. We will still dot or bracket notate on it, but it is important that you review what it is because as programmers, this is a data format that is important.

## Most notable info:

- **JSON is purely a string with a specified data format — it contains only properties, no methods (functions).**
- JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
- Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
- JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.
- Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.
