
import React, { FormEvent, useState } from 'react';
import { Button, Editor, TextInput } from '../../components';
import { postData } from '../../services/APIRequests';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await postData('/', {title, body, updatedAt: new Date()});
    setTitle('');
    setBody('');
    console.log(data._id);
    // redirect to post instead
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        className='title-input'
        handleChange={({ target: { value } }) => setTitle(value)}
        labelText='Título:'
        name='title'
        value={title}
        minLength='3'
      />
      <Editor setBody={setBody} />
      <Button
        className='submit-btn'
        name='Enviar'
        type='submit'
        disabled={title.length < 3}
      />
    </form>
  );
}
