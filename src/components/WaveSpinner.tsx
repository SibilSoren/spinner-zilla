import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const barSizeClasses = {
  sm: 'h-2 w-0.5',
  md: 'h-3 w-1',
  lg: 'h-4 w-1.5',
  xl: 'h-5 w-2',
};

export const WaveSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`
            ${barSizeClasses[size]}
            ${color}
            bg-current
            mx-0.5
            animate-wave
            [animation-delay:${index * 0.15}s]
          `}
        />
      ))}
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const waveKeyframes = `
  @keyframes wave {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.5); }
  }
`;
