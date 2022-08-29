import { MouseEventHandler } from 'react';

interface iButton {
  className: string,
  disabled?: boolean,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
  name: string,
  type: 'button' | 'submit',
}

export default iButton;
