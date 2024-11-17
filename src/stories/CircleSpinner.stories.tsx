import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SpinnerProps } from '../types';
import { CircleSpinner } from '../components/CircleSpinner';

export default {
  title: 'Components/CircleSpinner',
  component: CircleSpinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
      defaultValue: 'md',
    },
    color: {
      control: { type: 'text' },
      description: 'Tailwind color class for the spinner',
      defaultValue: 'text-blue-500',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply',
      defaultValue: '',
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <CircleSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'text-blue-500',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  color: 'text-blue-500',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  color: 'text-blue-500',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  color: 'text-blue-500',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  size: 'md',
  color: 'text-purple-500',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  size: 'md',
  color: 'text-blue-500',
  className: 'p-4 bg-gray-100 rounded-lg shadow-inner',
};
