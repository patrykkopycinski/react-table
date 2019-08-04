import React, { memo } from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import Button from './Button';

const StyledButton = styled(Button)`
  color: #333;

  &:hover {
    color: #b71f1f;
  }
`;

const DeleteButton = props => (
  <StyledButton {...props}>
    <MdDelete />
  </StyledButton>
);

export default memo(DeleteButton);
