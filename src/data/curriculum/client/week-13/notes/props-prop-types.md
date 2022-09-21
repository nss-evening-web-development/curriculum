---
title: '02. Props & PropTypes'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 13 - Intro to React
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
### The props object

All react components have access to an object named "props". Props are any of the attributes that you pass to a component. For example, the following components have "color" passed to them as props.

```js
<Loading color="green" />

<Loading color="orange" />

<Loading color="purple" />
```

**See the `props.js` file in the code examples in your react-topics repo to see examples.**

Let's take a look at the code below

```js
import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types'; // import proptypes package

// THE PROPS ARE "COLOR" AND "CHILDREN"
// PROPS IS AN OBJECT
// WE DESTRUCTURE IT SO WE CAN CALL IT BY NAME
export default function Loading({ color, children }) {
  return (
    <div className="text-center mt-5">
      <Spinner
        animation="border"
        style={{
          color,
          width: '100px',
          height: '100px',
        }}
      />
      {/* if the children prop is not passed, children will not render */}
      {children}
    </div>
  );
}

// Proptypes tell the function what data type to expect
Loading.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Loading.defaultProps = {
  color: 'red',
  children: 'nothing here',
};
```

Proptypes tell the function what data type to expect. You will notice at the bottom of the file, there are types. The types you will use most are:

- `PropTypes.string`
- `PropTypes.number`
- `PropTypes.func` (functions)
- `PropTypes.shape({})` (this is used for objects, here you give the key/value pairs of the object as well as their proptypes)
- `PropTypes.arrayOf()`

You must also either mark the types as required OR give default values. Look at the component above again for an example.
