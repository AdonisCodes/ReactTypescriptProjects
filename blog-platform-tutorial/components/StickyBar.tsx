import React from 'react'
import Link from 'next/link'

const StickyBar = () => {
    return (
        <header className={'flex w-[100vw]'}>
            <div className={'flex justify-between max-w-7xl mx-auto'}>
            <div className={'flex items-center space-x-5 md:mr-40 mr-20'}>
                <div>
                    <Link href="/" >
                        <img src={'https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png'} className={'w-44 object-contain cursor-pointer'} alt={"The logo"}/>
                    </Link>
                </div>
                <div className={'hidden md:inline-flex items-center space-x-5'}>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className={'text-white bg-green-600 px-4 py-1 rounded-full'}>Follow</h3>
                </div>
            </div>

            <div className={'flex items-center space-x-5 text-green-600'}>
                <h3>Sign In</h3>
                <h3 className={'border px-4 py-1 rounded-full border-green-600'}>Get Started</h3>
            </div>
            </div>
        </header>
    )
}
export default StickyBar
