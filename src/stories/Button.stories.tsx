import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;
const defaultArgs = {
  label: 'Button',
  onClick: action('Clicked')
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small'
};

export const NoAccessible = Template.bind({});
NoAccessible.args = {
  ...defaultArgs,
  backgroundColor: '#535758'
};
