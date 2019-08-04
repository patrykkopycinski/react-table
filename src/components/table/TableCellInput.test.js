import React from 'react';
import { shallow } from 'enzyme';
import TableCellInput from './TableCellInput';

it('renders without crashing', () => {
  const props = {
    onChange: jest.fn(),
  };

  shallow(<TableCellInput {...props} />);
});
