import React, { useRef } from 'react';

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <button onClick={handleClick}>Focus Input</button>
      <input ref={inputRef} />
    </div>
  );
}

export default App;

// Problem:
// Cannot pass a ref from a parent component to a child component without using forwardRef.

// Solution:

// import React, { useRef } from 'react';

// const InputComponent = React.forwardRef((props, ref) => {
//   return <input ref={ref} {...props} />;
// });

// function App() {
//   const inputRef = useRef();

//   const handleClick = () => {
//     inputRef.current.focus(); // Bây giờ có thể truy cập DOM từ component con
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Focus Input</button>
//       <InputComponent ref={inputRef} />
//     </div>
//   );
// }

// export default App;
