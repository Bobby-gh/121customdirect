import Link from 'next/link'
import Image from 'next/image'
import Hero from '../../components/Hero'
import EnquiryForm from '../../components/EnquiryForm'
import AppPreview from '../../components/AppPreview'
import {
  businessMeeting,
  cargoShipSea,
  containerShip,
  parcels,
  planeInClouds,
  portCrew,
  trailerFleet,
  truckHighway,
  warehouseBoxes,
  warehouseRacks,
} from '../../components/images'

const services = [
  {
    number: '01',
    title: 'Customs declarations',
    image: warehouseBoxes,
    copy: 'Import and export entries, checked before anything is submitted.',
    points: ['Import & export entries', 'Commodity codes', 'Document checks'],
  },
  {
    number: '02',
    title: 'Freight coordination',
    image: cargoShipSea,
    copy: 'Sea, air and road movements arranged around the customs work.',
    points: ['Sea, air & road', 'Door to door', 'Tracking updates'],
  },
  {
    number: '03',
    title: 'Guidance & compliance',
    image: businessMeeting,
    copy: 'Straight answers on duty, reliefs and paperwork.',
    points: ['Duty & VAT', 'Restricted goods', 'Process reviews'],
  },
]

const freightModes = [
  {
    title: 'Sea freight',
    detail: 'FCL and LCL container movements through UK and EU ports.',
    image: containerShip,
  },
  {
    title: 'Air freight',
    detail: 'Time-critical consignments with priority clearance.',
    image: planeInClouds,
  },
  {
    title: 'Road freight',
    detail: 'Groupage and full loads across the UK and Europe.',
    image: truckHighway,
  },
  {
    title: 'Warehousing',
    detail: 'Short-term storage, consolidation and final mile.',
    image: warehouseRacks,
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell us what’s moving',
    detail: 'A short conversation about the goods, route and deadline.',
  },
  {
    number: '02',
    title: 'We check the detail',
    detail: 'We review classification, values, origin and licences.',
  },
  {
    number: '03',
    title: 'We file the entry',
    detail: 'Entries are built, checked and submitted to HMRC.',
  },
  {
    number: '04',
    title: 'Cleared and moving',
    detail: 'You get confirmation, paperwork and a clear next step.',
  },
]

const stats = [
  { value: '12+', label: 'Years in customs' },
  { value: '8,400+', label: 'Shipments cleared' },
  { value: '96%', label: 'Cleared without delay' },
  { value: '24h', label: 'Response time' },
]

const capabilities = [
  'HMRC-compliant import and export entries',
  'CDS declarations handled end to end',
  'Duty, VAT and preference guidance',
  'Customs clearance for sea, air and road',
  'Consolidated shipments and groupage',
  'Ongoing support for regular traders',
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

function Home() {
  return (
    <main className="home-page">
      <Hero />

      {/* Intro / who we are */}
      <section className="section-pad home-welcome">
        <div className="container home-welcome-grid">
          <div className="home-welcome-copy">
            <p className="eyebrow">UK customs &amp; freight</p>
            <h1 className="page-title-lg">Customs clearance, handled properly.</h1>
            <p className="lead">
              A UK customs company for HMRC declarations and consultancy. Import and export entries,
              sea, air and road freight — one team, one contact.
            </p>
            <div className="home-welcome-actions">
              <Link href="/121customsdirect/contact" className="button button-dark">
                Request a quote
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/121customsdirect/solutions" className="text-link">
                Our services
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="home-welcome-visual">
            <div className="media-frame media-tall">
              <Image
                src={businessMeeting}
                alt="Colleagues around a table in a business meeting"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
                unoptimized
                priority
              />
            </div>
            <div className="media-badge">
              <span className="media-badge-value">CDS</span>
              <span className="media-badge-label">Customs Declaration Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Services */}
      <section className="section-pad home-services">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Declarations, freight, guidance.</h2>
            </div>
            <Link href="/121customsdirect/solutions" className="text-link">
              All services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="card-grid card-grid-3">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-media">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <span className="service-card-number">{service.number}</span>
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ul className="tick-list">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link href="/121customsdirect/solutions" className="text-link">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CustomsDirect app highlight */}
      <section className="section-pad app-highlight section-dark">
        <div className="container app-highlight-grid">
          <div className="app-highlight-copy">
            <p className="eyebrow">
              CustomsDirect app
              <span className="app-pill">New</span>
            </p>
            <h2>Yours to file. Ours to back up.</h2>
            <p>
              Our app for UK customs declarations. Build an entry, see the duty and VAT, submit to
              HMRC’s CDS — or have us check it first.
            </p>
            <ul className="tick-list tick-list-wide">
              <li>Guided CDS declaration builder</li>
              <li>Duty and VAT estimates</li>
              <li>Documents and audit trail in one place</li>
              <li>Live status from draft to cleared</li>
            </ul>
            <div className="app-highlight-actions">
              <Link href="/121customsdirect/solutions/customsdirect" className="button button-dark">
                See CustomsDirect <span aria-hidden="true">→</span>
              </Link>
              <a
                href="http://customs-uk.vercel.app/"
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the app <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <AppPreview />
        </div>
      </section>

      {/* Freight modes */}
      <section className="section-pad home-freight">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Freight &amp; shipments</p>
              <h2>Four modes, one team.</h2>
            </div>
            <p className="section-note">
              Sea, air, road or stored — the customs work changes with the mode.
            </p>
          </div>

          <div className="freight-grid">
            {freightModes.map((mode) => (
              <article className="freight-card" key={mode.title}>
                <div className="freight-card-media">
                  <Image
                    src={mode.image}
                    alt={mode.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div className="freight-card-body">
                  <h3>{mode.title}</h3>
                  <p>{mode.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About the company */}
      <section className="section-pad home-about section-dark">
        <div className="container split-layout">
          <div className="split-visual">
            <div className="media-frame">
              <Image
                src={trailerFleet}
                alt="A fleet of haulage trailers parked at a distribution centre"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className="media-frame media-inset">
              <Image
                src={parcels}
                alt="Packed parcels ready for dispatch"
                fill
                sizes="200px"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>

          <div className="split-copy">
            <p className="eyebrow">About us</p>
            <h2>A small team that knows the detail.</h2>
            <p>
              We handle customs for UK importers, exporters and forwarders — entries, records, HMRC
              queries and the movement itself.
            </p>
            <ul className="tick-list tick-list-wide">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/121customsdirect/about" className="button button-dark">
              More about us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* People at the port */}
      <section
        className="people-band"
        style={{ '--people-image': `url(${portCrew})` }}
      >
        <div className="container">
          <div className="people-band-inner">
            <p className="eyebrow">At the port</p>
            <h2>People who know your cargo.</h2>
            <p>Ports, hauliers and HMRC — we deal with them daily, so you do not have to.</p>
            <Link href="/121customsdirect/contact" className="button button-light">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad process-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>Four steps to clearance.</h2>
            </div>
          </div>
          <ol className="step-grid">
            {steps.map((step) => (
              <li className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section className="section-pad partners-section section-dark">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Companies we work with</p>
              <h2>Trusted across the supply chain.</h2>
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

      {/* Enquiry form */}
      <section className="section-pad home-enquiry" id="enquiry">
        <div className="container enquiry-layout">
          <div className="enquiry-copy">
            <p className="eyebrow">Get a quote</p>
            <h2>Tell us about the shipment.</h2>
            <p>
              Share the goods, route and date. We will come back with the requirements, documents
              and a price.
            </p>
            <ul className="contact-prompt-list">
              <li>What are you importing or exporting?</li>
              <li>Where is it travelling from and to?</li>
              <li>When does it need to move?</li>
            </ul>
            <div className="enquiry-contact">
              <p>
                <span>Email</span>
                <a href="mailto:hello@121customsdirect.co.uk">hello@121customsdirect.co.uk</a>
              </p>
              <p>
                <span>Phone</span>
                <a href="tel:+441210000121">0121 000 0121</a>
              </p>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <h2>A shipment to clear? Let’s talk.</h2>
          <p>No obligation, no jargon.</p>
          <Link href="/121customsdirect/contact" className="button button-light">
            Talk to our team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
