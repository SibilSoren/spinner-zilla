import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const matrixChars = ['0', '1'];

export const MatrixSpinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  const gridSize = 3;
  
  return (
    <div 
      className={`${sizeClasses[size]} grid gap-0.5 ${color} ${className}`}
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {[...Array(gridSize * gridSize)].map((_, i) => (
        <div 
          key={i}
          className="flex items-center justify-center text-[0.5em] font-bold"
          style={{
            animation: 'matrixChar 2s infinite',
            animationDelay: `${i * 0.2}s`
          }}
        >
          {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
        </div>
      ))}
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const matrixKeyframes = `
  @keyframes matrixChar {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;
