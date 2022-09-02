import React from 'react';
import { TextCard } from '../../components';
import { BlogPosts } from '../../templates';

import './styles.css';

export default function Home() {
  return (
    <main>
      <TextCard
        as='h1'
        className='blog-title'
        text='Moxxie Blog'
      />
      <BlogPosts />
    </main>
  );
}