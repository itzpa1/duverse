'use client';
import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import SectionHeader from '@/components/SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, LucideShare2, TrendingUp } from 'lucide-react';
import ShareModal from '@/components/Share';
import { ytVdo } from '@/lib/dummy';
import { formatNumber } from '@/lib/formatNumber';

export type YouTubeItem = {
  id: number;
  subject: string;
  course: string;
  isPlaylist: boolean;
  type: 'video' | 'playlist';
  title: string;
  thumbnail: string;
  url: string;
  totalVideos: number;
  channelName: string;
  views: number;
  error: string;
};

export default function YouTubeCardList({ initialItems }: { initialItems: YouTubeItem[] }) {
  const [filteredItems, setFilteredItems] = useState<YouTubeItem[]>([]);
  console.log(filteredItems)
  // Set default items when component loads
  useEffect(() => {
    if (initialItems && Array.isArray(initialItems)) {
      setFilteredItems(initialItems);
    }
  }, [initialItems]);

  if (!filteredItems || !Array.isArray(filteredItems)) {
    return <div className="text-center text-gray-500">Loading resources...</div>;
  }

  return (
    <div className="w-full container mx-auto py-6 mt-20 flex flex-col items-center justify-center">
      <SectionHeader title='YouTube Lectures📺' subtitle='Selected lectures by Toppers' />
      <SearchBar
        allItems={initialItems}
        onSearch={setFilteredItems}
        placeholder="Search subject..."
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 container">
        {filteredItems.map((item) => (
          <Card key={item.id} className="bg-orange-200 shadow-md rounded-lg hover:scale-102 transition duration-300 p-4 relative flex flex-col">
            <div className='flex gap-2 items-center absolute right-3 top-3 z-20'>
              <Badge variant='outline' className='bg-white' >
                <TrendingUp /> {formatNumber(item.views)}
              </Badge>
              {item.type == 'playlist' && (
                <Badge className='bg-blue-50 ' variant='outline'>
                  <Link href={'#playlist'}>Playlist</Link>
                </Badge>
              )}
            </div>
            <div className='w-full aspect-video rounded-lg relative overflow-hidden'>
              <Image src={item.thumbnail} alt={item.title} className='w-full object-cover' fill />
              <div className='flex flex-col w-full absolute bottom-0 p-4 bg-linear-0 from-40% from-white z-40 '>
                <h1 className='text-lg font-medium line-clamp-1'>{item.title}</h1>
                <p className='uppercase font-medium text-xs text-gray-500 line-clamp-1'>
                  {item.subject} | {item.course}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4'>

              <Link href={'/'}>
                <Button className=' bg-red-400 hover:bg-red-500 '><Eye /> Watch</Button>
              </Link>
              <ShareModal
                url={item.url}
                title="Never Gonna Give You Up - Rick Astley"
              />
              {/* <Link href={''}>
                <Button className=' bg-blue-400 hover:bg-blue-500'>
                  <LucideShare2 /> Share
                </Button>
              </Link> */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
