---
title: 'Counter App Cont.'
date: "2022-09-01 08:00:00"
path: '/client/'

# use the path equal to the location of the file in the directory (directory structure)

type: '👩🏽‍🏫 LIVE LEARNING SESSION'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼 LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 14 - React Topics
# category: Use the Name + week for each (follow the format above)
tags: 
    - UPDATE TAGS
is_featured: true
---
Using the `intro-to-react` repo, we will continue iterating on the counter app. Below is the code for the Counter App we started in class. Use it to get a better understanding of events and state.

```js
import { useState } from 'react';

function Home() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>Counter Title</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</button>
      <button type="button" onClick={() => setValue(0)}>Reset</button>
    </>
  );
}

export default Home;
```

We have a single component, but we want to make this more "Reactish". Let's work to complete the following:

1. moving the counter into its own component
1. Pass props (title) to the new counter component and get cozy with PropTypes
1. Talking about state (the count). Where does it live?
1. If the counter is at 0, disable the decrement button
1. Make 4 counters manually, then dynamically create them by creating an array of objects and map over it. See code below.

```js
import Counter from '../components/Counter';

function Home() {
  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }];

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </>
  );
}

export default Home;
```
```js
// Counter.js - componentized counter
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <div>
      {value === 5 ? (
        'YOU DA WIENER'
      ) : (
        <>
          <h1>{title}</h1>
          <h2>{value}</h2>
          <button type="button" className={value <= 0 ? 'btn btn-danger' : 'btn btn-success'} onClick={handleClick}>
            Increment
          </button>
          {value <= 0 ? (
            ''
          ) : (
            <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>
              Decrement
            </button>
          )}

          <button type="button" onClick={() => setValue(0)}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter Default',
};
```

Example Counter.js and index.js for options on completing the list above

[https://gist.github.com/drteresavasquez/6ae462e97d0bb39e40182fe3c919058b](https://gist.github.com/drteresavasquez/6ae462e97d0bb39e40182fe3c919058b)
