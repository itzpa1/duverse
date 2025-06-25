import React from 'react'

interface ChildProps {
    title: string;
    subtitle: string;
}

const SectionHeader = ({ title, subtitle }: ChildProps) => {
    return (
        <div className={`w-full flex flex-col gap-4 items-center px-4 md:px-0 md:pb-4 text-center `}>
            {/* <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{title}</p> */}
            <h1 className='md:text-4xl text-3xl font-bold'>{title}</h1>
            <p className='text-lg font-medium text-black/70'>{subtitle}</p>
        </div>
    )
}

export default SectionHeader