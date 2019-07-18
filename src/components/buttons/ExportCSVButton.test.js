import React from 'react';
import { shallow } from 'enzyme';
import ExportCSVButton from './ExportCSVButton';

it('renders without crashing', () => {
  shallow(<ExportCSVButton />);
});