import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EditPost, Home, Post, PostHistory, UploadPost } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={ <Home /> }
      />
      <Route
        path='/:id'
        element={ <Post /> }
      />
      <Route
        path='/upload'
        element={ <UploadPost /> }
      />
      <Route
        path='post/history/:id'
        element={ <PostHistory /> }
      />
      <Route
        path='/edit/:id'
        element={ <EditPost /> }
      />
    </Routes>
  );
}
