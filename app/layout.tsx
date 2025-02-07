
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
export const metadata: Metadata = {
  title: 'My App',
  description: 'Created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

