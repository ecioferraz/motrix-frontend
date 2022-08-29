import React from 'react';
import ITextInput from './ITextInput';

export default function TextInput({
  className, handleChange, labelText, name, value,
}: ITextInput) {
  return (
    <label htmlFor={ name }>
      { `${ labelText }` }
      <input
        className={ className }
        type="text"
        name={ name }
        value={ value }
        onChange={ handleChange }
        id={ name }
      />
    </label>
  );
}
