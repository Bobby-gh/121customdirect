import Link from 'next/link'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link href="/121customsdirect" className="logo">
            <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#ffffff" />
              <path d="M12 28V12L20 8L28 12V28" stroke="#102a43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 16V24" stroke="#102a43" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="20" cy="20" r="2" fill="#102a43" />
            </svg>
            <span className="logo-text">121 Customs Direct</span>
          </Link>
          <p>Clearer customs work, with people at the centre of it.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <Link href="/121customsdirect">Home</Link>
            <Link href="/121customsdirect/about">About Us</Link>
            <Link href="/121customsdirect/solutions">Solutions</Link>
            <Link href="/121customsdirect/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h4>Start here</h4>
            <Link href="/121customsdirect/solutions">Explore our services</Link>
            <Link href="/121customsdirect/solutions/customsdirect">CustomsDirect app</Link>
            <Link href="/121customsdirect/contact">Ask a question</Link>
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
