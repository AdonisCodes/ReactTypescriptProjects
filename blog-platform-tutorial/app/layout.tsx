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
        {children}
      </body>
    </html>
  )
}
