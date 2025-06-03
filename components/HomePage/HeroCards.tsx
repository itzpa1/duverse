import React from 'react'

import { assets } from '@/assets/assets'
import Image from 'next/image'

const cardData = [
    { img: assets.notes, name: "Solved PYQs", minides: "Previous Solved Pyqs" },
    { img: assets.pyq, name: "NEP based PYQs", minides: "Updated PYQs" },
    { img: assets.books, name: "Digital Books", minides: "Digital format of Books" },
    { img: assets.book_sell, name: "Sell/Purchase Readings", minides: "Used Readings" },
]

const HeroCards = () => {
    return (
        <div className='w-[80%] h-[180px] px-4 py-8 flex flex-wrap justify-evenly items-center bg-white transition-shadow shadow-md rounded-lg'>
            {cardData.map(({ img, name, minides }) => (
                <div className='flex flex-col gap-4 items-center flex-[1_1_180px] max-w-[180px] not-last:border-r-2 border-blue-400/40  group' key={name}>
                    <Image className='w-[60px] h-auto group-hover:scale-120 duration-400 ' src={img} alt={name} />
                    <div className='flex flex-col items-center '>
                        <h1 className='text-base font-semibold'>{name}</h1>
                        <p className='text-sm'>{minides}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeroCards