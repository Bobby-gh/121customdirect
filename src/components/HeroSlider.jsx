'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const APP_URL = 'https://customs-uk.vercel.app/'

const slides = [
  {
    src: '/images/cds-table.png',
    alt: 'Declaration queue showing CDS entries and their statuses',
    label: 'Declaration queue',
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
    eyebrow: 'AI document processing',
    title: [
      { text: 'Documents in.' },
      { text: 'Draft out.', accent: true },
    ],
    sub: 'Upload invoices and packing lists. AI builds the entry for you to review.',
    position: 'center center',
  },
  {
    src: '/images/cds-declaration-form.png',
    alt: 'CDS declaration form with header-level fields',
    label: 'CDS declaration form',
    eyebrow: 'HMRC CDS workspace',
    title: [
      { text: 'Every field,' },
      { text: 'guided.', accent: true },
    ],
    sub: 'Complete the entry, check duty and VAT, then submit to HMRC.',
    position: 'center center',
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index) => setActive((index + slides.length) % slides.length)
  const slide = slides[active]

  return (
    <div
      className="hero-slider hero-banner-slider"
      aria-roledescription="carousel"
      aria-label="Customs software highlights"
    >
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
            <a href="/121customsdirect/contact" className="hero-saas-btn hero-saas-btn-secondary">
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
          </div>

          <div className="hero-slider-controls">
            <button
              type="button"
              className="hero-slider-arrow"
              onClick={() => goTo(active - 1)}
              aria-label="Previous slide"
            >
              ←
            </button>
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
            <button
              type="button"
              className="hero-slider-arrow"
              onClick={() => goTo(active + 1)}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
