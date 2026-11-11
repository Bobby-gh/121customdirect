import Link from 'next/link'
import Image from 'next/image'
import PageHero from '../../../components/PageHero'
import AppPreview from '../../../components/AppPreview'
import {
  cargoShipSea,
  containerShip,
  parcels,
  planeAtGate,
  portCranes,
  solutionsBanners,
  trailerFleet,
  truckHighway,
  warehouseAisle,
} from '../../../components/images'

const solutions = [
  {
    number: '01',
    title: 'Import declarations',
    image: portCranes,
    description: 'CDS entries for goods arriving in the UK, with duty and VAT calculated.',
    features: ['CDS entries', 'Duty & VAT', 'Query handling', 'Record keeping'],
  },
  {
    number: '02',
    title: 'Export declarations',
    image: containerShip,
    description: 'Export entries and paperwork, with proof of export for your records.',
    features: ['Export entries', 'Proof of export', 'Licences', 'Origin evidence'],
  },
  {
    number: '03',
    title: 'Freight coordination',
    image: truckHighway,
    description: 'Sea, air and road movements arranged alongside the customs work.',
    features: ['FCL & LCL', 'Air cargo', 'Groupage', 'Door to door'],
  },
  {
    number: '04',
    title: 'Warehousing & fulfilment',
    image: warehouseAisle,
    description: 'Short-term storage, consolidation and final-mile dispatch.',
    features: ['Storage', 'Consolidation', 'Pick & pack', 'Final mile'],
  },
  {
    number: '05',
    title: 'Duty & tax advice',
    image: cargoShipSea,
    description: 'What your goods will cost to import, including codes and reliefs.',
    features: ['Classification', 'Preference', 'Reliefs', 'Cost estimates'],
  },
  {
    number: '06',
    title: 'Ongoing trade support',
    image: parcels,
    description: 'A retained service for repeat declarations, audits and questions.',
    features: ['Retained service', 'Audit support', 'Training', 'Priority response'],
  },
]

const faqs = [
  {
    question: 'What do you need to prepare a declaration?',
    answer:
      'Commercial invoice, packing list, transport document, commodity codes, values and origin. If anything is missing, we will tell you.',
  },
  {
    question: 'Do you work with occasional importers?',
    answer: 'Yes. A single shipment is fine, quoted per declaration.',
  },
  {
    question: 'Can you clear goods already at the port?',
    answer: 'Often, yes — send the paperwork early to avoid storage charges.',
  },
  {
    question: 'Which countries do you cover?',
    answer: 'UK trade worldwide, including the EU under the Trade and Cooperation Agreement.',
  },
]

function SolutionsContent() {
  return (
    <main className="solutions-page">
      <PageHero images={solutionsBanners} label="Freight and customs services banner" />

      <section className="section-pad page-intro">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Our services</p>
            <h1 className="page-title-lg">Practical customs and freight support.</h1>
          </div>
          <div>
            <p className="lead">
              A UK customs company for HMRC declarations and consultancy — from a single
              declaration question to a retained service.
            </p>
            <p>Use one service or combine them.</p>
          </div>
        </div>
      </section>

      {/* CustomsDirect app spotlight */}
      <section className="solutions-app-spotlight">
        <div className="container app-feature-banner">
          <div className="app-feature-copy">
            <p className="eyebrow eyebrow-light">
              CustomsDirect app
              <span className="app-pill app-pill-light">App</span>
            </p>
            <h2>Submit your own HMRC declarations.</h2>
            <p>
              Our app for UK importers, exporters and forwarders. Build an entry, see the duty and
              VAT, send it to CDS and track it to clearance.
            </p>
            <div className="app-feature-actions">
              <Link href="/121customsdirect/solutions/customsdirect" className="button button-light">
                Explore the app <span aria-hidden="true">→</span>
              </Link>
              <a
                href="http://customs-uk.vercel.app/"
                className="text-link text-link-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open CustomsDirect <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ul className="app-feature-points">
              <li>CDS submissions</li>
              <li>Duty &amp; VAT estimates</li>
              <li>Declaration records</li>
            </ul>
          </div>
          <AppPreview />
        </div>
      </section>

      <section className="section-pad solutions-grid-section">
        <div className="container">
          <div className="card-grid card-grid-3">
            {solutions.map((solution) => (
              <article className="service-card" key={solution.number}>
                <div className="service-card-media">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <span className="service-card-number">{solution.number}</span>
                </div>
                <div className="service-card-body">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <div className="tag-row">
                    {solution.features.map((feature) => (
                      <span className="tag" key={feature}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href="/121customsdirect/contact" className="text-link">
                    Enquire <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad inclusions-section section-dark">
        <div className="container split-layout split-layout-reverse">
          <div className="split-copy">
            <p className="eyebrow">What is included</p>
            <h2>One team, start to finish.</h2>
            <p>
              Customs and freight usually sit with separate companies — that is where the delays
              come from.
            </p>
            <ul className="tick-list tick-list-wide">
              <li>Declarations prepared and submitted to HMRC</li>
              <li>Duty and VAT calculated before goods land</li>
              <li>Shipping documents checked against the entry</li>
              <li>Carrier and port liaison through clearance</li>
              <li>Copies of everything kept for your records</li>
              <li>A named contact for the shipment</li>
            </ul>
          </div>
          <div className="split-visual">
            <div className="media-frame">
              <Image
                src={trailerFleet}
                alt="Trailers lined up at a freight terminal"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className="media-frame media-inset">
              <Image
                src={planeAtGate}
                alt="Aircraft on the apron ready for cargo"
                fill
                sizes="200px"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad faq-section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">Questions</p>
            <h2>Common questions.</h2>
            <p>If yours is not here, ask us — we answer straight.</p>
            <Link href="/121customsdirect/contact" className="text-link">
              Ask us directly <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <h2>Not sure which service you need?</h2>
          <p>Tell us what is moving and we will point you to the right place.</p>
          <Link href="/121customsdirect/contact" className="button button-light">
            Contact us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SolutionsContent
