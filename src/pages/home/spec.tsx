import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

describe('HomePage', () => {
  it('It should render', () => {
    const component = shallow(<Home />);
    const wrapper = component.find('.homepage');
    expect(wrapper.length).toBe(1);
  });
});
