import React, { useEffect, useState } from 'react';
import { TextCard } from '../../components';
import IApiPost from '../../interfaces/IPost';
import { getData } from '../../services/APIRequests';
import { BlogCard } from '../';

export default function BlogPosts() {
  const [posts, setPosts] = useState<IApiPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await getData('/');
      setPosts(data);
      setIsLoading(false);
    };

    getPosts();
  }, []);

  return isLoading
    ? <TextCard className='loading' text='Carregando...' />
    : (
      <>
        {posts.map(({ history }) => (
          <BlogCard
            body={history[0].body}
            key={history[0].updatedAt.toString()}
            title={history[0].title}
          />
        ))}
      </>
    );
}
