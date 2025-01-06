import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");  
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// The issues in the code
// 1. Complex Component: The App component is handling all the logic, such as managing the state of tasks and displaying the task list. This can make the code hard to maintain.
// 2. No Validation: There is no validation for user input, such as adding an empty task.
// 3. Non-Reusable Components: The task list display logic could be reused if it were extracted into a separate child component.
// 4. Inefficient State Management: Everything is being stored in a single useState, which can make it difficult when there are multiple types of state or more complex logic.

// Improvements to avoid:
// 1. Split Components: Divide the App into smaller components such as TaskInput and TaskList to improve readability and reusability.
// 2. Use Context or Redux for State Management: If the application becomes more complex, consider using Context or Redux for managing the state to avoid prop drilling and simplify state management.
// 3. Use PropTypes or TypeScript: Implement PropTypes or TypeScript to validate and ensure the correct data types for props, helping with maintainability and reducing errors.
// 4. Use Formik or React Hook Form for Form Management: Utilize solutions like Formik or React Hook Form to manage forms more easily, ensuring validation and handling complex form interactions with less boilerplate.