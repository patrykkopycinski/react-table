import React, { memo } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  margin-bottom: 16px;
  text-align: right;
`;

const AddRowSection = props => <StyledSection {...props} />;

export default memo(AddRowSection);
