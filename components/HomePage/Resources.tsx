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
            href: '/notes',
            img: assets.notes
        },
        {
            name: 'Reference Books',
            subtitle: 'Important book chapters summarized page-by-page with key points highlighted to save your time and help you study smarter',
            href: '/books',
            img: assets.referenceBook
        },
        {
            name: 'Assignments',
            subtitle: 'Ready-made assignments with proper formats and solutions that you can refer to for writing your own quality answers',
            href: '/assignments',
            img: assets.assignment
        },
        {
            name: 'YouTube Sources',
            subtitle: 'Best free video lectures selected from trusted channels that explain difficult concepts in simple, fun ways',
            href: '/videos',
            img: assets.youtube
        }
    ]


    return (
        <div className='w-full pt-12 flex flex-col items-center'>
            <SectionHeader title='Study Resources📑' subtitle='A diverse array of learning materials to enhance your educational journey.' />
            <div className='cards flex justify-between gap-8 items-center'>
                {
                    resourcesCard_Data.map(({ name, subtitle, href, img }) => (
                        <Link className='flex flex-col h-[280px] w-[240px] rounded-xl 
        bg-gradient-to-b bg-blue-400/20 to-white
        hover:bg-blue-400/40 shadow-sm p-4 group' href={href} key={name}>
                            <div className='flex w-full justify-between  '>
                                <h1 className='text-black text-xl font-semibold'>{name}</h1>
                                <ArrowRight className='text-gray-700 opacity-0 -translate-x-10 duration-400 group-hover:opacity-100 group-hover:translate-x-0 ' />
                            </div>
                            <p className='wrap w-[90%] text-sm  text-zinc-700'>{subtitle}</p>
                            <div className='w-full h-full flex items-center justify-center mt-4'>
                                <Image src={img} alt={name} className='w-1/3 opacity-80 group-hover:w-1/2 duration-400 ' />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Resources