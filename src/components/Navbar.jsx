'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', path: '/121customsdirect' },
  { label: 'About Us', path: '/121customsdirect/about' },
  { label: 'Solutions', path: '/121customsdirect/solutions' },
  { label: 'Contact Us', path: '/121customsdirect/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/121customsdirect" className="logo" onClick={handleNavClick}>
          <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="url(#logo-gradient)" />
            <path d="M12 28V12L20 8L28 12V28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 16V24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="2" fill="white" />
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">121 Customs Direct</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`nav-link ${pathname === path ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/121customsdirect/contact" className="btn btn-primary btn-nav" onClick={handleNavClick}>
          Get Started
        </Link>

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
