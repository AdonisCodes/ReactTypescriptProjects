"use client"

import React, {useState} from 'react'
import Link from "next/link";

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
        <div className={'flex justify-between px-5 py-3 my-3'}>
            <span className={'font-bold text-green text-xl border-b-4 border-green'}>{activeItem}</span>

            <div className={'flex space-x-3 text-red-400 font-lg ml-auto'}>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'About'} />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Projects'} />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Resume'} />
            </div>
        </div>
    )
}
export default Navbar
