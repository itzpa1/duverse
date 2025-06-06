import React, { Fragment } from 'react'
import SectionHeader from '../SectionHeader'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { Card } from '../ui/card';

const testimonials = [
    {
        name: "John Doe",
        role: "B.Com Student",
        content: "These PYQs helped me score 90% in my finals!",
        avatar: assets.avatar_1
    },
    {
        name: "Jane Smith",
        role: "B.A. English",
        content: "Best notes I've found for Delhi University syllabus.",
        avatar: assets.avatar_2
    },
    {
        name: "Arjun Patel",
        role: "B.Sc Physics",
        content: "Digital books saved me so much money. Thank you!",
        avatar: assets.avatar_3
    },
    {
        name: "Priya Sharma",
        role: "M.A. History",
        content: "Solved papers gave me the confidence to ace my exams.",
        avatar: assets.avatar_4
    },
    {
        name: "Rahul Verma",
        role: "B.A. Program",
        content: "The study materials are perfectly organized by semester.",
        avatar: assets.avatar_5
    },
];

const Testimonials = () => {

    return (
        <div className='w-full pt-12 md:pt-24 lg:pt-32 flex flex-col justify-center'>
            <SectionHeader title='What Students say About : DUverse 🫶' subtitle='From CUET preparation to campus life, hear how DUverse made a difference.' />
            <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                    {[...new Array(2)].fill(0).map((_, idx) => (
                        <Fragment key={idx}>
                            {testimonials.map(({ name, avatar, role, content }) => (
                                <Card key={name} className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300 bg-gradient-to-tl to-blue-50 from-white">
                                    <div className="flex gap-4 items-center">
                                        <div className="size-14 bg-blue-400 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <Image src={avatar} alt={name} className="max-h-full" />
                                        </div>
                                        <div className="">
                                            <div className="font-semibold">{name}</div>
                                            <div className="text-sm text-black/40">{role}</div>
                                        </div>
                                    </div>
                                    <p className="mt-4 md:mt-6 text-sm md:text-base ">{content}</p>
                                </Card>
                            ))}
                        </Fragment>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Testimonials