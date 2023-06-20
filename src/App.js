/* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable import/no-extraneous-dependencies */
// import { Routes, Route } from 'react-router-dom';
// import Main from './components/Main';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Main />} />
//     </Routes>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
