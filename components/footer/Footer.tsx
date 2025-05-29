import { Facebook, Instagram, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {


    const socailLinks = [
        { name: 'Facebook', href: 'www.facebook.com', icon: <Facebook /> },
        { name: 'X', href: 'www.facebook.com', icon: <X /> },
        { name: 'Instagram', href: 'www.facebook.com', icon: <Instagram /> },
        { name: 'WhatsApp', href: 'www.facebook.com', icon: <Instagram /> },
    ]


    return (
        <footer className='w-full bg-zinc-100 sm:px-4 px-14 py-4 flex items-center justify-center'>
            <div className='container w-full flex justify-between '>
                <div className="cta flex flex-col justify-baseline gap-4 w-1/3 ">
                    <Link href={'/'} className='text-3xl font-bold flex items-center text-black'>
                        DU<span className='text-blue-400'>Verse</span>
                    </Link>
                    <p className='text-zinc-400 leading-tight'>We understand that every student has unique needs and abilities, that’s why our curriculum is designed to adapt to your needs and help you grow!</p>
                    <div className="social-links flex flex-col gap-2 ">
                        <h1 className='text-2xl font-semibold '>Let's Connect:</h1>
                        <div className='flex items-center gap-2'>
                            {socailLinks.map(({ name, href, icon }) => (
                                <Link href={href} className=' w-"100px" bg-blue-400 rounded-full p-2 aspect-square ' title={name} >{icon}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='links'></div>
            </div>
        </footer>
    )
}

export default Footer