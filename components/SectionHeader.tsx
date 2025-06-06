import React from 'react'

interface ChildProps {
    title: string;
    subtitle: string;
}

const SectionHeader = ({ title, subtitle }: ChildProps) => {
    return (
        <div className={`w-full flex flex-col gap-4 items-center pb-4 `}>
            {/* <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{title}</p> */}
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-lg font-medium text-black/70'>{subtitle}</p>
        </div>
    )
}

export default SectionHeader