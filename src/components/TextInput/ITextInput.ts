import { ChangeEvent } from 'react';

interface iTextInput {
  className: string,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  labelText: string,
  name: string,
  value: string,
}

export default iTextInput;
