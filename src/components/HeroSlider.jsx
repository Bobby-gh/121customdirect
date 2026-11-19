'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import HeroMotion from './HeroMotion'

const APP_URL = 'https://customs-uk.vercel.app/'

const systems = ['GB CDS', 'EU ICS2', 'NCTS6', 'GVMS', 'French ELO', 'GB S&S']

const slides = [
  {
    src: '/images/cds-table.png',
    alt: 'Declaration queue showing CDS entries and their statuses',
    label: 'Declaration queue',
    scene: 'skyline',
    eyebrow: 'Customs software for GB & EU trade',
    title: [
      { text: 'Customs declarations,' },
      { text: 'made clear.', accent: true },
    ],
    sub: 'Prepare, validate and submit to HMRC CDS — with AI processing and UK support.',
    position: 'center center',
  },
  {
    src: '/images/declaration-upload.png',
    alt: 'Upload invoice, fill form or bulk upload a customs declaration',
    label: 'AI document upload',
    scene: 'documents',
    eyebrow: 'AI document processing',
    title: [
      { text: 'Documents become' },
      { text: 'declarations.', accent: true },
    ],
    sub: 'Upload invoices and packing lists. AI builds the entry for you to review.',
    position: 'center center',
  },
  {
    src: '/images/cds-declaration-form.png',
    alt: 'CDS declaration form with header-level fields',
    label: 'CDS declaration form',
    scene: 'form',
    eyebrow: 'HMRC CDS workspace',
    title: [
      { text: 'Every field,' },
      { text: 'guided.', accent: true },
    ],
    sub: 'Complete the entry, check duty and VAT, then submit to HMRC.',
    position: 'center center',
  },
]

const SLIDE_MS = 6500

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0

    const update = () => {
      frame = 0
      const limit = window.innerWidth < 720 ? 28 : 70
      const shift = Math.min(window.scrollY * 0.16, limit)
      section.style.setProperty('--hero-parallax', `${shift.toFixed(1)}px`)
    }

    const handleScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length)
    }, SLIDE_MS)

    return () => window.clearTimeout(timer)
  }, [active])

  const goTo = (index) => setActive((index + slides.length) % slides.length)
  const slide = slides[active]

  return (
    <section
      ref={sectionRef}
      className="hero-saas hero-slider hero-banner-slider"
      aria-roledescription="carousel"
      aria-label="Customs software highlights"
    >
      <div className="hero-scenes" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            className={`hero-scene hero-scene--${item.scene}${index === active ? ' is-active' : ''}`}
            key={item.scene}
          >
            <span className="hero-scene-grid" />
            <span className="hero-scene-orb" />
            {item.scene === 'skyline' && (
              <svg
                className="hero-scene-city"
                viewBox="0 0 1440 260"
                preserveAspectRatio="none"
              >
                <path d="M0,260 L0,190 L40,190 L40,150 L70,150 L70,120 L95,120 L95,170 L130,170 L130,140 L160,140 L160,100 L185,100 L185,160 L220,160 L220,130 L250,130 L250,180 L290,180 L290,110 L315,110 L315,90 L330,90 L330,110 L355,110 L355,175 L395,175 L395,145 L425,145 L425,120 L450,120 L450,165 L485,165 L485,135 L515,135 L515,190 L560,190 L560,150 L590,150 L590,105 L620,105 L620,100 L635,100 L635,105 L665,105 L665,160 L700,160 L700,125 L730,125 L730,180 L770,180 L770,140 L800,140 L800,110 L825,110 L825,170 L860,170 L860,130 L890,130 L890,195 L935,195 L935,155 L965,155 L965,115 L990,115 L990,100 L1005,100 L1005,115 L1030,115 L1030,170 L1070,170 L1070,135 L1100,135 L1100,190 L1145,190 L1145,150 L1175,150 L1175,120 L1200,120 L1200,165 L1235,165 L1235,140 L1265,140 L1265,195 L1310,195 L1310,160 L1340,160 L1340,130 L1365,130 L1365,185 L1400,185 L1400,200 L1440,200 L1440,260 Z" />
              </svg>
            )}
            <span className="hero-scene-shape hero-scene-shape-a" />
            <span className="hero-scene-shape hero-scene-shape-b" />
            <span className="hero-scene-shape hero-scene-shape-c" />
          </div>
        ))}
      </div>

      <HeroMotion />

      <div className="container hero-saas-grid">
        <div className="hero-saas-copy hero-slider-copy" key={active}>
          <p className="hero-saas-eyebrow">
            <span className="hero-saas-dot" aria-hidden="true" />
            {slide.eyebrow}
          </p>
          <h1 className="hero-saas-title">
            {slide.title.map((line) => (
              <span
                key={line.text}
                className={line.accent ? 'hero-saas-title-accent' : undefined}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p className="hero-saas-sub">{slide.sub}</p>
          <div className="hero-saas-actions">
            <a
              href={APP_URL}
              className="hero-saas-btn hero-saas-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the app <span aria-hidden="true">↗</span>
            </a>
            <a href="/contact" className="hero-saas-btn hero-saas-btn-secondary">
              Book a demo
            </a>
          </div>
          <ul className="hero-saas-chips">
            <li>
              <span aria-hidden="true">✓</span> CDS ready
            </li>
            <li>
              <span aria-hidden="true">✦</span> AI extraction
            </li>
            <li>
              <span aria-hidden="true">●</span> UK support
            </li>
          </ul>
        </div>

        <div className="hero-saas-visual">
          <div className="hero-slider-window">
            <div className="hero-slider-chrome">
              <span className="hero-slider-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="hero-slider-url">declaration workspace</span>
              <span className="hero-slider-live">
                <i aria-hidden="true" />
                Live screens
              </span>
            </div>

            <div className="hero-slider-viewport">
              {slides.map((item, index) => (
                <div
                  className={`hero-slide${index === active ? ' is-active' : ''}`}
                  key={item.src}
                  aria-hidden={index !== active}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 980px) 100vw, 560px"
                    style={{ objectFit: 'cover', objectPosition: item.position }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="hero-slider-caption" aria-live="polite">
              <span>{slide.label}</span>
              <span>
                {active + 1} / {slides.length}
              </span>
            </div>
            <span key={active} className="hero-slider-progress" aria-hidden="true" />
          </div>

          <div className="hero-slider-controls">
            <div className="hero-slider-dots-nav">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.src}
                  className={`hero-slider-dot${index === active ? ' is-active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Show ${item.label}`}
                  aria-current={index === active}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-saas-strip">
        <span>One workspace for</span>
        <div className="hero-strip-marquee-window">
          <div className="hero-strip-marquee">
            <ul>
              {systems.map((system) => (
                <li key={system}>{system}</li>
              ))}
            </ul>
            <ul aria-hidden="true">
              {systems.map((system) => (
                <li key={`${system}-clone`}>{system}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hero-loader" key={active} aria-hidden="true">
        <span className="hero-loader-bar" />
      </div>
    </section>
  )
}
