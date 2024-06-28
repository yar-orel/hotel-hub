import './sass/globals.scss'
import { ReduxProvider } from './providers/provider'
import type { Metadata } from 'next'
import { Header } from './components/Header'
import React from 'react'


export const metadata: Metadata = {
  title: 'HotelHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
      
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
      </body>
    </html>
  )
}
