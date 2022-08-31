import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EditPost, Home, Post } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={ <Home /> }
      />
      <Route
        path='/post'
        element={ <Post /> }
      />
      <Route
        path='/edit/:id'
        element={ <EditPost /> }
      />
    </Routes>
  );
}
