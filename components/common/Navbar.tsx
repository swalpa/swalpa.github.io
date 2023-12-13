"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useRef, useState } from 'react';
import { LucideMenu, LucideX } from 'lucide-react';

type Link = {
    name: string,
    href: string

}
const links: Link[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Updates',
        href: '/updates'
    },
    {
        name: 'Teaching',
        href: '/teaching'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Achievements',
        href: '/achievements'
    },
    {
        name: 'Internship',
        href: '/internship'
    },
    {
        name: 'Publications',
        href: '/publications'
    },
    //!Inportant design update has to be done
    // {
    //     name: 'Team', 
    //     href: '/team'
    // },
]

const Navbar = () => {

    const path: string = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <main className='w-full h-12 bg-white drop-shadow-md text-black flex justify-around items-center sticky top-0 z-10'>
            <Link href={'https://swalpa.github.io'} className='font-semibold text-2xl'>SWALPA KUMAR ROY</Link>
            <div className='flex flex-col-reverse'>
                <div className={`${open ? "flex flex-col left-0 top-12" : "hidden lg:flex"} bg-white w-full items-center gap-2 lg:gap-4 absolute lg:relative p-2`}>
                    {
                        links.map((link: Link, index: number) => (
                            <Link onClick={()=> setOpen(false)} key={index} href={link.href} className={`${path === link.href || (path.includes('/teaching') && link.name === "Teaching") ? "font-bold" : ""}`}>
                                <>
                                    <p>{link.name}</p>
                                    <div className={`${path === link.href || (path.includes('/teaching') && link.name === "Teaching") ? "bg-black h-[0.15rem] mt-[0.15rem]" : ""}`}></div>
                                </>
                            </Link>
                        ))
                    }
                </div>
                <div>
                    {
                        open ? <LucideX onClick={() => setOpen(false)} className='text-4xl lg:hidden' /> : <LucideMenu onClick={() => setOpen(true)} className='text-4xl lg:hidden' />
                    }
                </div>
            </div>
        </main>
    )
}

export default Navbar