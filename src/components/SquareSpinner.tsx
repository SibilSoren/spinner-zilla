import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-5 w-5',
  md: 'h-7 w-7',
  lg: 'h-9 w-9',
  xl: 'h-11 w-11',
};

const squareSizeClasses = {
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-4 w-4',
};

export const SquareSpinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`absolute ${squareSizeClasses[size]} ${color} bg-current`}
          style={{
            animation: 'squareSpin 2s ease infinite',
            animationDelay: `${index * 0.2}s`,
            left: index === 0 || index === 3 ? '0' : '75%',
            top: index === 0 || index === 1 ? '0' : '75%',
            transform: `${index === 1 || index === 3 ? 'translateX(-100%)' : ''} ${index === 2 || index === 3 ? 'translateY(-100%)' : ''}`,
            transformOrigin: '50% 50%'
          }}
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
