import '../style.css'
import '../redesign.css'

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
      <body>{children}</body>
    </html>
  )
}
