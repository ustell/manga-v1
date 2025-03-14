import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';

interface Props {
  className?: string;
  title?: string;
  titleSize?: string;
  border?: boolean;
  subtitle: string;
}

export const HistoryContent: React.FC<Props> = ({
  className,
  title,
  border,
  subtitle,
  titleSize,
}) => (
  <div className={cn('flex flex-col gap-8 mb-8', className)}>
    {title && <Title text={title} size={titleSize} />}
    <p>{subtitle}</p>
    {border && <div className="w-25 h-0.5 bg-red-600" />}
  </div>
);
