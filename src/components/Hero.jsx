'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    eyebrow: 'Customs support, made clear',
    title: 'Good customs work starts with a clear conversation.',
    description:
      'Importing or exporting can bring a lot of questions. We help you understand the details, the paperwork and what needs to happen next.',
    note: 'A practical place to start',
    detail: 'Tell us what you are moving and where you are in the process.',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-8b0f7d328d95?w=1200&q=85',
  },
  {
    eyebrow: 'For the work behind every shipment',
    title: 'The paperwork matters. So does the person doing it.',
    description:
      'Customs declarations call for care and attention. Get a more personal approach to the steps that keep trade moving.',
    note: 'Clear, considered support',
    detail: 'We take time to understand your question before recommending a next step.',
    imageUrl: 'https://images.unsplash.com/photo-1447407008750-65f6ae9f3e09?w=1200&q=85',
  },
  {
    eyebrow: 'Here when you need a hand',
    title: 'When the rules feel complicated, let’s talk them through.',
    description:
      'Whether you are new to customs or dealing with a particular challenge, we can help make the process easier to navigate.',
    note: 'Start with a conversation',
    detail: 'Bring your question. We will help you work out what to do next.',
    imageUrl: 'https://images.unsplash.com/photo-1463569224974-bdc0dc1a8e5b?w=1200&q=85',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const showSlide = (index) => setActiveSlide((index + slides.length) % slides.length)

  return (
    <section className="home-hero" aria-roledescription="carousel" aria-label="121 Customs Direct">
      {/* Background hero images */}
      <div className="home-hero-bg">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`home-hero-bg-slide ${i === activeSlide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${s.imageUrl})` }}
            aria-hidden="true"
          />
        ))}
        <div className="home-hero-bg-overlay" aria-hidden="true" />
        <div className="home-hero-bg-fog fog-bottom" />
        <div className="home-hero-bg-fog fog-top" />
      </div>

      <div className="home-hero-layout">
        <div className="home-hero-copy" aria-live="polite">
          <p className="editorial-eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p className="home-hero-description">{slide.description}</p>
          <div className="home-hero-actions">
            <Link href="/121customsdirect/contact" className="button button-dark">
              Talk to our team
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/121customsdirect/solutions" className="text-link">
              Explore our services
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="slider-controls">
            <button
              type="button"
              className="slider-arrow"
              onClick={() => showSlide(activeSlide - 1)}
              aria-label="Previous slide"
            >
              ←
            </button>
            <div className="slider-dots" aria-label="Choose a slide">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.eyebrow}
                  className={`slider-dot ${index === activeSlide ? 'is-active' : ''}`}
                  onClick={() => showSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>
            <span className="slider-count">
              0{activeSlide + 1} <span aria-hidden="true">/</span> 0{slides.length}
            </span>
            <button
              type="button"
              className="slider-arrow"
              onClick={() => showSlide(activeSlide + 1)}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        <aside className="hero-note" aria-label={slide.note}>
          <div className="hero-note-topline">
            <span>121 Customs Direct</span>
            <span aria-hidden="true">
              {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
          <div className="hero-note-rule" />
          <p className="hero-note-label">A note for your next shipment</p>
          <p className="hero-note-title">{slide.note}</p>
          <p className="hero-note-detail">{slide.detail}</p>
          <div className="hero-note-mark" aria-hidden="true">
            121
          </div>
          <p className="hero-note-signoff">Trade, with people in mind.</p>
        </aside>
      </div>

      <div className="home-hero-bottomline">
        <div className="container">
          <span>Import · Export · Customs declarations</span>
          <span>UK-based support for businesses</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
