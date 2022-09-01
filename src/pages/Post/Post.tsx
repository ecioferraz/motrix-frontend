import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextCard } from '../../components';
import IApiPost, { IPost } from '../../interfaces/IPost';
import { getData } from '../../services/APIRequests';
import { BlogCard } from '../../templates';

export default function Post() {
  const [post, setPost] = useState<IApiPost>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const { data } = await getData(`/${id}`);
      setPost(data);
      setIsLoading(false);
    };

    getPost();
  });

  return (
    isLoading ? <TextCard className='loading' text='Carregando...' />
      : (
        <BlogCard
          body={post?.history as IPost[]}
          title={post?.history[0].title as string}
        />
      ) 
  );
}
