import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const dotSizeClasses = {
  sm: 'h-1 w-1',
  md: 'h-1.5 w-1.5',
  lg: 'h-2 w-2',
  xl: 'h-2.5 w-2.5',
};

export const DNASpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={i}>
          <div
            className={`absolute ${dotSizeClasses[size]} ${color} rounded-full bg-current`}
            style={{
              top: `${(i / 8) * 100}%`,
              left: '0',
              animation: 'dnaLeft 1.5s infinite',
              animationDelay: `${i * 0.15}s`
            }}
          />
          <div
            className={`absolute ${dotSizeClasses[size]} ${color} rounded-full bg-current`}
            style={{
              top: `${(i / 8) * 100}%`,
              right: '0',
              animation: 'dnaRight 1.5s infinite',
              animationDelay: `${i * 0.15}s`
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const dnaKeyframes = `
  @keyframes dnaLeft {
    0% { transform: translateX(0) scale(1); }
    25% { transform: translateX(100%) scale(0.5); }
    50% { transform: translateX(0) scale(1); }
    75% { transform: translateX(100%) scale(0.5); }
    100% { transform: translateX(0) scale(1); }
  }
  @keyframes dnaRight {
    0% { transform: translateX(0) scale(0.5); }
    25% { transform: translateX(-100%) scale(1); }
    50% { transform: translateX(0) scale(0.5); }
    75% { transform: translateX(-100%) scale(1); }
    100% { transform: translateX(0) scale(0.5); }
  }
`;
