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
          className={`absolute left-1/2 top-1/2 border-2 border-current rounded-full ${orbitSizeClasses[size][orbit]} ${color}`}
          style={{
            opacity: 1 - orbit * 0.2,
            animation: `galaxyOrbit ${2 + orbit}s linear infinite`,
            transform: 'translate(-50%, -50%) rotate(0deg)',
            borderLeftColor: 'transparent',
            borderBottomColor: 'transparent'
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
