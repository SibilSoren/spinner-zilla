import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-1 w-1',
  md: 'h-2 w-2',
  lg: 'h-3 w-3',
  xl: 'h-4 w-4',
};

const containerSizeClasses = {
  sm: 'w-8',
  md: 'w-12',
  lg: 'w-16',
  xl: 'w-20',
};

export const DotSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`flex justify-between ${containerSizeClasses[size]} ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full ${color} animate-bounce [animation-delay:-0.3s]`} />
      <div className={`${sizeClasses[size]} rounded-full ${color} animate-bounce [animation-delay:-0.15s]`} />
      <div className={`${sizeClasses[size]} rounded-full ${color} animate-bounce`} />
    </div>
  );
};
