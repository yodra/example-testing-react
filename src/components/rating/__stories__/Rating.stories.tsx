import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Rating } from '../Rating';

export default {
  title: 'Rating',
  component: Rating
} as Meta;

const Template: Story = (args) => <Rating {...args}/>;

export const ByDefault = Template.bind({});
ByDefault.args = {};
