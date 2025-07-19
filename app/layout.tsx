import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gm-works',
  description: 'Created with Gianmarco Marino',
  generator: 'gm-works studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
