import { cn } from '@/lib/utils';
import React from 'react';

type Size = 'xl' | 'xs';
interface Props {
  className?: string;
  size: Size;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  size,
  children,
}) => {
  return (
    <div
      className={cn(
        'm-auto py-4',
        {
          xl: 'max-w-[1220px]',
          xs: 'max-w-[1440px]',
        }[size],
        className
      )}
    >
      {children}
    </div>
  );
};
