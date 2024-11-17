import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const ClockSpinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <div
        className={`absolute inset-0 ${color}`}
        style={{ animation: 'ClockSpinner 2s linear infinite' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const clockKeyframes = `
  @keyframes clockSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
