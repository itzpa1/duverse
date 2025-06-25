import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = ({ pyq }) => {
    return (
        <div className='flex flex-col items-center'>
            <Loader2 size={60} strokeWidth={2} className='animate-spin text-blue-400' />
            <h1 className='text-lg font-bold uppercase'>{pyq} is Loading...</h1>
            <p className='text-xs text-gray-700 font-semibold '>If taking time please reload the page</p>
        </div>
    )
}

export default Loader