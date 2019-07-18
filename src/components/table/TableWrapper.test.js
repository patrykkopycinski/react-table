import React from 'react';
import { shallow } from 'enzyme';
import TableWrapper from './TableWrapper';

it('renders without crashing', () => {
  shallow(<TableWrapper />);
});