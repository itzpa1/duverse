'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', href: '/' },
        {
            name: 'Study Resources',
            href: '/resources',
            subItems: [
                { name: 'PYQs', href: '/pyqs' },
                { name: 'Notes', href: '/notes' },
                { name: 'Books', href: '/books' }
            ]
        },
        { name: 'Papers', href: '/papers' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-white px-14 sm:px-4 mx-auto items-center justify-items-center ">
            <div className="container flex h-16 items-center justify-between w-full">
                <Link href={'/'} className='text-3xl font-bold flex items-center text-black'>
                    DU<span className='text-blue-400'>Verse</span>

                </Link>
                <div className='flex gap-6 items-center text-lg font-medium text-black'>
                    {
                        navItems.map(({ name, href, subItems }) => (
                            <Link href={href} className={cn(pathname == href && 'text-blue-400 duration-400 ', "hover:text-blue-400 ")} key={name}>
                                {name == 'Study Resources' ?
                                    (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className='text-lg'>{name}<ChevronDown /> </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-auto">
                                                {subItems?.map(({ name, href }) => (
                                                    <DropdownMenuItem>
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