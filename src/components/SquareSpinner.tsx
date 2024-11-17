import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const squareSizeClasses = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2.5 w-2.5',
  lg: 'h-3.5 w-3.5',
  xl: 'h-4.5 w-4.5',
};

export const SquareSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-2 gap-1 ${sizeClasses[size]} ${className}`}>
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`
            ${squareSizeClasses[size]}
            ${color}
            bg-current
            animate-squarePulse
            [animation-delay:${index * 0.15}s]
          `}
        />
      ))}
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const squareKeyframes = `
  @keyframes squarePulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.5); opacity: 0.5; }
  }
`;
