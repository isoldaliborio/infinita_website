import type { Metadata } from 'next'

import './globals.scss'
import "./globals.css";
import Main from '@/components/Main/Main'

export const metadata: Metadata = {
  title: 'Infinita Productions',
  description: 'Infinita Productions is a production company based in London, UK and Salvador, Brazil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
