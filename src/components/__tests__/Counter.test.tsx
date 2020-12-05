import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Counter } from '../Counter';

describe('CounterButton', () => {
  test('render component', () => {
    const wrapper = shallow(<Counter/>);

    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toBe('You clicked 0 times');
  });

  test('render component and increment counter', () => {
    const wrapper = mount(<Counter/>);
    const button = wrapper.find('button');

    button.simulate('click');
    button.simulate('click');

    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toBe('You clicked 2 times');
  });
});
