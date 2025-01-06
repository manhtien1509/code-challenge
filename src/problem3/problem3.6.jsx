import React, { useState } from 'react';

function ExpensiveComponent({ data }) {
  console.log('Render expensive component');
  return <div>{data}</div>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent data={`The count is ${count}`} />
    </div>
  );
}

export default App;


// Problem:
// ExpensiveComponent will re-render every time count changes, even though it doesn't need to. 
// This can lead to unnecessary rendering, which negatively affects performance, especially when dealing with complex or heavy components.

// Solution:
// import React, { useState } from 'react';

// const ExpensiveComponent = React.memo(({ data }) => {
//   console.log('Render expensive component');
//   return <div>{data}</div>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ExpensiveComponent data={`The count is ${count}`} />
//     </div>
//   );
// }

// export default App;
