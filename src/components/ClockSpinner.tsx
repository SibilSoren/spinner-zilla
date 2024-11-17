import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const handSizeClasses = {
  sm: 'h-1.5 w-0.5',
  md: 'h-2.5 w-0.5',
  lg: 'h-3.5 w-1',
  xl: 'h-4.5 w-1',
};

export const ClockSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div 
      className={`
        ${sizeClasses[size]}
        relative
        rounded-full
        border-2
        border-current
        ${color}
        ${className}
      `}
    >
      <div
        className={`
          ${handSizeClasses[size]}
          absolute
          left-1/2
          bottom-1/2
          -translate-x-1/2
          origin-bottom
          bg-current
          animate-clockSpin
        `}
      />
      <div
        className={`
          ${handSizeClasses[size]}
          absolute
          left-1/2
          bottom-1/2
          -translate-x-1/2
          origin-bottom
          bg-current
          animate-[clockSpin_12s_linear_infinite]
        `}
      />
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const clockKeyframes = `
  @keyframes clockSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
