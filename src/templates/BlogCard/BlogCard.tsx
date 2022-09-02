import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, RedirectLink, TextCard } from '../../components';
import parse from 'html-react-parser';
import { IPost } from '../../interfaces/IPost';

import './styles.css';

interface IBlogCard {
  body: IPost[];
  id?: string;
  title: string;
}

export default function BlogCard({ body, id, title }: IBlogCard) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id: idParam } = useParams();

  const handleClick = () => navigate(`/edit/${id || idParam}`);

  return (
    <div className='blog-card'>
      {!pathname.includes('history') && (
        <Button
          className='edit-btn'
          name='edit'
          type='button'
          handleClick={handleClick}
        />
      )}
      <section className='blog-post'>
        <TextCard
          as='h1'
          className='title'
          text={title}
        />
        {body.length > 1 && !pathname.includes('history') && (
          <RedirectLink
            className='history-link'
            name='(edited)'
            path={`post/history/${id || idParam}`}
          />
        )}
        <div className='body'>{parse(body[0].body)}</div>
      </section>
    </div>
  );
}
