import React, { memo } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button)`
  font-size: 24px;
  color: #fff;
  padding: 8px 16px;
  background: #35da35;
`;

const CreateTableButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>Create Table</StyledButton>
);

export default memo(CreateTableButton);
