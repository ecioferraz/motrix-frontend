import React from 'react';
import { TextCard } from '../../components';

interface IBlogCard {
  body: string,
  title: string,
}

export default function BlogCard({body, title}: IBlogCard) {
  return (
    <section
      className='blog-post'
    >
      <TextCard
        as='h1'
        className='title'
        text={title}
      />
      <div className='body'>
        {body}
      </div>
    </section>
  );
}
