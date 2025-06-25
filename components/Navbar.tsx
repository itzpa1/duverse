'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Heart, Menu, X } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(true)
    const pathname = usePathname()


    // NavBar Backdrop Blur on Scroll
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // Navmenu items
    const navItems = [
        { name: 'Home', href: '/' },
        {
            name: 'Study Resources',
            href: '/resources',
            subItems: [
                { name: 'PYQs', href: '/pyqs' },
                { name: 'Notes', href: '/notes' },
                { name: 'YouTube Lectures', href: '/youtube-resources' },
                { name: 'Syllabus', href: '/syllabus' },
                { name: 'Books', href: '/books' },
            ]
        },
        { name: 'Papers', href: '/papers' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ]

    return (
        <header className={`fixed top-0 z-50 w-full bg-white md:px-14 px-4 mx-auto items-center justify-items-center ${isScrolled
            ? 'bg-white/50 dark:bg-black/80 backdrop-blur-sm '
            : 'bg-transparent'
            }`}>
            <div className="container flex h-16 items-center justify-between w-full relative">
                <Link href={'/'} className='text-3xl font-bold flex items-center text-black'>
                    DU<span className='text-blue-400'>Verse</span>

                </Link>
                {menuOpen ?
                    <Menu className='z-30 md:hidden' onClick={() => setMenuOpen(false)} size={40} />
                    : <X className='z-30 md:hidden' onClick={() => setMenuOpen(true)} size={40} />
                }
                <div className={`${menuOpen
                    ? 'hidden'
                    : 'flex'
                    } md:flex flex-col md:flex-row pt-12 px-4 md:p-0 absolute md:relative top-0 -right-4 gap-4 md:gap-6 text-lg font-medium text-black bg-gradient-to-t from-blue-100 to-white md:from-transparent md:to-transparent h-screen w-2/3 md:h-auto md:w-auto items-center`}>
                    {
                        navItems.map(({ name, href, subItems }) => (
                            <Link href={href} className={cn(pathname == href && 'text-blue-400 duration-400')} key={name}>
                                {name == 'Study Resources' ?
                                    (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className='text-lg'>{name}<ChevronDown /> </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-auto">
                                                {subItems?.map(({ name, href }) => (
                                                    <Link href={`/resources${href}`} key={name}>
                                                        <DropdownMenuItem>
                                                            {name}
                                                        </DropdownMenuItem>
                                                    </Link>
                                                ))}

                                            </DropdownMenuContent>
                                        </DropdownMenu>)
                                    :
                                    <p className='py-1 px-2 rounded-sm animate-ping-large hover:text-blue-400 hover:bg-blue-50   '>
                                        {name}
                                    </p>
                                }
                            </Link>
                        ))
                    }
                    <h1 className='absolute bottom-8 right-4 w-full font-normal md:hidden flex flex-col text-sm items-center gap-[3px]'>
                        Made with <Heart strokeWidth={0} size={16} fill='red' /> by
                        {/* <Link href='https://linkedin.com/in/itzpa1' className='hover:text-blue-400 text-blue-600'>Pawan Kumar</Link> */}
                        <Link href='https://arsdcollege.ac.in/' className='hover:text-blue-400 text-blue-600'>ARSDians</Link>
                    </h1>
                </div>
            </div>
        </header>
    )
}