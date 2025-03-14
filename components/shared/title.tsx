import clsx from 'clsx';
import React from 'react';

type Size = 'xl' | 'lg' | 'sm' | 'xs';

interface Props {
  size?: Size;
  text: string;
  className?: string;
}


// lg
// xl

// 16 14
// 18

export const Title: React.FC<Props> = ({ className, size = 'xs', text }) => {
  const FontSize = {
    xl: 'text-[40px]',
    lg: 'text-[36px]',
    sm: 'text-[32px]',
    xs: 'text-[24px]',
  } as const;
  const FontElement = {
    xl: 'h1',
    lg: 'h2',
    sm: 'h3',
    xs: 'h4',
  } as const;
  return React.createElement(
    FontElement[size],
    { className: clsx(FontSize[size], className) },
    text
  );
};
