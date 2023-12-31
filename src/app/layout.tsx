import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ProgressBar from './components/LoadingBar';

import { Providers } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codeify',
  description: 'Empowering computer science education for the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
