import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EditPost, Home, UploadPost } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={ <Home /> }
      />
      <Route
        path='/post'
        element={ <UploadPost /> }
      />
      <Route
        path='/edit/:id'
        element={ <EditPost /> }
      />
    </Routes>
  );
}
