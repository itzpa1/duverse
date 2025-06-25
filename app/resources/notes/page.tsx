'use client';
import { SearchBar } from '@/components/SearchBar';
import SectionHeader from '@/components/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { notes } from '@/lib/dummy';
import { fetchCollection } from '@/lib/fetchColletion';
import { formatNumber } from '@/lib/formatNumber';
import { Eye, FileDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Notes = {
  id: string;
  subject: string;
  course: string;
  year: number;
  url: string;
  subjectViews: number;
};


export default function NotesPage() {
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [pyqs, setPYQs] = useState<Notes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPYQs = async () => {
      try {
        const data = await fetchCollection('note') as Notes[];
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
      <SectionHeader title='Notes📝' subtitle='notes by toppers' />
      <SearchBar
        allItems={notes}
        onSearch={setFilteredNotes}
        placeholder="Search notes by Subject..."
      />

      {/* Custom rendering for notes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container">
        {filteredNotes.map(note => (
          <Card className='max-w-xs p-4 md:max-w-md hover:scale-102 transition duration-300 bg-blue-50 aspect-video flex flex-col justify-between ' key={note.id}>
            <div className='flex flex-col w-full '>
              <div className='flex w-full justify-between items-center'>
                <p className='uppercase font-medium text-xs text-gray-500'>Subject</p>
                <Badge variant='outline' >
                  <TrendingUp />
                  {formatNumber(note.subjectViews)}
                </Badge>
              </div>
              <h1 className='text-xl font-semibold Uppercase '>{note.subject}</h1>
              <p className='uppercase font-medium text-xs text-gray-500'>
                {note.course} &bull; {note.year}
              </p>
            </div>
            <div className='flex w-full gap-2 '>
              <Link href={note.url} >
                <Button className='flex gap-2 items-center bg-green-400 hover:bg-green-500 cursor-pointer' size='sm'>
                  <Eye size={20} />
                  View
                </Button>
              </Link>
              <Link href={note.url} >
                <Button className='flex gap-2 items-center bg-blue-400 hover:bg-blue-500 cursor-pointer' size='sm'>
                  <FileDown size={20} />
                  Download
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}