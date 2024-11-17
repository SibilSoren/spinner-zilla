import React from 'react';
import { SpinnerProps } from '../types';

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
};

// Adjusted orbit sizes to ensure three visible orbits in all sizes
const orbitSizes = {
  sm: ['w-10', 'w-7', 'w-4'],      // 100%, 70%, 40%
  md: ['w-12', 'w-8', 'w-5'],      // 100%, ~67%, ~42%
  lg: ['w-16', 'w-11', 'w-7'],     // 100%, ~69%, ~44%
  xl: ['w-24', 'w-16', 'w-10'],    // 100%, ~67%, ~42%
};

const planetSizes = {
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
  xl: 'w-2.5 h-2.5',
};

const sunSizes = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
  xl: 'w-3 h-3',
};

export const GalaxySpinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  // Calculate orbit speeds - inner orbits move faster
  const getOrbitDuration = (index: number) => 2 + index * 1.5;

  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      {/* Center sun */}
      <div 
        className={`absolute left-1/2 top-1/2 ${sunSizes[size]} ${color} bg-current rounded-full`}
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Orbits with planets */}
      {[0, 1, 2].map((orbitIndex) => (
        <div
          key={`orbit-${orbitIndex}`}
          className={`absolute left-1/2 top-1/2 aspect-square ${orbitSizes[size][orbitIndex]} ${color}`}
          style={{
            border: '1px solid currentColor',
            borderRadius: '50%',
            opacity: 0.3,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Planet container */}
          <div
            className="absolute inset-0"
            style={{
              animation: `galaxyOrbit ${getOrbitDuration(orbitIndex)}s linear infinite`,
              transformOrigin: 'center',
            }}
          >
            {/* Planet */}
            <div 
              className={`absolute ${planetSizes[size]} ${color} bg-current rounded-full`}
              style={{
                top: '50%',
                left: 0,
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          
          {/* Second planet container (opposite side) */}
          <div
            className="absolute inset-0"
            style={{
              animation: `galaxyOrbit ${getOrbitDuration(orbitIndex)}s linear infinite`,
              animationDelay: `${getOrbitDuration(orbitIndex) / 2}s`,
              transformOrigin: 'center',
            }}
          >
            {/* Planet */}
            <div 
              className={`absolute ${planetSizes[size]} ${color} bg-current rounded-full`}
              style={{
                top: '50%',
                right: 0,
                transform: 'translate(50%, -50%)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
