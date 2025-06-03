import React from 'react'
import HeroSection from './HeroSection'
import SectionHeader from '../SectionHeader/SectionHeader'
import Resources from './Resources'

const HomePage = () => {
    return (
        <div className='w-full flex flex-col justify-center'>
            <HeroSection />
            <Resources />
        </div>
    )
}

export default HomePage