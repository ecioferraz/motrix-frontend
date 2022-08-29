import React from 'react';
import IButton from './IButton';

export default function Button({
  className,
  disabled,
  handleClick,
  name,
  type,
}: IButton) {
  return (
    <button
      className={className}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      type={type}
    >
      {name}
    </button>
  );
}
