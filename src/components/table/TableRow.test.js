import React from 'react';
import { shallow } from 'enzyme';
import TableRow from './TableRow';

it('renders without crashing', () => {
  const props = {
    columns: [],
  };

  shallow(<TableRow {...props} />);
});
