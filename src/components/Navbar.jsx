'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const APP_URL = 'https://customs-uk.vercel.app/'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }
  const solutionsActive = pathname.startsWith('/solutions')

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo" onClick={handleNavClick}>
          <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="cd-logo-mark" x1="4" y1="3" x2="36" y2="37" gradientUnits="userSpaceOnUse">
                <stop stopColor="#04B1C4" />
                <stop offset="0.55" stopColor="#0a7ea3" />
                <stop offset="1" stopColor="#08376b" />
              </linearGradient>
            </defs>
            <path d="M20 2.5 35 11.2v17.6L20 37.5 5 28.8V11.2z" fill="url(#cd-logo-mark)" />
            <path d="M12 16h13.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
            <path d="m22.3 12.8 3.2 3.2-3.2 3.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 24H14.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
            <path d="m17.7 20.8-3.2 3.2 3.2 3.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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
                    <Link href="/solutions" onClick={handleNavClick}>
                      <span className="nav-dropdown-title">Customs &amp; freight services</span>
                      <span className="nav-dropdown-sub">Declarations, freight, guidance</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/customsdirect"
                      className="nav-dropdown-feature"
                      onClick={handleNavClick}
                    >
                      <span className="nav-dropdown-title">
                        Declaration app
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
              Log in
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
          Log in
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
