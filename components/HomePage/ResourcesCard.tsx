import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface childProps {
    name: string,
    subtitle: string,
    href: string,
    image: any,
}

const ResourcesCard = ({ name, subtitle, href, image }: childProps) => {
    return (
        <Link className='flex flex-col h-[280px] w-[240px] rounded-xl 
        bg-gradient-to-b bg-blue-400/20 to-white
        hover:bg-blue-400/40 shadow-sm p-4 group' href={href}>
            <div className='flex w-full justify-between  '>
                <h1 className='text-black text-xl font-medium'>{name}</h1>
                <ArrowRight className='text-gray-700 opacity-0 -translate-x-10 duration-400 group-hover:opacity-100 group-hover:translate-x-0 ' />
            </div>
            <p className='wrap w-[90%] text-sm text-zinc-700'>{subtitle}</p>
            <div className='w-full h-full flex items-center justify-center mt-4'>
                <Image src={image} alt={name} className='w-1/3 opacity-80 group-hover:w-1/2 duration-400 '/>
            </div>
        </Link>
    )
}

export default ResourcesCard