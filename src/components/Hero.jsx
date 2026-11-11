'use client'

import { useEffect, useState } from 'react'
import { homeBanners } from './images'

/**
 * Full-bleed freight / shipment banner. Images only — no overlay copy.
 */
function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % homeBanners.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const go = (index) => setActive((index + homeBanners.length) % homeBanners.length)

  return (
    <section className="home-hero" aria-roledescription="carousel" aria-label="Freight and shipment imagery">
      <div className="home-hero-bg">
        {homeBanners.map((image, index) => (
          <div
            key={image}
            className={`home-hero-bg-slide ${index === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ))}
        <div className="home-hero-bg-scrim" aria-hidden="true" />
      </div>

      <div className="home-hero-controls">
        <button
          type="button"
          className="hero-arrow"
          onClick={() => go(active - 1)}
          aria-label="Previous image"
        >
          ←
        </button>
        <div className="hero-dots" role="tablist" aria-label="Choose an image">
          {homeBanners.map((image, index) => (
            <button
              type="button"
              key={image}
              role="tab"
              className={`hero-dot ${index === active ? 'is-active' : ''}`}
              onClick={() => go(index)}
              aria-label={`Image ${index + 1}`}
              aria-selected={index === active}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero-arrow"
          onClick={() => go(active + 1)}
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </section>
  )
}

export default Hero
