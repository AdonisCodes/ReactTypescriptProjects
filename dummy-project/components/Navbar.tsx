"use client"

import React, {useState} from 'react'
import Link from "next/link";
import About from "@/app/About";
import Resume from "@/app/Resume";

type NavItemProps = {
    activeItem: string,
    setActiveItem: Function,
    name: string
}

const NavItem = (props: NavItemProps) => {
    return (
        <div className={`${props.activeItem !== props.name ? 'w-[60px]' : 'w-0'} text-center`}>
            {props.activeItem !== props.name && <Link legacyBehavior href={'/'}>
            <a>
                <span className={'hover:text-green'} onClick={() => props.setActiveItem(props.name)}>{props.name}</span>
            </a>
        </Link>
            }
        </div>
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('About')

    return (
        <div className={'flex justify-between flex-col px-5 py-3 my-3'}>
            <nav className={'w-full flex justify-between'}>
                <span className={'font-bold text-green text-xl border-b-4 border-green'}>{activeItem}</span>

                <div className={'flex space-x-3 font-lg ml-auto'}>
                    <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'About'} />
                    <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Projects'} />
                    <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Resume'} />
                </div>
            </nav>

            {
                activeItem === 'About' && (
                    <About />
                )
            }
            {
                activeItem === 'Resume' && (
                    <Resume />
                )
            }
        </div>
    )
}
export default Navbar
