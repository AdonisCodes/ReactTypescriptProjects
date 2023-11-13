import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StickyBar from "@/components/StickyBar";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medium 2.0 clone',
  description: 'A medium clone...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={'flex flex-col'}>
        <StickyBar />

        <div className={'max-w-7xl mx-auto'}>
        <div className={'flex justify-between items-center bg-yellow-400 border-black py-10 lg:py-0'}>
            <div className={'px-10 space-y-5'}>
                <h1 className={'text-8xl max-w-xl font-serif'}><span className={'underline decoration-black'}>Medium</span> is a place to write, read and connect.</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2>It's easy and free to post your thinking on any topic and connect with millions of readers</h2>
            </div>
            <img src={"https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"} width={500} height={500} alt={"The logo"} className={'hidden md:inline-flex h-32 lg:h-32'}/>
        </div>
        </div>
        {children}
      </body>
    </html>
  )
}
