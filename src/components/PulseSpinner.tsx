import React from 'react';

export interface PulseSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const PulseSpinner: React.FC<PulseSpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div 
      className={`
        ${sizeMap[size]}
        rounded-full
        ${color}
        animate-pulse
        ${className}
      `}
    />
  );
};

export default PulseSpinner;
