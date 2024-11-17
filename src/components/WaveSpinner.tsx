import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const barSizeClasses = {
  sm: 'w-1',
  md: 'w-1.5',
  lg: 'w-2',
  xl: 'w-2.5',
};

export const WaveSpinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} flex justify-between items-center ${className}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`h-full ${barSizeClasses[size]} ${color} bg-current`}
          style={{
            animation: 'WaveSpinner 1.2s ease-in-out infinite',
            animationDelay: `${index * 0.15}s`
          }}
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
