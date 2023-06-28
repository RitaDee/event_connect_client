/* eslint-disable no-unused-vars */
// /* eslint-disable import/extensions */
// import { Routes, Route } from 'react-router-dom';
// import EventDetails from './pages/events/EventDetails';
// import Layout from './components/Layout';
// import Body from './components/Body';
// import SignIn from './components/SigIn';
// import SignUp from './components/SignUp';
// import Events from './pages/events';
// import Reservations from './pages/reservation';
// import EventForm from './pages/events/CreateEvent';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Body />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/" element={<Layout />}>
//         <Route path="/events" element={<Events />} />
//         <Route path="/add_event" element={<EventForm />} />
//         <Route path="/events/:id" element={<EventDetails />} />
//         <Route path="/reservations" element={<Reservations />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import EventDetails from './pages/events/EventDetails';
import Layout from './components/Layout';
import Body from './components/Body';
import SignIn from './components/SigIn';
import SignUp from './components/SignUp';
import Events from './pages/events';
import Reservations from './pages/reservation';
import EventForm from './pages/events/CreateEvent';

const ProtectedRoute = ({ path, element: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication state (e.g., from session storage or global state)
    const token = sessionStorage.getItem('token');
    setIsAuthenticated(!!token); // Set isAuthenticated to true if token exists
  }, []);

  if (!isAuthenticated) {
    // Redirect to sign-in page if not authenticated
    return <Navigate to="/signin" replace />;
  }

  return <Route path={path} element={<Component />} />;
};

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  element: PropTypes.elementType.isRequired,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="/events" element={<Events />} />
        <Route path="/add_event" element={<EventForm />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/reservations" element={<Reservations />} />
      </Route>
      <Route path="/protected" element={<ProtectedRoute path="/" element={Body} />} />
    </Routes>
  );
}

export default App;
