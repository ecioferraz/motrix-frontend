import React, { useEffect, useState } from 'react';
import { TextCard } from '../../../components';
import IApiPost from '../../../interfaces/IPost';
import { getData } from '../../../services/APIRequests';
import parse from 'html-react-parser';

export default function BlogPosts() {
  const [posts, setPosts] = useState<IApiPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await getData('/');
      setPosts(data);
      setIsLoading(false);
      console.log(data);
    };

    getPosts();
  }, []);

  return isLoading
    ? <TextCard className='loading' text='Carregando...' />
    : (
      <>
        {posts.map(({ history }) => (
          <section
            className='blog-post'
            key={history[0].updatedAt.toString()}
          >
            <TextCard
              as='h1'
              className='title'
              text={history[0].title}
            />
            <div className='body'>
              {parse(history[0].body)}
            </div>
          </section>
        ))}
      </>
    );
}
