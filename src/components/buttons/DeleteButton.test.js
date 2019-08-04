import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from './DeleteButton';

it('renders without crashing', () => {
  shallow(<DeleteButton />);
});
