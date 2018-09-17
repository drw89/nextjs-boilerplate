import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import environments from '../../../constants/environments';

const exampleStore = {
  envStore: {
    env: environments.MSP_PROD,
  },
};

describe('Organism: Header', () => {
  test('Should contain the mobx store', () => {
    const wrapper = shallow(<Header store={exampleStore} />);
    expect(wrapper.prop('store').envStore).toEqual({ env: 'MSP_PROD' });
  });

  // @todo fix this test
  test('Should open the menu', () => {
    // const wrapper = shallow(<Header store={exampleStore} />);

    // wrapper.setState({ isOpen: false });
    // expect(wrapper.state('isOpen')).toBe(false);

    // wrapper.find('IconButton').simulate('click');
    // expect(wrapper.state('isOpen')).toBe(true);
  });

  test('Should close the menu', () => {
    expect(true).toBe(false);
  });
});
