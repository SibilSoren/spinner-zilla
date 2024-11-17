import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const StarSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <div className={`absolute inset-0 ${color} animate-star`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </div>
  );
};
