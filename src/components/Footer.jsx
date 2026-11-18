import Link from 'next/link'

const APP_URL = 'https://customs-uk.vercel.app/'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="cd-logo-mark-footer" x1="4" y1="3" x2="36" y2="37" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#04B1C4" />
                  <stop offset="0.55" stopColor="#0a7ea3" />
                  <stop offset="1" stopColor="#08376b" />
                </linearGradient>
              </defs>
              <path d="M20 2.5 35 11.2v17.6L20 37.5 5 28.8V11.2z" fill="url(#cd-logo-mark-footer)" />
              <path d="M12 16h13.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
              <path d="m22.3 12.8 3.2 3.2-3.2 3.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 24H14.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
              <path d="m17.7 20.8-3.2 3.2 3.2 3.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="logo-text">121 Customs Direct</span>
          </Link>
          <p>Declaration software and customs support for goods moving in and out of Great Britain.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h4>Start here</h4>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Log in to the app
            </a>
            <Link href="/solutions">Our services</Link>
            <Link href="/solutions/customsdirect">Declaration app</Link>
            <Link href="/contact">Ask a question</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 121 Customs Direct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
