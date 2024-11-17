import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SpinnerProps } from '../types';
import { StarSpinner } from '../components/StarSpinner';
import { HeartbeatSpinner } from '../components/HeartbeatSpinner';
import { DNASpinner } from '../components/DNASpinner';
import { GalaxySpinner } from '../components/GalaxySpinner';
import { MatrixSpinner } from '../components/MatrixSpinner';

export default {
  title: 'Components/NewSpinners',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => (
  <div className="flex space-x-4">
    <StarSpinner {...args} />
    <HeartbeatSpinner {...args} />
    <DNASpinner {...args} />
    <GalaxySpinner {...args} />
    <MatrixSpinner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'text-blue-500',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  color: 'text-blue-500',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  size: 'md',
  color: 'text-purple-500',
};
