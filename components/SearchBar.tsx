'use client';
import { ScanSearch } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from './ui/input';

export function SearchBar<T extends { subject: string }>({
  allItems,
  onSearch,
  placeholder = "Search...",
}: {
  allItems: T[];
  onSearch: (filteredItems: T[]) => void;
  placeholder?: string;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = allItems.filter(item =>
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(results);
  }, [searchTerm, allItems, onSearch]);

  return (
    <div className="md:max-w-2xl w-[90%] md:w-full mx-auto mb-6 flex items-center">
      <div className="relative w-full bg-white rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 border-2 ">
        <Input
          className="h-12 w-full outline-none pl-4 pr-12 shadow-sm group border-none placeholder:font-medium"
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ScanSearch className='absolute text-blue-400 hover:text-blue-400/40 right-2 top-1/2 -translate-y-1/2 transform cursor-pointer' size={30} />
      </div>
    </div>
  );
}