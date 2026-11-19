'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import Navbar from './Navbar'

const REVEAL_SELECTOR = [
  '.section-heading-row',
  '.section-note:not(.section-heading-row .section-note)',
  '.home-welcome-grid > *',
  '.docproc-grid > *',
  '.services-saas-grid > *',
  '.app-highlight-grid > *',
  '.split-layout > *',
  '.card-grid > *',
  '.freight-grid > *',
  '.step-grid > *',
  '.partner-wall > *',
  '.stats-band-item',
  '.page-intro-grid > *',
  '.contact-layout > *',
  '.enquiry-layout > *',
  '.closing-cta-inner > *',
  '.people-band-inner > *',
  '.value-card',
  '.audience-card',
  '.faq-intro',
  '.faq-item',
  '.app-feature-banner > *',
  '.contact-details > *',
  '.system-shot',
].join(',')

const easeOut = (value) => 1 - Math.pow(1 - value, 3)

function formatValue(value, decimals, useCommas) {
  const rounded = decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value)
  return useCommas ? rounded.toLocaleString('en-GB') : String(rounded)
}

function runCounter(element) {
  if (element.dataset.counted === 'true') return

  const text = element.textContent.trim()
  const match = text.match(/^([^\d]*)([\d.,]+)(.*)$/)
  if (!match) return

  const [, prefix, numberText, suffix] = match
  const target = Number(numberText.replace(/,/g, ''))
  if (!Number.isFinite(target) || target <= 0) return

  element.dataset.counted = 'true'
  const decimals = numberText.includes('.') ? 1 : 0
  const useCommas = numberText.includes(',')
  const duration = 1300
  let startTime = 0

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    element.textContent = `${prefix}${formatValue(target * easeOut(progress), decimals, useCommas)}${suffix}`
    if (progress < 1) {
      window.requestAnimationFrame(animate)
    } else {
      element.textContent = text
    }
  }

  element.textContent = `${prefix}${formatValue(0, decimals, useCommas)}${suffix}`
  window.requestAnimationFrame(animate)
}

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

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const items = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    const seen = new Map()

    items.forEach((item) => {
      const parent = item.parentElement
      const index = seen.get(parent) ?? 0
      seen.set(parent, index + 1)

      item.classList.add('reveal-item')
      item.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 70}ms`)
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-inview')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
    )

    items.forEach((item) => revealObserver.observe(item))

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          runCounter(entry.target)
          counterObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.6 }
    )

    document.querySelectorAll('.stats-band-value').forEach((counter) => {
      counterObserver.observe(counter)
    })

    return () => {
      revealObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [pathname])

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
