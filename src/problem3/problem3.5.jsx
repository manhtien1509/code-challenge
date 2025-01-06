import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

// Problem:
// All components are being loaded at once, which can hurt performance as the application scales. 
// This can lead to longer initial load times and unnecessary rendering of components that aren't immediately needed.

// Solution: (React.lazy và Suspense)

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = lazy(() => import('./Home'));
// const About = lazy(() => import('./About'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route path="/home" component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;
