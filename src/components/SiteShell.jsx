'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import Navbar from './Navbar'

export default function SiteShell({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
