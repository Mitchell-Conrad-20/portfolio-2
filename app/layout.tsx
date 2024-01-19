import './globals.css'
import type { Metadata } from 'next'
import { Inter, Overpass, Raleway } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const overpass = Overpass({ subsets: ['latin']})
const raleway = Raleway({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Mitchell Conrad',
  description: 'Computer engineer with skills in embedded systems, computer vision, web development, and control systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>" 
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}