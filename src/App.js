/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import EventDetails from './pages/events/EventDetails';
import Layout from './components/Layout';
import Body from './components/Body';
import SignIn from './components/SigIn';
import SignUp from './components/SignUp';
import Events from './pages/events';
import Reservations from './pages/reservation';
import EventForm from './pages/events/CreateEvent';
import Reserve from './pages/Reserve';
import DeleteEvent from './pages/events/DeleteEvent';

const ProtectedRoute = ({ path, element: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication state (e.g., from session storage or global state)
    const token = sessionStorage.getItem('userId');
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
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/events" element={<Events />} />
        <Route path="/add_event" element={<EventForm />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/delete" element={<DeleteEvent />} />
      </Route>
      <Route
        path="/protected"
        element={<ProtectedRoute path="/" element={Body} />}
      />
    </Routes>
  );
}

export default App;

function RequireAuth({ children }) {
  let location = useLocation();

  if (!sessionStorage.userId) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{ children }</>;
}
