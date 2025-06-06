"use client"

import { assets } from '@/assets/assets';
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const cardData = [
    { img: assets.notes, name: "Solved PYQs", minides: "Previous Solved Pyqs" },
    { img: assets.pyq, name: "NEP based PYQs", minides: "Updated PYQs" },
    { img: assets.books, name: "Digital Books", minides: "Digital format of Books" },
    { img: assets.book_sell, name: "Sell/Purchase Readings", minides: "Used Readings" },
]

const HeroSection = () => {
    return (
        <section className="w-full pt-12 py-20 md:pt-24 lg:pt-32 flex justify-center bg-gradient-to-b from-blue-400/40 from-70% to-white to-30%">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="space-y-4">
                        <h1 className="w-full text-4xl flex justify-start gap-2 font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Delhi University&apos;s
                            <TypeAnimation
                                className='text-blue-400 '
                                sequence={[
                                    'PYQs',
                                    1000,
                                    'Readings',
                                    1000,
                                    'Gossips',
                                    1000,
                                    'Events',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>


                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Access previous year question papers, solved answers, digital books,
                            and study materials for all courses in one place.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-md space-y-2">
                        <div className="relative bg-white rounded-lg group-hover:border-black/20 border-2 ">
                            <Input
                                className="h-12 w-full outline-none pl-4 pr-12 shadow-sm group border-none"
                                placeholder="Search for courses, subjects, or materials..."
                                type="search"
                            />
                            <Button className="absolute bg-blue-400 hover:bg-blue-400/40 right-2 top-1/2 -translate-y-1/2 transform" size="lg">
                                Search
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Try &quot;GE PYQs&quot; or &quot;B.Com Notes&quot;
                        </p>
                    </div>

                    {/* Quick Links */}
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
                </div>
            </div>
        </section>
    )
}

export default HeroSection