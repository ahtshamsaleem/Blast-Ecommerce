'use client';

import React from 'react';
import clsx from 'clsx';

interface HeadingProps {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'base' | 'sm' | 'xs' | 'xxs';
  color?: 'white' | 'black';
  className?: string;
  style?: React.CSSProperties;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  size = 'lg',
  color = 'white',
  className = '',
  style = {},
}) => {
  const sizeStyles: Record<string, { fontSize: string; lineHeight: string }> = {
    lg: {
      fontSize: 'clamp(30px, 8vw, 92px)',
      lineHeight: 'clamp(38px, 9vw, 106px)',
    },
    md: {
      fontSize: 'clamp(32px, 6vw, 72px)',
      lineHeight: 'clamp(38px, 7vw, 84px)',
    },
    base: {
      fontSize: 'clamp(32px, 5vw, 64px)',
      lineHeight: 'clamp(38px, 6vw, 76.8px)',
    },
    sm: {
      fontSize: 'clamp(32px, 4vw, 42px)',
      lineHeight: 'clamp(38px, 5vw, 48px)',
    },
    xs: {
      fontSize: 'clamp(20px, 3vw, 32px)',
      lineHeight: 'clamp(12px, 4vw, 38px)',
    },
    xxs: {
      fontSize: 'clamp(13px, 3vw, 26px)',
      lineHeight: 'clamp(12px, 4vw, 38px)',
    },
  };

  const colorClass = color === 'black' ? 'text-black' : 'text-white';
  const textShadow =
    size === 'xxs'
      ? 'none'
      : color === 'black'
      ? '3px 4px 0px #ffffff'
      : '3px 4px 0px #000000';

  return (
    <h1
      className={clsx('font-arco', colorClass, className)}
      style={{
        textShadow,
        fontSize: sizeStyles[size].fontSize,
        lineHeight: sizeStyles[size].lineHeight,
        ...style,
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
