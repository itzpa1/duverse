'use client';
import { SearchBar } from '@/components/SearchBar';
import SectionHeader from '@/components/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { pyq } from '@/lib/dummy';
import { formatNumber } from '@/lib/formatNumber';
import { Eye, FileDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchCollection } from '@/lib/fetchColletion';
import Loader from '@/components/Loader';

type PYQ = {
  id: string;
  subject: string;
  course: string;
  year: number;
  url: string;
  subjectViews: number;
  isSolved: boolean;
  isNep: boolean;
};

export default function PYQPage() {
  const [pyqs, setPYQs] = useState<PYQ[]>([]);
  const [filteredPYQs, setFilteredPYQs] = useState(pyqs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPYQs = async () => {
      try {
        const data = await fetchCollection('pyq') as PYQ[];
        setPYQs(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching PYQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPYQs();
  }, []);

  return (
    <div className="w-full container mx-auto py-6 mt-20 flex flex-col items-center justify-center">
      <SectionHeader title='Previous Year Questions📑' subtitle='Search PYQs by year or subject...' />
      <SearchBar
        allItems={pyqs}
        onSearch={setFilteredPYQs}
        placeholder="Search PYQs by Subject..."
      />
      {loading ? <Loader page='pyq' />
        : (
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:items-center container">
            {filteredPYQs.map(pyq => (
              <Card className='max-w-xs p-4 md:max-w-md hover:scale-102 transition duration-300 bg-blue-50 aspect-video flex flex-col justify-between ' key={pyq.id}>
                <div className='flex flex-col w-full '>
                  <div className='flex w-full justify-between items-center'>
                    <p className='uppercase font-medium text-xs text-gray-500'>Subject</p>
                    <div className='flex items-center gap-2'>
                      <Badge variant='outline'>
                        <TrendingUp />
                        {formatNumber(pyq.subjectViews)}
                      </Badge>
                      {pyq.isSolved && (
                        <Badge className='bg-orange-300'>
                          <Link href={'pyqs#solved'}>Solved</Link>
                        </Badge>
                      )}
                      {pyq.isNep && (
                        <Badge className='bg-blue-400'>
                          <Link href={'pyqs#nep'}>NEP</Link>
                        </Badge>
                      )}
                    </div>
                  </div>
                  <h1 className='text-xl font-semibold Uppercase '>{pyq.subject}</h1>
                  <p className='uppercase font-medium text-xs text-gray-500'>
                    {pyq.course} &bull; {pyq.year}
                  </p>
                </div>
                <div className='flex w-full gap-2 '>
                  <Link href={pyq.url} >
                    <Button className='flex gap-2 items-center bg-green-400 hover:bg-green-500 cursor-pointer' size='sm'>
                      <Eye size={20} />
                      View
                    </Button>
                  </Link>
                  <Link href={pyq.url} >
                    <Button className='flex gap-2 items-center bg-blue-400 hover:bg-blue-500 cursor-pointer' size='sm'>
                      <FileDown size={20} />
                      Download
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
    </div>
  );
}