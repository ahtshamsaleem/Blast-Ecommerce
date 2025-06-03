'use client';

import React from 'react';
import clsx from 'clsx';

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | 'custom32';
  color?: 'white' | 'black';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = 'lg',
  color = 'black',
  className = '',
}) => {
  const sizeStyles: Record<
    string,
    { fontSize?: string }
  > = {
    sm: {}, // Tailwind's text-sm (~14px) is fine as-is
    base: {}, // Tailwind base (16px) is fine
    lg: { fontSize: 'clamp(16px, 2vw, 18px)' },
    xl: { fontSize: 'clamp(14px, 2vw, 24px)' },
    '2xl': { fontSize: 'clamp(26px, 3vw, 42px)' },
    custom32: { fontSize: 'clamp(12px, 2vw, 32px)' },
  };

  const sizeClass = {
    sm: 'text-sm',
    base: 'text-base',
    lg: '',
    xl: '',
    '2xl': '',
    custom32: '',
  }[size];

  const colorClass = {
    white: 'text-white',
    black: 'text-black',
  }[color];

  return (
    <p
      className={clsx(sizeClass, colorClass, className)}
      style={sizeStyles[size]}
    >
      {children}
    </p>
  );
};

export default Text;
