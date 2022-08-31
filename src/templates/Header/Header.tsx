import React from 'react';
import { HeaderLink } from '../../components';

export default function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <HeaderLink
          className='home-link'
          name='Home'
        />
        <HeaderLink
          className='post-link'
          name='Post'
          path='post'
        />
      </nav>
    </header>
  );
}
