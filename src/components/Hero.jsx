import Link from 'next/link'
import AppPreview from './AppPreview'

const APP_URL = 'https://customs-uk.vercel.app/'

/**
 * Home hero: declaration support story beside a live-style preview of the app.
 */
function Hero() {
  return (
    <section className="home-hero" aria-label="Customs declaration support and software">
      <div className="home-hero-glow" aria-hidden="true" />

      <div className="container home-hero-grid">
        <div className="home-hero-content">
          <p className="hero-eyebrow">Customs support for GB declarants</p>
          <h1 className="hero-title">
            Everything you need to declare goods into and out of Great Britain.
          </h1>
          <p className="hero-sub">
            CustomsDirect is our declaration platform — guided CDS entries, commodity codes, duty
            and VAT, documents and direct submission to HMRC, with a customs team alongside you.
          </p>
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

        <div className="home-hero-visual">
          <AppPreview />
          <div className="hero-chip hero-chip-validated">
            <span aria-hidden="true">✓</span>
            HMRC validated
          </div>
          <div className="hero-chip hero-chip-support">
            <span aria-hidden="true">●</span>
            Declarant support
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
