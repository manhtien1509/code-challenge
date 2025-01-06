import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> 
    </div>
  );
}

export default App;

// Problem:
// Every time the component re-renders, the function () => setCount(count + 1) is re-created. This can negatively affect performance, especially in larger applications, 
// because a new function instance is created with each render, even if it doesn't need to change.

// Solution:
// const handleIncrement = () => {
//     setCount(count + 1);
//   };