---
title: 'Props & PropTypes'
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
**The `props` Object**

In React, components have access to an object called `props` (short for "properties"). `Props` are used to pass data from a parent component to a child component, allowing the child to receive and use this information. For example, if you pass an attribute like `color` to a component, it becomes part of the `props` object that the component can access and use.

**Example:**

```js
<Loading color="green" />

<Loading color="orange" />

<Loading color="purple" />
```

**PropTypes in React**

PropTypes are used in React to specify the expected data types for props in your components, helping to catch errors and enforce type safety. You'll usually define PropTypes at the bottom of your component file. Some of the most commonly used PropTypes include:

- **`PropTypes.string`**: Expects a string value.
- **`PropTypes.number`**: Expects a number value.
- **`PropTypes.func`**: Expects a function.
- **`PropTypes.shape({})`**: Used for objects; allows you to specify the shape of the object with defined key/value pairs and their types.
- **`PropTypes.arrayOf()`**: Expects an array of a specified type, e.g., `PropTypes.arrayOf(PropTypes.string)` for an array of strings.

Props can be marked as required using `.isRequired`, and default values should be set directly within the function's parameter list.

**Example 1:**
```js
import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types'; // import proptypes package

// THE PROPS ARE "COLOR" AND "CHILDREN"
// PROPS IS AN OBJECT
// WE DESTRUCTURE IT SO WE CAN CALL IT BY NAME
export default function Loading({ color='red', children='nothing here' }) {
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

```

**Example 2:**

```javascript
import PropTypes from 'prop-types';

function Button({ label = 'Click Me', onClick = () => {} }) {
  return <button onClick={onClick}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired, // Label must be a string and is required
  onClick: PropTypes.func,            // onClick should be a function
};

export default Button;
```

**Explanation:**
- `label` and `onClick` now have default values directly set in the function parameters.
- `PropTypes` still define what type each prop should be and whether it’s required, helping ensure that the component receives the correct types of data.

This approach aligns with modern React practices and keeps the code clean and easy to understand!
