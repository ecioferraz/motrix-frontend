import { ChangeEvent } from 'react';

interface ITextInput {
  className: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  minLength?: string;
  name: string;
  value: string;
}

export default ITextInput;
