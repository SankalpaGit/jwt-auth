import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated 
    ? children 
    : <Navigate to="/login" state={{ message: 'Please log in to continue' }} replace />;
};

const AdminRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return isAuthenticated && user?.isAdmin 
    ? children 
    : <Navigate to="/login" state={{ message: 'Admin access required' }} replace />;
};

export { PrivateRoute, AdminRoute };
