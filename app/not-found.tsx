import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return <div className='w-full h-[400px] flex items-center justify-center'>
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Image src={assets.alert404} alt='404 Error' className='w-36 ' />
      <h1 className='text-4xl font-bold'>Not found – 404!</h1>
      <Link href="/" className='font-medium text-lg hover:underline text-blue-400 animate-fade-in-scale '>Go back to Home</Link>
    </div>
  </div>
}