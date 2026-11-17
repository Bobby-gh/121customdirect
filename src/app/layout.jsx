import { Inter, Source_Serif_4 } from 'next/font/google'
import SiteShell from '../components/SiteShell'
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
  title: '121 Customs Direct | Customs Declaration Software & Support',
  description:
    '121 Customs Direct supports declarants moving goods into and out of Great Britain — with declaration software and a customs team to prepare, check and submit declarations to HMRC’s Customs Declaration Service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
