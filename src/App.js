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

// import './App.css';
// import {
//   Routes, Route,
// } from 'react-router-dom';
// import SplashPage from './pages/SplashPage';
// import SignUpPage from './pages/SignUpPage';
// import LoginPage from './pages/LoginPage';
// import DummyHome from './pages/DummyHome'

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<SplashPage />} />
//       <Route path="/signup" element={<SignUpPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/dummyhome" element={<DummyHome />} />
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
