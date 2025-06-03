import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ResourcesCard from './ResourcesCard'
import { assets } from '@/assets/assets'

const Resources = () => {


    const resourcesCard_Data = [
        { name: 'Notes', subtitle: 'study materials that simplify complex ideas into easily understandable language', href: '/', img: assets.notes },
        { name: 'Reference Books', subtitle: 'study materials that simplify complex ideas into easily understandable language', href: '/', img: assets.referenceBook },
        { name: 'Assignments', subtitle: 'study materials that simplify complex ideas into easily understandable language', href: '/', img: assets.assignment },
        { name: 'YouTube Sources', subtitle: 'study materials that simplify complex ideas into easily understandable language', href: '/', img: assets.youtube },
    ]


    return (
        <div className='w-full flex flex-col items-center'>
            <SectionHeader title='Study Resources📑' subtitle='A diverse array of learning materials to enhance your educational journey.' pt={0} />
            <div className='cards flex justify-between gap-8 items-center'>
                {
                    resourcesCard_Data.map(({ name, subtitle, href, img }) => (
                        <ResourcesCard name={name} subtitle={subtitle} href={href} image={img} key={name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Resources