import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Counter } from '../Counter';
import { fireEvent, render, screen } from "@testing-library/react";

describe('Counter enzyme', () => {
  test('should render component', () => {
    const wrapper = shallow(<Counter/>);

    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toBe('You clicked 0 times');
  });

  test('should render component and increment counter', () => {
    const wrapper = mount(<Counter/>);
    const button = wrapper.find('button');

    button.simulate('click');
    button.simulate('click');

    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toBe('You clicked 2 times');
  });
});

describe('Counter', () => {
  test('should render component', () => {
    render(<Counter/>);

    const paragraph = screen.getByText('You clicked 0 times');
    expect(paragraph).toBeInTheDocument();
  });

  test('should render component and increment counter', () => {
    render(<Counter/>);
    const button = screen.getByText('increment');

    fireEvent.click(button);
    fireEvent.click(button);

    const paragraph = screen.queryByText('You clicked 2 times');
    expect(paragraph).toBeInTheDocument();
  });
});
