// src/portion/admin/index.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/authentication';
import { Navigate } from 'react-router-dom';

const NotFound = () => {
  return <div className="text-center text-2xl text-red-500">Page Not Found</div>;
};

const Admin = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="authentication" element={<Authentication />} />
        <Route path="/" element={<Navigate to="authentication" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Admin;
