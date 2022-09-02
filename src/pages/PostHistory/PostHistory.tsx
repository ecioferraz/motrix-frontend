import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextCard } from '../../components';
import { IPost } from '../../interfaces/IPost';
import { getData } from '../../services/APIRequests';
import { BlogCard } from '../../templates';

export default function PostHistory() {
  const { id } = useParams();
  const [postHistory, setPostHistory] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPostHistory = async () => {
      const { data } = await getData(`/${id}`);
      setPostHistory(data.history);
      setIsLoading(false);
    };

    getPostHistory();
  }, []);

  return (
    <main>
      {isLoading ? (
        <TextCard className='loading' text='Carregando...' />
      ) : (
        <>
          {postHistory.map(({ title, updatedAt }) => (
            <BlogCard
              body={postHistory}
              key={updatedAt.toString()}
              title={title}
            />
          ))}
        </>
      )}
    </main>
  );
}
