// src/hoc/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';


const ProtectedRoute = ({children,isAuthenticated,navigate}) => {
   // Replace with actual authentication logic

  return (
    <Route
      
      render={props =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate to={navigate} />
        )
      }
    />
  );
};

export default ProtectedRoute;

