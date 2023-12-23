import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthenticationProvider } from '@/context/AuthenticationContext'
import {GetDataApiProvider} from '@/context/DataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Lovera - Challenge',
  description: 'Challenage Front End Eldar Srl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthenticationProvider>
        <GetDataApiProvider>
        <body className={inter.className}>{children}</body>
        </GetDataApiProvider>
      </AuthenticationProvider>
    </html>
  )
}
