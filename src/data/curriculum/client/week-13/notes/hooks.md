---
title: '03. Hooks'
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
## useState
- ALWAYS give useState a default value that is the equivalent of the data type you expect your variable to be.
- This hook allows React to rerender the component when the value of the variable is updated using the function that we have access to in the useState hook

<img width="939" alt="Screen Shot 2022-07-13 at 5 35 53 PM" src="https://user-images.githubusercontent.com/29741570/191537823-09a546ed-fc41-4752-af09-9ff908112e9b.png">


### What does calling `useState` do? 

It declares a “state variable”. Our variable is a taco. This is a way to “preserve” some values between the function calls. Normally, variables “disappear” when the function exits but **state variables are preserved** by React.

### What do we pass to `useState` as an argument? 

The only argument to the `useState()` Hook is the initial state. The initial state can be any data type. We can keep a number or a string if that’s all we need. If we wanted to store two different values in state, we would call `useState()` twice.

### What does `useState` return? 

It returns a pair of values, which we are destructuring: the current state and a function that updates it. This is why we write `const [count, setCount] = useState()`.

## useEffect
- The useEffect is for anything we want to happen after the component renders such as API calls
- `useEffect` accepts 2 arguments
  - Anonymous function
  - An array (dependency array)
      > The dependency array is used to watch for value updates that will tell the useEffect to run again and rerender the component.

```js
useEffect(() => {
  // put the code you want to run here
}, []);
```

### What does `useEffect` do? 

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. We can perform data fetching or call some other imperative API or anything else.

### Does `useEffect` run after every render? 

Yes! By default, it runs both after the first render and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

**See the code repo for examples**
