import './globals.css'
import type { Metadata } from 'next'
import { Inter, Overpass, Raleway } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const overpass = Overpass({ subsets: ['latin']})
const raleway = Raleway({ subsets: ['latin']})

const openGraphImage = { images: ['./opengraph-image.png'] }

export const metadata: Metadata = {
  title: 'Mitchell Conrad',
  description: 'Computer engineer with skills in embedded systems, computer vision, web development, and control systems.',
  openGraph:{
    ...openGraphImage,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Icons */}
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
        {/* OpenGraph */}
        {/* <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" /> */}
        {/* Twitter Image */}
        {/* <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" /> */}
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}