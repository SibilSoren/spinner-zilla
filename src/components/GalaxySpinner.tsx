import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const orbitSizeClasses = {
  sm: ['h-4 w-4', 'h-3 w-3', 'h-2 w-2'],
  md: ['h-6 w-6', 'h-4 w-4', 'h-2 w-2'],
  lg: ['h-8 w-8', 'h-6 w-6', 'h-4 w-4'],
  xl: ['h-10 w-10', 'h-8 w-8', 'h-6 w-6'],
};

export const GalaxySpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      {[0, 1, 2].map((orbit) => (
        <div
          key={orbit}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${orbitSizeClasses[size][orbit]} rounded-full ${color} opacity-${100 - orbit * 30} animate-galaxy`}
          style={{
            animationDelay: `${orbit * 0.2}s`
          }}
        />
      ))}
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const galaxyKeyframes = `
  @keyframes galaxySpin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;
