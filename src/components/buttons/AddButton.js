import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

import Button from './Button';

const StyledButton = styled(Button)`
  color: #35da35;
  font-size: 40px;
`;

const AddButton = props => (
  <StyledButton {...props}>
    <MdAdd />
  </StyledButton>
);

export default AddButton;
