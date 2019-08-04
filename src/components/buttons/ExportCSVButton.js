import React, { memo } from 'react';
import styled from 'styled-components';
import { MdFileDownload } from 'react-icons/md';
import Button from './Button';

const StyledButton = styled(Button)`
  width: 300px;
  background: #333;
  color: #fff;
  font-size: 20px;
  line-height: 32px;

  &:hover {
    background: #61dafb;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

const ExportCSVButton = props => (
  <StyledButton {...props}>
    {'Export data as CSV '}
    <MdFileDownload />
  </StyledButton>
);

export default memo(ExportCSVButton);
