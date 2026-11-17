'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/images/cds-table.png',
    alt: 'Declaration queue showing CDS entries and their statuses',
    label: 'Declaration queue',
    position: 'center center',
  },
  {
    src: '/images/declaration-upload.png',
    alt: 'Upload invoice, fill form or bulk upload a customs declaration',
    label: 'AI document upload',
    position: 'center center',
  },
  {
    src: '/images/cds-declaration-form.png',
    alt: 'CDS declaration form with header-level fields',
    label: 'CDS declaration form',
    position: 'center center',
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index) => setActive((index + slides.length) % slides.length)

  return (
    <div
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Real system screenshots"
    >
      <div className="hero-slider-window">
        <div className="hero-slider-chrome">
          <span className="hero-slider-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="hero-slider-url">customs-declarations.uk</span>
          <span className="hero-slider-live">
            <i aria-hidden="true" />
            Live screens
          </span>
        </div>

        <div className="hero-slider-viewport">
          {slides.map((slide, index) => (
            <div
              className={`hero-slide${index === active ? ' is-active' : ''}`}
              key={slide.src}
              aria-hidden={index !== active}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 980px) 100vw, 560px"
                style={{ objectFit: 'cover', objectPosition: slide.position }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="hero-slider-caption">
          <span>{slides[active].label}</span>
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
          aria-label="Previous screenshot"
        >
          ←
        </button>
        <div className="hero-slider-dots-nav">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.src}
              className={`hero-slider-dot${index === active ? ' is-active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Show ${slide.label}`}
              aria-current={index === active}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero-slider-arrow"
          onClick={() => goTo(active + 1)}
          aria-label="Next screenshot"
        >
          →
        </button>
      </div>
    </div>
  )
}
