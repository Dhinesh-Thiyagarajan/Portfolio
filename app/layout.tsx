import './globals.css'
import './fonts.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Dhinesh Thiyagarajan | Portfolio',
  description: 'Personal portfolio of Dhinesh Thiyagarajan - Computer Science Student specializing in AI/ML, Databases, and Full-Stack Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
