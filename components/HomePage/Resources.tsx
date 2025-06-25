import React from 'react'
import SectionHeader from '../SectionHeader'
import { assets } from '@/assets/assets'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Resources = () => {


    const resourcesCard_Data = [
        {
            name: 'Notes',
            subtitle: 'Easy-to-understand notes made by toppers that cover all important topics for exams, with diagrams and simple explanations',
            href: '/resources/notes',
            img: assets.notes
        },
        {
            name: 'Reference Books',
            subtitle: 'Important book chapters summarized page-by-page with key points highlighted to save your time and help you study smarter',
            href: '/resources/books',
            img: assets.referenceBook
        },
        {
            name: 'Syllabus',
            subtitle: 'Ready-made assignments with proper formats and solutions that you can refer to for writing your own quality answers',
            href: '/resources/syllabus',
            img: assets.assignment
        },
        {
            name: 'YouTube Sources',
            subtitle: 'Best free video lectures selected from trusted channels that explain difficult concepts in simple, fun ways',
            href: '/resources/youtube-resources',
            img: assets.youtube
        }
    ]


    return (
        <div className='w-full pt-12 flex flex-col items-center'>
            <SectionHeader title='Study Resources📑' subtitle='A diverse array of learning materials to enhance your educational journey.' />
            <div className='cards grid grid-cols-2 md:grid-cols-4 justify-between px-4 md:p-0 md:gap-8 gap-2 items-center mt-12'>
                {
                    resourcesCard_Data.map(({ name, subtitle, href, img }) => (
                        <Link className='flex flex-col h-[240px] md:h-[280px] w-[180px] md:w-[240px] rounded-xl 
        bg-gradient-to-b bg-blue-400/20 to-white
        hover:bg-blue-400/40 shadow-sm p-4 group relative' href={href} key={name}>
                            <div className='flex w-full justify-between relative '>
                                <h1 className='text-black md:text-xl text-2xl font-semibold leading-5 md:leading-normal'>{name}</h1>
                                <ArrowRight className='text-gray-700 opacity-0 -translate-x-10 duration-400 group-hover:opacity-100 group-hover:translate-x-0 ' />
                            </div>
                            <p className='md:w-[90%] w-full leading-5 md:leading-normal md:text-sm text-base text-gray-700 '>{subtitle}</p>
                            <div className='w-full h-full flex items-center justify-center mt-4 absolute bottom-0 right-0 md:relative'>
                                <Image src={img} alt={name} className='md:w-1/3 w-[40px] opacity-80 group-hover:w-1/2 duration-400 md:relative absolute group-hover:opacity-20 md:group-hover:opacity-80 bottom-2 right-2' />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Resources