import React from 'react';
import { shallow } from 'enzyme';
import TableColumnHeader from './TableColumnHeader';

it('renders without crashing', () => {
  shallow(<TableColumnHeader />);
});
