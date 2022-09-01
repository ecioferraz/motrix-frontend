import React from 'react';
import { RedirectLink } from '../../components';
import './styles.css';

export default function Header() {
  return (
    <header>
      <nav>
        <RedirectLink
          className='home-link'
          name='Home'
        />
        <RedirectLink
          className='upload-link'
          name='Upload'
          path='upload'
        />
      </nav>
    </header>
  );
}
