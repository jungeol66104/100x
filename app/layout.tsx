
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '100x - AI 에이전트 기반 소프트웨어 개발 에이전시',
  description: '100x는 AI 에이전트 기반 소프트웨어 개발 에이전시입니다.',
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
        <Footer />
      </body>
    </html>
  )
}

