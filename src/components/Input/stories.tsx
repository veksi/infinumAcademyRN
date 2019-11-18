
import React, { FunctionComponent, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input, IInputProps } from './Input';

const InputComponent: FunctionComponent<IInputProps> = ({
  error,
  errorText,
  placeholderText,
  value,
  inputType,
}) => {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (text: string) => {
    setTextValue(text);
  }

  return (
    <Input
      value={textValue}
      placeholderText={placeholderText}
      error={error}
      errorText={errorText}
      inputType={inputType}
      onChange={handleChange}
  />
  )

}
storiesOf('Input', module)
  .add('Default input', () => (
    <InputComponent
      placeholderText="E-mail"
      value=""
      error={false}
    />
  ));
