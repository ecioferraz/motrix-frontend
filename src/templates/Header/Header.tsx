import React from 'react';
import { RedirectLink } from '../../components';

export default function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <RedirectLink
          className='home-link'
          name='Home'
        />
        <RedirectLink
          className='post-link'
          name='Post'
          path='upload'
        />
      </nav>
    </header>
  );
}
