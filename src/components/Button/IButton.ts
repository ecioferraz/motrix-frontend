import { MouseEventHandler } from 'react';

interface iButton {
  name: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  className: string,
  type: 'button' | 'submit',
}

export default iButton;
