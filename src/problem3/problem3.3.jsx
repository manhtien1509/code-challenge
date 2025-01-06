import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count); 
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;

// Problem:
// console.log(count) will log the old value of count instead of the updated value because setState is asynchronous in React.

// Solution:
// const handleIncrement = () => {
//     setCount(prevCount => {
//       const newCount = prevCount + 1;
//       console.log(newCount); 
//       return newCount;
//     });
// };