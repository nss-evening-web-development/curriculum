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

The PropTypes listed previously are among the most commonly used, but React PropTypes offer additional types that are also widely used, especially when dealing with nested properties and more complex structures. Here’s a more comprehensive list of common PropTypes and examples of how they can be used, including handling nested properties:

### **Commonly Used PropTypes and Their Usage**

**NOTE:** Don't forget to [RTFM (or Docs)](https://github.com/facebook/prop-types?tab=readme-ov-file#usage)

1. **`PropTypes.string`**: Expects a string value.
   
   ```javascript
   MyComponent.propTypes = {
     name: PropTypes.string,
   };
   ```

2. **`PropTypes.number`**: Expects a number value.

   ```javascript
   MyComponent.propTypes = {
     age: PropTypes.number,
   };
   ```

3. **`PropTypes.bool`**: Expects a boolean value (`true` or `false`).

   ```javascript
   MyComponent.propTypes = {
     isActive: PropTypes.bool,
   };
   ```

4. **`PropTypes.func`**: Expects a function.

   ```javascript
   MyComponent.propTypes = {
     onClick: PropTypes.func,
   };
   ```

5. **`PropTypes.array`**: Expects an array of any type.

   ```javascript
   MyComponent.propTypes = {
     items: PropTypes.array,
   };
   ```

6. **`PropTypes.arrayOf()`**: Expects an array of a specific type.

   ```javascript
   MyComponent.propTypes = {
     numbers: PropTypes.arrayOf(PropTypes.number), // Array of numbers
   };
   ```

7. **`PropTypes.object`**: Expects an object.

   ```javascript
   MyComponent.propTypes = {
     config: PropTypes.object,
   };
   ```

8. **`PropTypes.shape({})`**: Expects an object with a specific shape, allowing you to define nested properties.

   ```javascript
   MyComponent.propTypes = {
     user: PropTypes.shape({
       name: PropTypes.string,
       age: PropTypes.number,
       address: PropTypes.shape({
         street: PropTypes.string,
         city: PropTypes.string,
       }),
     }),
   };
   ```

   **Explanation:** This example shows how to use `PropTypes.shape` to validate an object with nested properties. The `user` object has `name`, `age`, and an `address` object with its own nested properties (`street` and `city`).

9. **`PropTypes.oneOf()`**: Expects one of the specified values (like an enum).

   ```javascript
   MyComponent.propTypes = {
     status: PropTypes.oneOf(['pending', 'completed', 'failed']),
   };
   ```

10. **`PropTypes.oneOfType([])`**: Expects a value that matches one of the specified types.

    ```javascript
    MyComponent.propTypes = {
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Can be a string or number
    };
    ```

11. **`PropTypes.node`**: Expects anything that can be rendered (numbers, strings, elements, or an array of these types).

    ```javascript
    MyComponent.propTypes = {
      children: PropTypes.node,
    };
    ```

12. **`PropTypes.element`**: Expects a React element.

    ```javascript
    MyComponent.propTypes = {
      header: PropTypes.element, // Expects a React component instance
    };
    ```

### **How to Use PropTypes for Nested Properties**

Using `PropTypes.shape({})` allows you to specify nested properties within objects, and you can go as deep as needed to validate complex structures. This is particularly useful when dealing with deeply nested data that needs to adhere to specific formats.

**Example of Nested PropTypes:**

```javascript
// Component definition
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
    </div>
  );
}

// Defining PropTypes with nested objects
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
    }),
  }),
};
```

### **Summary:**
- PropTypes help validate the props passed to your components.
- Nested properties are handled using `PropTypes.shape({})`, which can be nested within each other for complex data structures.
- The use of PropTypes improves code reliability and helps catch errors early in development by ensuring that components receive the expected types of data.

Let me know if you need more detailed examples or additional clarification!
