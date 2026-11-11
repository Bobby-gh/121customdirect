import Link from 'next/link'
import Image from 'next/image'
import AppPreview from '../../../../components/AppPreview'
import PageHero from '../../../../components/PageHero'
import { appBanners, containerShip } from '../../../../components/images'

const APP_URL = 'http://customs-uk.vercel.app/'

const features = [
  {
    number: '01',
    title: 'Guided declarations',
    description: 'A step-by-step entry builder that asks for what a declaration needs.',
  },
  {
    number: '02',
    title: 'Direct CDS submission',
    description: 'Submit to HMRC’s Customs Declaration Service and see the response.',
  },
  {
    number: '03',
    title: 'Commodity codes & duty',
    description: 'Look up classifications and estimate duty and import VAT.',
  },
  {
    number: '04',
    title: 'Document attachments',
    description: 'Invoices, packing lists and licences stay with the entry.',
  },
  {
    number: '05',
    title: 'Live status tracking',
    description: 'Follow each declaration from draft to cleared.',
  },
  {
    number: '06',
    title: 'Records that stand up',
    description: 'Every submission, amendment and response, kept and exportable.',
  },
]

const audiences = [
  {
    title: 'Importers & exporters',
    detail: 'Businesses that ship regularly and file in-house.',
  },
  {
    title: 'Freight forwarders',
    detail: 'Teams clearing client shipments, faster.',
  },
  {
    title: 'E-commerce sellers',
    detail: 'Sellers moving stock into the UK, with repeatable entries.',
  },
]

const steps = [
  { number: '01', title: 'Set up your profile', detail: 'Add your business, EORI and declarant details once.' },
  { number: '02', title: 'Build the entry', detail: 'Enter the shipment with guided fields and attached documents.' },
  { number: '03', title: 'Submit to HMRC', detail: 'Send the declaration through CDS and receive the response.' },
  { number: '04', title: 'Track and file', detail: 'Follow clearance and keep the record for your audit trail.' },
]

function CustomsDirectApp() {
  return (
    <main className="app-page">
      <PageHero images={appBanners} label="CustomsDirect app banner" />

      <section className="section-pad page-intro">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">CustomsDirect app</p>
            <h1 className="page-title-lg">Declarations from your own desk.</h1>
          </div>
          <div>
            <p className="lead">
              Our app for preparing and submitting import and export entries to HMRC’s CDS — built
              by the team that files declarations daily.
            </p>
            <p>When an entry needs a second pair of eyes, we are one message away.</p>
            <div className="app-intro-actions">
              <a href={APP_URL} className="button button-dark" target="_blank" rel="noopener noreferrer">
                Open CustomsDirect <span aria-hidden="true">↗</span>
              </a>
              <Link href="/121customsdirect/contact" className="text-link">
                Ask about access <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad app-spotlight-section section-dark">
        <div className="container split-layout">
          <div className="split-copy">
            <p className="eyebrow">Built for UK trade</p>
            <h2>Everything a declaration needs, in one place.</h2>
            <p>
              Built around the Customs Declaration Service, not adapted to it. The fields, codes and
              checks follow how an entry is prepared.
            </p>
            <ul className="tick-list tick-list-wide">
              <li>Import and export entries in one workspace</li>
              <li>Duty and import VAT calculated as you go</li>
              <li>Documents attached to the declaration</li>
              <li>Submission history and HMRC responses</li>
              <li>Multiple users for a single business</li>
              <li>Optional review by our brokerage team</li>
            </ul>
            <div className="app-spotlight-actions">
              <a href={APP_URL} className="button button-dark" target="_blank" rel="noopener noreferrer">
                Open the app <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div>
            <AppPreview />
          </div>
        </div>
      </section>

      <section className="section-pad app-features-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Features</p>
              <h2>Declare without losing the thread.</h2>
            </div>
            <p className="section-note">
              Clear screens, checked fields and a record of everything submitted.
            </p>
          </div>
          <div className="card-grid card-grid-3">
            {features.map((feature) => (
              <article className="value-card app-feature-card" key={feature.number}>
                <span className="value-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad app-audience-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Who it is for</p>
              <h2>For anyone who ships more than once.</h2>
            </div>
          </div>
          <div className="card-grid card-grid-3">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad app-steps-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>Four steps from setup to clearance.</h2>
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

      <section className="section-pad app-support-section">
        <div className="container support-panel">
          <div>
            <p className="eyebrow">Backed by 121 Customs Direct</p>
            <h2>Software with a brokerage behind it.</h2>
            <p>
              A UK customs company for HMRC declarations and consultancy. If a shipment is unusual
              or HMRC raises a query, our team is one message away.
            </p>
          </div>
          <div className="support-panel-media">
            <div className="media-frame">
              <Image
                src={containerShip}
                alt="Containers being loaded at a port"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <h2>Ready to file your first declaration?</h2>
          <p>Open the app and set up your business — or ask us to walk you through it.</p>
          <div className="closing-cta-actions">
            <a href={APP_URL} className="button button-light" target="_blank" rel="noopener noreferrer">
              Launch CustomsDirect <span aria-hidden="true">↗</span>
            </a>
            <Link href="/121customsdirect/contact" className="button button-outline button-outline-light">
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CustomsDirectApp
