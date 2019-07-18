import React from 'react';
import { shallow } from 'enzyme';
import TableColumn from './TableColumn';

it('renders without crashing', () => {
  shallow(<TableColumn />);
});