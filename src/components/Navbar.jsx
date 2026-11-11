'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const APP_URL = 'http://customs-uk.vercel.app/'

const navItems = [
  { label: 'Home', path: '/121customsdirect' },
  { label: 'About', path: '/121customsdirect/about' },
  { label: 'Solutions', path: '/121customsdirect/solutions' },
  { label: 'Contact', path: '/121customsdirect/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }
  const solutionsActive = pathname.startsWith('/121customsdirect/solutions')

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/121customsdirect" className="logo" onClick={handleNavClick}>
          <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#102a43" />
            <path d="M12 28V12L20 8L28 12V28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 16V24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="2" fill="white" />
          </svg>
          <span className="logo-text">121 Customs Direct</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(({ label, path }) =>
            label === 'Solutions' ? (
              <li key={path} className="nav-item has-dropdown">
                <Link
                  href={path}
                  className={`nav-link ${solutionsActive ? 'active' : ''}`}
                  onClick={handleNavClick}
                  aria-haspopup="true"
                >
                  {label}
                  <span className="nav-caret" aria-hidden="true">
                    ⌄
                  </span>
                </Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link href="/121customsdirect/solutions" onClick={handleNavClick}>
                      <span className="nav-dropdown-title">Customs &amp; freight services</span>
                      <span className="nav-dropdown-sub">Declarations, freight, guidance</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/121customsdirect/solutions/customsdirect"
                      className="nav-dropdown-feature"
                      onClick={handleNavClick}
                    >
                      <span className="nav-dropdown-title">
                        CustomsDirect app
                        <span className="nav-badge">App</span>
                      </span>
                      <span className="nav-dropdown-sub">Declaration software</span>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li key={path}>
                <Link
                  href={path}
                  className={`nav-link ${pathname === path ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {label}
                </Link>
              </li>
            )
          )}
          <li className="nav-menu-cta">
            <a href={APP_URL} className="button button-dark" target="_blank" rel="noopener noreferrer">
              Get started
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>

        <a
          href={APP_URL}
          className="btn btn-primary btn-nav"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
        >
          Get started
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
