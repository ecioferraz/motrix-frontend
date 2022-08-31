import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextCard } from '../../components';

interface IBlogCard {
  body: string,
  id: string,
  title: string,
}

export default function BlogCard({body, id, title}: IBlogCard) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/edit/${id}`);

  return (
    <div>
      <Button
        className='edit-btn'
        name='edit'
        type='button'
        handleClick={handleClick}
      />
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
    </div>
  );
}
