import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

const navItems = [
  { label: 'lançamentos', href: '#' },
  { label: 'outros mangas', href: '#' },
  { label: 'comunidade', href: '#' },
  { label: 'pt-br', href: '#' },
];

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        'flex justify-between items-center py-1.5 text-white text-base bg-[#B60B0B] px-5 mb-12',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="bg-black rounded-4xl text-red-500 py-2 px-3 font-bold">
          月
        </span>
        <h1>MOON</h1>
      </div>
      <nav>
        <ul className="flex gap-7">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className="hover:text-gray-300" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#">
              <Globe />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
