import React from 'react';
import { Container } from './InputStyle';

const Input = ({ type, placeholder, onChange, name, value, defaultValue, width, height }) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      defaultValue={defaultValue}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
