import React from 'react';

export interface PulseSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export const PulseSpinner: React.FC<PulseSpinnerProps> = ({
  size = 'md',
  color = 'text-blue-500',
  className = '',
}) => {
  return (
    <div className="relative inline-flex">
      <div 
        className={`
          ${sizeMap[size]}
          rounded-full
          bg-current
          ${color}
          animate-[pulse_1s_cubic-bezier(0,0,0.2,1)_infinite]
        `}
      />
      <div 
        className={`
          ${sizeMap[size]}
          rounded-full
          bg-current
          ${color}
          absolute
          inset-0
          animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]
        `}
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );
};

export default PulseSpinner;
