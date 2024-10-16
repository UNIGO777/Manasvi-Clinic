// src/portion/admin/index.jsx
import React, { Suspense } from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Authentication from './pages/authentication';


const NotFound = () => {
  return <div className="text-center text-2xl text-red-500">Page Not Found</div>;
};

const Patient = () => {
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

export default Patient;
