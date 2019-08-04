import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

it('renders without crashing', () => {
  const props = {
    columns: {},
    rows: {},
    onUpdateRowField: jest.fn(),
    onUpdateColumnField: jest.fn(),
    onDeleteRow: jest.fn(),
    onAddColumn: jest.fn(),
    onDeleteColumn: jest.fn(),
  };

  shallow(<Table {...props} />);
});
