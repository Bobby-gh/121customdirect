import Link from 'next/link'
import Image from 'next/image'
import PageHero from '../../../components/PageHero'
import {
  aboutBanners,
  containerShip,
  portCranes,
  warehouseBoxes,
  warehouseRacks,
} from '../../../components/images'

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
  { value: '8,400+', label: 'Shipments cleared' },
  { value: '3', label: 'Freight modes covered' },
  { value: '96%', label: 'Cleared without delay' },
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
  'Import and export declarations (CDS)',
  'Sea freight: FCL, LCL and groupage',
  'Air freight for time-critical goods',
  'Road haulage across the UK and EU',
  'Warehousing, consolidation and final mile',
  'Duty, VAT and preference guidance',
  'Customs audits and historical records',
  'Training for in-house shipping teams',
]

function AboutContent() {
  return (
    <main className="about-page">
      <PageHero images={aboutBanners} label="Cargo and port banner" />

      <section className="section-pad page-intro">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">About us</p>
            <h1 className="page-title-lg">Customs support should feel personal.</h1>
          </div>
          <div>
            <p className="lead">
              A UK customs company for HMRC declarations and consultancy, working with importers,
              exporters and forwarders.
            </p>
            <p>A named contact, a checked declaration, a straight answer.</p>
          </div>
        </div>
      </section>

      <section className="section-pad about-story">
        <div className="container split-layout">
          <div className="split-visual">
            <div className="media-frame media-tall">
              <Image
                src={portCranes}
                alt="Container cranes and stacked shipping containers at a port"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className="media-frame media-inset">
              <Image
                src={warehouseBoxes}
                alt="Goods wrapped and stored in a warehouse"
                fill
                sizes="200px"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>

          <div className="split-copy">
            <p className="eyebrow">Our story</p>
            <h2>Getting help should be the easy part.</h2>
            <p>
              Declarations pull together shipment details, documents and HMRC requirements. It is
              easy to lose track of what is filed and what is outstanding.
            </p>
            <p>
              We are deliberately small: the person who prepares your entry is the person you can
              call about it.
            </p>
            <Link href="/121customsdirect/contact" className="text-link">
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
            <h2>Declarations, freight and what connects them.</h2>
            <p>
              We cover the span of a shipment, so nothing falls between a forwarder, a broker and a
              haulier.
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
                src={containerShip}
                alt="Containers being loaded onto a cargo ship"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className="media-frame media-inset">
              <Image
                src={warehouseRacks}
                alt="Racked stock in a distribution warehouse"
                fill
                sizes="200px"
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
              <p className="eyebrow">Companies we work with</p>
              <h2>Partners across the supply chain.</h2>
            </div>
            <p className="section-note">
              Hauliers, forwarders and distributors who rely on us for customs.
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
            <h2>Tell us what you are working through.</h2>
            <p>We will start with your question — no obligation.</p>
          </div>
          <div className="cta-panel-actions">
            <Link href="/121customsdirect/contact" className="button button-dark">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
            <Link href="/121customsdirect/solutions" className="button button-outline">
              See our services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutContent
