import Link from 'next/link'
import Image from 'next/image'
import PageHero from '../../components/PageHero'
import AppPreview from '../../components/AppPreview'
import { businessMeeting } from '../../components/images'

const principles = [
  {
    number: '01',
    title: 'Make it clear',
    description: 'We explain the requirement in the terms of your shipment.',
  },
  {
    number: '02',
    title: 'Mind the details',
    description: 'A wrong code or missing document can hold a shipment for days.',
  },
  {
    number: '03',
    title: 'Answer properly',
    description: 'No two businesses are alike. It starts with listening.',
  },
]

const stats = [
  { value: '12+', label: 'Years in customs' },
  { value: '8,400+', label: 'Declarations filed' },
  { value: 'CDS', label: 'Direct HMRC submission' },
  { value: '96%', label: 'Accepted first time' },
]

const partners = [
  'Northline Freight',
  'Portbridge Logistics',
  'Harbour & Co',
  'Meridian Trade',
  'Kestrel Distribution',
  'Bluewater Shipping',
  'Atlas Import Group',
  'CargoWorks',
]

const capabilities = [
  'Guided CDS import and export declarations',
  'Direct submission to HMRC CDS',
  'Commodity codes and duty estimates',
  'Documents attached to each declaration',
  'Live status from draft to cleared',
  'Submission records and an audit trail',
  'Optional review by our customs team',
  'Training and onboarding',
]

function AboutContent() {
  return (
    <main className="about-page">
      <PageHero label="About 121 Customs Direct" variant="account" />

      <section className="section-pad page-intro">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">About us</p>
            <h1 className="page-title-lg">Supporting declarants moving goods into and out of Great Britain.</h1>
          </div>
          <div>
            <p className="lead">
              We give importers, exporters and customs agents everything they need to make a
              declaration to HMRC: our declaration platform, the checks, and a customs team that
              files every day.
            </p>
            <p>A named contact, checked entries, a straight answer.</p>
          </div>
        </div>
      </section>

      <section className="section-pad about-story">
        <div className="container split-layout">
          <div className="home-about-panel">
            <AppPreview />
            <div className="home-about-note">
              <span className="media-badge-value">Our own team</span>
              <span className="media-badge-label">
                Supporting GB import and export declarations in the app every day
              </span>
            </div>
          </div>

          <div className="split-copy">
            <p className="eyebrow">Our story</p>
            <h2>Built around how declarations are actually filed.</h2>
            <p>
              Declarations pull together shipment details, documents and HMRC requirements. It is
              easy to lose track of what is filed and what is outstanding.
            </p>
            <p>
              We work in the app every day, and the checks we make by hand are part of the
              support we give declarants — so fewer entries come back with queries.
            </p>
            <Link href="/contact" className="text-link">
              Talk to the team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-band-grid">
          {stats.map((stat) => (
            <div className="stats-band-item" key={stat.label}>
              <span className="stats-band-value">{stat.value}</span>
              <span className="stats-band-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad about-principles">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">What matters to us</p>
              <h2>Good service is in the details.</h2>
            </div>
            <p className="section-note">
              No grand promises — just a considered approach to the work.
            </p>
          </div>
          <div className="card-grid card-grid-3">
            {principles.map((principle) => (
              <article className="value-card" key={principle.number}>
                <span className="value-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad about-capabilities section-dark">
        <div className="container split-layout split-layout-reverse">
          <div className="split-copy">
            <p className="eyebrow">What we handle</p>
            <h2>Declarations, duties and the details in between.</h2>
            <p>
              The software covers the declaration; our team covers the questions around it — from
              classification to an HMRC query.
            </p>
            <ul className="tick-list tick-list-wide">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="split-visual">
            <div className="media-frame">
              <Image
                src={businessMeeting}
                alt="The customs team working with a client"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad partners-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Who files with us</p>
              <h2>Trusted by traders and forwarders.</h2>
            </div>
            <p className="section-note">
              Importers, exporters and customs agents filing through our platform.
            </p>
          </div>
          <div className="partner-wall">
            {partners.map((name) => (
              <div className="partner-tile" key={name}>
                <span className="partner-mark" aria-hidden="true">
                  {name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <span className="partner-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad about-cta-panel">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>See the platform for yourself.</h2>
            <p>Book a walkthrough with one of your own declarations — no obligation.</p>
          </div>
          <div className="cta-panel-actions">
            <Link href="/contact" className="button button-dark">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
            <Link href="/solutions" className="button button-outline">
              See our services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutContent
