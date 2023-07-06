import { styled } from 'styled-components';

export const Form = styled.form`
  margin: 20px;
 
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  outline: none;
  &:focus {
    border: 2px solid #000;
  }
`;

export const Input = styled.input`
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  width: 300px;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  outline: none;
  &:focus {
    border: 2px solid #000;
  }
`;
