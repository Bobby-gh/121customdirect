'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cargoShipSea, businessMeeting, portCranes } from './images'

const APP_URL = 'https://customs-uk.vercel.app/'

const slides = [
  {
    image: cargoShipSea,
    eyebrow: 'Customs support for GB declarants',
    title: 'Everything you need to declare goods into and out of Great Britain.',
    sub: 'CustomsDirect is the declaration platform we support — guided CDS entries, commodity codes, duty and VAT, documents and direct submission to HMRC, with a customs team alongside you.',
  },
  {
    image: businessMeeting,
    eyebrow: 'Declarant support',
    title: 'A customs team alongside your declarations.',
    sub: 'When an entry needs checking or HMRC raises a query, talk to customs people who work with CDS every day — whether you file it yourself or ask us to.',
  },
  {
    image: portCranes,
    eyebrow: 'Built for UK trade',
    title: 'Import, export, transit and safety & security in one workspace.',
    sub: 'Guided entries, duty and VAT estimates, documents and audit trail — built around HMRC’s Customs Declaration Service.',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((index) => (index + 1) % slides.length)
    }, 6500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[active]

  return (
    <section className="home-hero" aria-label="Customs declaration support and software">
      <div className="home-hero-bg" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`home-hero-bg-slide ${index === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
      <div className="home-hero-bg-scrim" aria-hidden="true" />

      <div className="container home-hero-content" key={active}>
        <p className="hero-eyebrow">{slide.eyebrow}</p>
        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-sub">{slide.sub}</p>
        <div className="hero-actions">
          <a
            href={APP_URL}
            className="button button-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open CustomsDirect <span aria-hidden="true">↗</span>
          </a>
          <Link
            href="/121customsdirect/solutions/customsdirect"
            className="button button-outline button-outline-light"
          >
            See how it works
          </Link>
        </div>
        <ul className="hero-points">
          <li>Import &amp; export entries</li>
          <li>Direct to HMRC CDS</li>
          <li>Customs team behind you</li>
        </ul>
      </div>

      <div className="home-hero-controls" role="tablist" aria-label="Hero slides">
        <button
          type="button"
          className="hero-arrow"
          onClick={() => setActive((active - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot ${index === active ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero-arrow"
          onClick={() => setActive((active + 1) % slides.length)}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  )
}
