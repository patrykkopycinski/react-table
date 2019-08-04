import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  font-size: inherit;

  &:focus {
    outline: 0;
  }

  svg {
    display: block;
  }
`;

export default Button;
