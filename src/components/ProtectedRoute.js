import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ path, element: Component, isSignedOut }) => {
  if (isSignedOut) {
    return <Navigate to="/signin" replace />;
  }

  return <Route path={path} element={<Component />} />;
};

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  element: PropTypes.elementType.isRequired,
  isSignedOut: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
