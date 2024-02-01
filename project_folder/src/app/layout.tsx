import type { Metadata } from 'next'
import { MuseoModerno, Poppins } from 'next/font/google'
import './globals.scss'
import  Main  from '@/components/Main/Main'

export const metadata: Metadata = {
  title: 'Infinita Productions',
  description: 'Generated by create next app',
}

const museo = MuseoModerno({subsets: ['latin'], display: 'swap'})
const poppins = Poppins({weight: '400', subsets: ['latin'], display: 'swap'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${museo.className}, ${poppins.className}`}>
      <body>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
