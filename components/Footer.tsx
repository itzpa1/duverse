import { Facebook, Heart, Instagram, Link2, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { DropdownMenuSeparator } from './ui/dropdown-menu'

const Footer = () => {

    const socailLinks = [
        { name: 'Facebook', href: 'www.facebook.com', icon: <Facebook /> },
        { name: 'YouTube', href: 'www.facebook.com', icon: <Youtube /> },
        { name: 'Instagram', href: 'www.facebook.com', icon: <Instagram /> },
        { name: 'WhatsApp', href: 'www.facebook.com', icon: <Instagram /> },
    ]

    const supportLinks = [
        {
            name: 'Quick Links',
            subLinks: [
                { name: 'Home', href: '/' },
                { name: 'Study Resources', href: '/resources' },
                { name: 'PYQs', href: '/resources/pyqs' },
                { name: 'Notes', href: '/resources/notes' },
                { name: 'Books', href: '/resources/books' },
                { name: 'Papers', href: '/papers' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' },
            ]
        },
        {
            name: 'Tools',
            subLinks: [
                { name: 'File Manager', href: '/tools/file-manager' },
                { name: 'PDF Tools', href: '/tools/pdf-tools' },
                { name: 'Age Calculator', href: '/tools/age-calculator' },
            ]
        },
        {
            name: 'Support',
            subLinks: [
                { name: 'Contact', href: '/contact' },
                { name: 'Feedback', href: '/feedback' },
            ]
        },
        {
            name: 'Contact',
            subLinks: [
                { name: 'duverseeducational@gmail.com', href: 'mailto:duverseeducational@gmail.com' },
            ]
        }
    ]


    return (
        <footer className='w-full bottom-0 bg-gradient-to-b to-blue-400/40 from-white px-4 md:px-14 py-4 flex flex-col items-center justify-center'>
            <div className='container w-full flex flex-col md:flex-row justify-center md:justify-between gap-4 '>
                <div className="w-full flex flex-col items-center md:items-baseline gap-4 md:w-1/3 ">
                    <Link href={'/'} className='text-3xl font-bold flex items-center text-black'>
                        DU<span className='text-blue-400'>Verse</span>
                    </Link>
                    <p className='text-zinc-400 leading-tight text-center'>Your comprehensive guide to Delhi University life, resources, and community.</p>
                    <div className="social-links flex flex-col items-center md:items-baseline gap-2 mt-4 ">
                        <p className='text-2xl font-bold'>Let&apos;s Connect🤝</p>
                        <div className='flex items-center gap-2'>
                            {socailLinks.map(({ name, href, icon }) => (
                                <Link href={href} className='bg-blue-400 text-white hover:bg-blue-500 duration-400 rounded-full p-2 aspect-square ' title={name} key={name} >{icon}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='links md:w-2/3 w-full md:flex grid grid-cols-2 md:justify-evenly justify-items-center'>
                    {supportLinks.map(({ name, subLinks }) => (
                        <div className='flex flex-col w-full md:w-auto px-2 md:p-0' key={name}>
                            <h1 className='text-xl font-medium'>{name}</h1>
                            <div className='flex flex-col md:mt-4 mt-2 items-baseline'>
                                {subLinks.map(({ name, href }) => (
                                    <Link href={href} className='w-full gap-2 text-lg flex items-center group break-all md:break-normal ' title={name} key={name}>
                                        <Link2 size={15} className='text-blue-400 rotate-40 duration-100 group-hover:rotate-0 group-hover:text-blue-400/40 line-clamp-1' />
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full px-14 flex flex-col mt-4' >
                <DropdownMenuSeparator className='bg-black/20' />
                <div className='flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center my-4'>
                    <h1>
                        &copy;
                        2025 All rights reserved.
                    </h1>
                    <h1 className='flex items-center gap-[3px]'>
                        Made with <Heart strokeWidth={0} size={16} fill='red' /> by
                        {/* <Link href='https://linkedin.com/in/itzpa1' className='hover:text-blue-400 text-blue-600'>Pawan Kumar</Link> */}
                        <Link href='https://arsdcollege.ac.in/' className='hover:text-blue-400 text-blue-600'>ARSDians</Link>
                    </h1>
                </div>

            </div>
        </footer>
    )
}

export default Footer