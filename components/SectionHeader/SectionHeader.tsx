import React from 'react'

interface ChildProps {
  title: string;
  subtitle: string;
  pt: number;
}

const SectionHeader = ({ title, subtitle, pt } : ChildProps) => {
    return (
        <div className={`w-full flex flex-col gap-4 items-center pt-${pt} pb-4 `}>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-lg font-medium text-black/70'>{subtitle}</p>
        </div>
    )
}

export default SectionHeader