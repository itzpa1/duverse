import React from 'react'
import HeroSection from './HeroSection'
import Resources from './Resources'
import Testimonials from './Testimonials'
import { TapeSection } from '../Tape'

const HomePage = () => {
    return (
        <div className='w-full flex flex-col justify-center'>
            <HeroSection />
            <Resources />
            <Testimonials />
            <TapeSection />
        </div>
    )
}

export default HomePage