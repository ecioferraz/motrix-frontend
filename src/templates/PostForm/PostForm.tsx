import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextCard, TextInput } from '../../components';
import { getData, postData, updateData } from '../../services/APIRequests';
import Editor from '../Editor';

import './styles.css';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const { data } = await getData(`/${id}`);
        if (data) {
          setBody(data.history[0].body);
          setTitle(data.history[0].title);
        }
        setIsLoading(false);
      };

      getPost();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = id
      ? await updateData(`/${id}`, {title, body, updatedAt: new Date()})
      : await postData('/', {title, body, updatedAt: new Date()});
    setTitle('');
    setBody('');
    navigate(`/${data._id}`);
  };

  return (
    isLoading ? <TextCard className='loading' text='Carregando....' />
      : <form onSubmit={handleSubmit}>
        <TextInput
          className='title-input'
          handleChange={({ target: { value } }) => setTitle(value)}
          labelText='Título:'
          name='title'
          value={title}
          minLength='3'
        />
        <Editor setBody={setBody} content={body} />
        <Button
          className='submit-btn'
          name='Enviar'
          type='submit'
          disabled={title.length < 3}
        />
      </form>
  );
}
