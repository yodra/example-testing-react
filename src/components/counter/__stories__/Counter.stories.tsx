import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Counter } from '../Counter';

export default {
  title: 'Counter',
  component: Counter
} as Meta;

const Template: Story = (args) => <Counter {...args}/>;

export const ByDefault = Template.bind({});
ByDefault.args = {};
