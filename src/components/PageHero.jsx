'use client'

import { useEffect, useState } from 'react'

/**
 * Image-only page banner. Pass `images` (1 or more URLs).
 * No overlay copy is rendered — page headings live in the section below.
 */
export default function PageHero({ images = [], label = 'Page banner' }) {
  const slides = images.length ? images : []
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return undefined
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [slides.length])

  if (!slides.length) return null

  return (
    <section className="page-banner" aria-roledescription="carousel" aria-label={label}>
      <div className="page-banner-bg">
        {slides.map((image, index) => (
          <div
            key={image}
            className={`page-banner-slide ${index === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ))}
        <div className="page-banner-scrim" aria-hidden="true" />
      </div>

      {slides.length > 1 && (
        <div className="page-banner-controls">
          <button
            type="button"
            className="hero-arrow"
            onClick={() => setActive((prev) => (prev - 1 + slides.length) % slides.length)}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="hero-dots">
            {slides.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`hero-dot ${index === active ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-arrow"
            onClick={() => setActive((prev) => (prev + 1) % slides.length)}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}
