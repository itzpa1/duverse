'use client';
import { ReactNode } from 'react';

export function HorizontalScroller({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {/* Container with hidden scrollbar */}
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        {/* Content with constrained width */}
        <div className="inline-flex space-x-4 min-w-max">
          {children}
        </div>
      </div>
      
      {/* Fade effect on right side (optional) */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}