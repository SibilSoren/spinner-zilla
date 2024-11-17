import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const FlipSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} ${color} ${className}`}>
      <div className="h-full w-full bg-current rounded animate-flip" />
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const flipKeyframes = `
  @keyframes flip {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    25% { transform: rotateX(180deg) rotateY(0deg); }
    50% { transform: rotateX(180deg) rotateY(180deg); }
    75% { transform: rotateX(0deg) rotateY(180deg); }
    100% { transform: rotateX(0deg) rotateY(0deg); }
  }
`;
