import React from 'react';
import { Form, Button, Input } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="input" />
      <Button type="submit">Search</Button>
    </Form>
  );
};
