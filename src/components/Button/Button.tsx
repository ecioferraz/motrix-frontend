import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import IButton from './IButton';

export default function Button({
  className,
  disabled,
  handleClick,
  name,
  type,
}: IButton) {
  const handleButtonName = () => {
    switch (name) {
    case 'edit':
      return (<FaEdit />);
    case 'delete':
      return (<FaTrash />);
    default:
      return name;
    }
  };
  
  return (
    <button
      className={className}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      type={type}
    >
      {handleButtonName()}
    </button>
  );
}
