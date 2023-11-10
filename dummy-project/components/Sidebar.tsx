import React from 'react'
import {AiFillGithub, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from "react-icons/gi";
import Image from "next/image";

const Sidebar = () => {
    return (
        <div className={'flex flex-col items-center p-4'}>
            <Image src='/profile_official.png' alt={'user avatar'} className={'w-32 h-32 mx-auto rounded-full'} width={100} height={100}/>
            <h3 className={'my-4 text-3xl font-medium tracking-wider'}>
                <span>Simon</span>
                Ferns
            </h3>
            <p className={'px-2 py-1 my-3 bg-gray-200 rounded-full'}>( I develop anything )</p>
            <p className={'flex items-center justify-center px-2 py-1 bg-gray-200 rounded-md'}><GiTie className={'w-6 h-6'} />Download Resume</p>

            <div className={'flex justify-around w-9/12 my-5 text-green-500 md:w-full mx-auto'}>
                <a href={''}>
                    <AiFillYoutube className={"w-8 h-8 cursor-pointer"}/>
                </a>
                <a href={''}>
                    <AiFillGithub className={"w-8 h-8 cursor-pointer"}/>
                </a>
                <a href={''}>
                    <AiFillTwitterCircle className={"w-8 h-8 cursor-pointer"}/>
                </a>
            </div>

            {/*We want all of these to be centered horizontally*/}
            <div className={'bg-gray-200 p-4 flex flex-col items-center mb-4'}>
                <div className={'flex items-center justify-center space-x-2'}>
                    <GoLocation />
                    <span>Sasolburg, South Africa</span>
                </div>
                <p className={'my-2'}>business@simonferns.com</p>
                <p className={'my-2'}>+27 81 270 5873</p>
            </div>
            <button className={'bg-gradient-to-r from-green-400 to-blue-400 w-full py-2 my-2 text-white rounded-md'}>Email Me</button>
            <button className={'bg-gradient-to-r from-green-400 to-blue-400 w-full py-2 my-2 text-white rounded-md'}>Toggle Theme</button>
        </div>
    )
}
export default Sidebar
