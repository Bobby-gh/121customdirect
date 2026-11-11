import Link from 'next/link'
import Image from 'next/image'
import PageHero from '../../../components/PageHero'
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
    description:
      'Entries prepared for goods arriving in the UK — including CDS submissions, duty and VAT calculation, and support when HMRC raises a query.',
    features: ['CDS entries', 'Duty & VAT', 'Query handling', 'Record keeping'],
  },
  {
    number: '02',
    title: 'Export declarations',
    image: containerShip,
    description:
      'Export entries and the accompanying paperwork, so goods leave with the right documentation and proof of export for your records.',
    features: ['Export entries', 'Proof of export', 'Licences', 'Origin evidence'],
  },
  {
    number: '03',
    title: 'Freight coordination',
    image: truckHighway,
    description:
      'Sea, air and road movements arranged alongside the customs work, with one point of contact from collection through to delivery.',
    features: ['FCL & LCL', 'Air cargo', 'Groupage', 'Door to door'],
  },
  {
    number: '04',
    title: 'Warehousing & fulfilment',
    image: warehouseAisle,
    description:
      'Short-term storage, consolidation and final-mile dispatch for stock that needs to move in stages rather than all at once.',
    features: ['Storage', 'Consolidation', 'Pick & pack', 'Final mile'],
  },
  {
    number: '05',
    title: 'Duty & tax advice',
    image: cargoShipSea,
    description:
      'A clear view of what your goods will cost to import — including commodity codes, preferential rates and reliefs you may be able to use.',
    features: ['Classification', 'Preference', 'Reliefs', 'Cost estimates'],
  },
  {
    number: '06',
    title: 'Ongoing trade support',
    image: parcels,
    description:
      'For regular importers and exporters: a retained service covering repeat declarations, audits and questions as they come up.',
    features: ['Retained service', 'Audit support', 'Training', 'Priority response'],
  },
]

const faqs = [
  {
    question: 'What information do you need to prepare a declaration?',
    answer:
      'Commercial invoice, packing list, transport document, commodity codes, values, origin and the parties involved. If you do not have all of it, we can tell you what is missing and what can be sourced.',
  },
  {
    question: 'Do you work with small or occasional importers?',
    answer:
      'Yes. A single shipment is fine. We quote per declaration, so there is no retainer needed unless you want one.',
  },
  {
    question: 'Can you clear goods that are already at the port?',
    answer:
      'Often, yes — but timing matters. Send the paperwork as soon as the shipment is booked so demurrage and storage charges can be avoided.',
  },
  {
    question: 'Which countries do you cover?',
    answer:
      'Imports and exports between the UK and the rest of the world, including EU trade under the Trade and Cooperation Agreement.',
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
            <h1 className="page-title-lg">Practical help for customs and freight work.</h1>
          </div>
          <div>
            <p className="lead">
              From a single declaration question to a retained service across regular shipments, we
              take on the parts of the process that are easiest to get wrong.
            </p>
            <p>
              Everything below can be used on its own or combined — most clients start with a
              declaration and add freight or warehousing once the paperwork is under control.
            </p>
          </div>
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

      <section className="section-pad inclusions-section">
        <div className="container split-layout split-layout-reverse">
          <div className="split-copy">
            <p className="eyebrow">What is included</p>
            <h2>One team for the paperwork and the movement.</h2>
            <p>
              Customs and freight are usually handled by separate companies, which is where delays
              and duplicated questions come from. We keep both in the same conversation.
            </p>
            <ul className="tick-list tick-list-wide">
              <li>Declaration preparation and submission to HMRC</li>
              <li>Duty and VAT calculated before the goods land</li>
              <li>Shipping documents checked against the entry</li>
              <li>Carrier and port liaison through clearance</li>
              <li>Copies of everything filed and kept for your records</li>
              <li>A named contact for questions during the shipment</li>
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
            <h2>Things clients ask before they start.</h2>
            <p>
              If your question is not here, send it over — we answer straight, even when the answer
              is that we are not the right fit.
            </p>
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
          <p>Tell us what is moving and we will point you to the right starting place.</p>
          <Link href="/121customsdirect/contact" className="button button-light">
            Contact us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SolutionsContent
