---
title: 'Components'
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

### **React Components vs. JavaScript Modules**

React components and JavaScript modules serve different but complementary roles in development. Both are ways to structure and organize code, but they are used in slightly different contexts.

- **JavaScript Modules** are pieces of code that can be reused across different files. They help keep your code organized by exporting and importing functions, variables, or objects. We also still use these in React.
  
- **React Components** are the building blocks of a React application. They are JavaScript functions or classes that return UI elements, defining how a part of your application should look and behave.

Here's a breakdown with code examples:

### **JavaScript Modules**

JavaScript modules allow you to write reusable code that you can import into other files. Modules can export anything: variables, functions, objects, etc.

**Example: JavaScript Module**

```javascript
// math.js - This is a JavaScript module
// Exporting functions to be used elsewhere
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

**Using the Module:**

```javascript
// main.js - Importing functions from the math module
import { add, subtract } from './math';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

**Explanation:**
- The `math.js` file defines a module with two functions: `add` and `subtract`.
- These functions are exported so they can be used in other files.
- In `main.js`, the functions are imported and used as needed.

### **React Components**

React components define how your UI should look. They can hold state, handle events, and render HTML-like syntax called JSX.

**Example: React Component**

```javascript
// Greeting.js - A simple React component
import React from 'react';

// A functional component that returns some JSX
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

**Using the Component in Your App:**

```javascript
// App.js - Main entry point of your React app
import React from 'react';
import Greeting from './Greeting'; // Remember, how you export is how you import

function App() {
  return (
    <div>
      <Greeting name="John" /> {/* Using the Greeting component with a prop */}
      <Greeting name="Jane" /> {/* Reusing the same component with different data */}
    </div>
  );
}

export default App;
```

**Explanation:**
- `Greeting.js` defines a React component that takes a `name` prop and displays a greeting message.
- The component is reusable; you can use it multiple times in your app with different data.
- In `App.js`, the `Greeting` component is imported and used twice, showcasing its reusability.

### **Key Differences:**
- **JavaScript Modules**: Focus on exporting and importing code to keep it modular and organized. They don’t directly create UI but provide the logic behind it. We still use these in react, but more for business lo
- **React Components**: Create the UI and handle rendering on the screen. They can be thought of as a mix of JavaScript logic and HTML structure.

By understanding how to use modules and components, you can build well-organized, maintainable, and dynamic web applications.


### **Purpose of JavaScript Modules in React**

JavaScript modules play a critical role in React development. In React, modules are used extensively to keep the code organized, reusable, and manageable, especially as applications grow in complexity. Here's how we can explain their purpose in React:

JavaScript modules in React are used to organize your code into separate, manageable chunks. They help you keep different parts of your application isolated, maintainable, and reusable by breaking down the code into smaller files. Here's a breakdown of their main purposes:

1. **Code Reusability and Separation of Concerns:**
   - Modules allow you to separate your code by functionality. For example, you can have separate files for utility functions, API calls, or constants.
   - This makes it easier to reuse code across different components without repeating yourself.

2. **Maintaining Clean and Readable Code:**
   - By breaking down code into modules, each file remains small and focused on a specific task, making it easier to read, debug, and maintain.

3. **Importing Only What You Need:**
   - Modules enable you to import only the parts of code you need in a component, reducing unnecessary code bloat and enhancing performance.

4. **Encapsulation:**
   - Modules help encapsulate code, preventing variables and functions from leaking into the global scope, which avoids conflicts and bugs.

### **Example of Using JavaScript Modules in React**

Let’s walk through a simple React setup where JavaScript modules play their role.

**1. Utility Module for Formatting Dates (utils/dateUtils.js):**

This module contains helper functions that format dates. This kind of logic is separate from the main component code, keeping things clean.

```javascript
// utils/dateUtils.js - A module with utility functions for date formatting
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function formatTime(date) {
  return new Date(date).toLocaleTimeString();
}
```

**2. API Module for Fetching Data (api/userApi.js):**

This module handles API calls, separating the networking logic from your components.

```javascript
// api/userApi.js - A module that handles fetching user data
export async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  return response.json();
}
```

**3. Using Modules in a React Component (components/UserProfile.js):**

Here’s how these modules are used inside a React component.

```javascript
// components/UserProfile.js - A React component using imported modules
import React, { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../utils/dateUtils'; // Importing utility functions
import { fetchUserData } from '../api/userApi'; // Importing API function

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetching user data when the component mounts
    fetchUserData(userId).then((data) => setUser(data));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Joined: {formatDate(user.joinDate)}</p> {/* Using utility function */}
      <p>Last Login: {formatTime(user.lastLogin)}</p> {/* Using utility function */}
    </div>
  );
}

export default UserProfile;
```

### **Explanation of How Modules Serve React Components:**
- **Organization:** The `utils/dateUtils.js` and `api/userApi.js` modules keep utility functions and API logic out of the component, making `UserProfile.js` cleaner and more focused on rendering.
- **Reusability:** Functions like `formatDate` and `fetchUserData` can be reused in other components without rewriting the code.
- **Scalability:** As your application grows, modules help in scaling the codebase without making components unwieldy or difficult to manage.
- **Maintainability:** If you need to change how dates are formatted, you only need to update `dateUtils.js`, and all components using this module will reflect the change.

Using JavaScript modules effectively in React helps you build structured, scalable, and maintainable applications by keeping your code well-organized and focused on its specific roles.