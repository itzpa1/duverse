import { Loader2 } from 'lucide-react'
import React from 'react'

interface LoaderProps {
    page: string;
}

const Loader = ({ page }: LoaderProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Loader2
                size={60}
                strokeWidth={2}
                className="animate-spin text-blue-400 mb-3"
            />
            <h1 className="text-lg font-bold uppercase mb-1.5">
                {page} is Loading...
            </h1>
            <p className="text-xs text-gray-700 font-medium text-center">
                If taking time, please reload the page
            </p>
        </div>
    )
}

export default Loader;