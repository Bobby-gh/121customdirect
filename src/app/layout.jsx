import { Inter, Source_Serif_4 } from 'next/font/google'
import '../style.css'
import '../redesign.css'

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const headingFont = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const metadata = {
  title: '121 Customs Direct',
  description:
    '121 Customs Direct is a UK customs company specialising in HMRC declarations and consultancy, with CustomsDirect — our app for UK customs declarations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  )
}
