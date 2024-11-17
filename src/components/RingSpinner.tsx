import React from 'react';

export interface RingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  thickness?: 'thin' | 'normal' | 'thick';
  className?: string;
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const thicknessMap = {
  thin: 'border-2',
  normal: 'border-4',
  thick: 'border-8',
};

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const RingSpinner: React.FC<RingSpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  thickness = 'normal',
  className = '',
}) => {
  return (
    <div role="status" className={`${sizeClasses[size]} relative ${className}`}>
      <div
        className={`
          absolute
          inset-0
          ${thicknessMap[thickness]}
          border-current
          border-t-transparent
          rounded-full
          ${color}
          animate-spin
        `}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default RingSpinner;
