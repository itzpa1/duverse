import Link from 'next/link'

export default function NotFound() {
  return <div className='w-full h-[400px] flex items-center justify-center border-2'>
    <div className='flex flex-col gap-4 items-center justify-center border-2'>
      <h1 className='text-4xl font-bold'>Not found – 404!</h1>
      <Link href="/" className='font-medium text-lg hover:underline text-blue-400'>Go back to Home</Link>
    </div>
  </div>
}