import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SpinnerProps } from '../types';
import { GalaxySpinner } from '../components/GalaxySpinner';

export default {
  title: 'Components/GalaxySpinner',
  component: GalaxySpinner,
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
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <GalaxySpinner {...args} />;

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

export const PurpleGalaxy = Template.bind({});
PurpleGalaxy.args = {
  size: 'md',
  color: 'text-purple-600',
};
