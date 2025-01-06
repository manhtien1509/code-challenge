import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li> 
        ))}
      </ul>
    </div>
  );
}

export default App;

// Problem:
// There is no key in the <li> elements, which makes it difficult for React to identify changes between renders. This leads to inefficient re-renders and can potentially cause bugs.

// Solution:
// To fix this, you should add a key prop to each <li> element. The key helps React optimize the rendering process by uniquely identifying each element in the list. Typically, you can use a unique identifier, like an id or an index, as the key value.