import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://api.example.com/data');
    const json = await res.json();
    setData(json);
  };

  return <div>{data}</div>;
}

export default App;

// Problem:
// Cannot directly use async in useEffect because useEffect does not accept an asynchronous function.
// If there is an error during the fetch process, you need to handle it within a catch block.

// Solution:

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('https://api.example.com/data');
//         if (!res.ok) throw new Error('Failed to fetch data');
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return <div>{JSON.stringify(data)}</div>;
// }

// export default App;
