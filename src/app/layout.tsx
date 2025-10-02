import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aries Dwi Prasetiyo - Senior iOS Engineer',
  description: 'Senior iOS Engineer specializing in Swift, Clean Architecture, and high-performance iOS applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}