import React from 'react';
import ITextInput from './ITextInput';

export default function TextInput({
  className,
  handleChange,
  labelText,
  minLength,
  name,
  value,
}: ITextInput) {
  return (
    <label htmlFor={name}>
      {`${labelText}`}
      <input
        className={className}
        id={name}
        min={ minLength }
        name={name}
        onChange={handleChange}
        type="text"
        value={value}
      />
    </label>
  );
}
