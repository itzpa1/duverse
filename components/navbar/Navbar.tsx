'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Navbar() {
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
                { name: 'Books', href: '/books' },
                { name: 'Assignments', href: '/assignments' },
                { name: 'YouTube Sources', href: '/youtube-resources' },
            ]
        },
        { name: 'Papers', href: '/papers' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ]

    return (
        <header className={`fixed top-0 z-50 w-full bg-white px-14 sm:px-4 mx-auto items-center justify-items-center ${isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm '
            : 'bg-transparent'
            }`}>
            <div className="container flex h-16 items-center justify-between w-full">
                <Link href={'/'} className='text-3xl font-bold flex items-center text-black'>
                    DU<span className='text-blue-400'>Verse</span>

                </Link>
                <div className='flex gap-6 items-center text-lg font-medium text-black'>
                    {
                        navItems.map(({ name, href, subItems }) => (
                            <Link href={href} className={cn(pathname == href && 'text-blue-400 duration-400 ', "hover:text-blue-400")} key={name}>
                                {name == 'Study Resources' ?
                                    (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className='text-lg'>{name}<ChevronDown /> </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-auto">
                                                {subItems?.map(({ name, href }) => (
                                                    <DropdownMenuItem key={name}>
                                                        <Link href={`/resources${href}`}>{name}</Link>
                                                    </DropdownMenuItem>
                                                ))}

                                            </DropdownMenuContent>
                                        </DropdownMenu>)
                                    :
                                    (name)
                                }
                            </Link>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}