import React from 'react';
import IButton from './IButton';

export default function Button({
  name,
  handleClick,
  disabled,
  className,
  type,
}: IButton) {
  return (
    <button
      type={ type }
      name={ name }
      onClick={ handleClick }
      disabled={ disabled }
      className={ className }
    >
      { name }
    </button>
  );
}
