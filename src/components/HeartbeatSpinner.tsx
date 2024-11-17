import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const HeartbeatSpinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <div
        className={`absolute inset-0 ${color}`}
        style={{ animation: 'HeartbeatSpinner 1.2s ease-in-out infinite' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const heartbeatKeyframes = `
  @keyframes heartbeat {
    0% { transform: scale(0.8); }
    5% { transform: scale(0.9); }
    10% { transform: scale(0.8); }
    15% { transform: scale(1); }
    50% { transform: scale(0.8); }
    100% { transform: scale(0.8); }
  }
`;
