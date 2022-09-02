import React, { Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, RedirectLink, TextCard } from '../../components';
import parse from 'html-react-parser';
import IApiPost, { IPost } from '../../interfaces/IPost';

import './styles.css';
import { deleteData } from '../../services/APIRequests';

interface IBlogCard {
  body: IPost[];
  id?: string;
  title: string;
  posts?: IApiPost[];
  setPosts?: Dispatch<SetStateAction<IApiPost[]>>;
}

export default function BlogCard({
  body,
  id,
  title,
  posts,
  setPosts,
}: IBlogCard) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id: idParam } = useParams();

  const handleEditPost = () => navigate(`/edit/${id || idParam}`);

  const handleDeletePost = async () => {
    await deleteData(`/${id || idParam}`);

    if (posts && setPosts) {
      const filteredPosts = posts?.filter((post) => post._id !== id);
      setPosts(filteredPosts);
    }

    navigate('/');
  };

  return (
    <div className='blog-card'>
      {!pathname.includes('history') && (
        <Button
          className='edit-btn'
          name='edit'
          type='button'
          handleClick={handleEditPost}
        />
      )}
      <Button
        className='delete-btn'
        name='delete'
        type='button'
        handleClick={handleDeletePost}
      />
      <section className='blog-post'>
        <TextCard as='h1' className='title' text={title} />
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
