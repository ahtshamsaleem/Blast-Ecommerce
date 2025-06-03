'use client';

import clsx from 'clsx';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  active?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = 'md',
  active = false,
  className = '',
}) => {
  const widthClass: Record<string, string> = {
    sm: 'w-[216px] sm:w-[120px]',
    md: 'w-2/3 sm:w-[136px]',
    lg: 'w-[216px] sm:w-[176px]',
    xl: 'w-[216px]',
    xxl: 'w-[141px] sm:w-[256px]',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center cursor-pointer',
        'p-1 h-[42px]',
        widthClass[size],
        active
          ? 'bg-white text-[#242424] shadow-[7px_7px_0px_rgba(255,255,255,0.25)]'
          : 'bg-[#242424] text-white shadow-[7px_7px_0px_rgba(0,0,0,0.25)]',
        'text-base sm:text-lg font-medium',
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
