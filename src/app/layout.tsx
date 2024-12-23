import type { Metadata } from 'next'

import Header from '../components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: '강낭코딩',
  description: '강낭콩의 개발 일상',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
