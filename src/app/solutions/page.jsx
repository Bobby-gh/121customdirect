import Link from 'next/link'
import Image from 'next/image'
import PageHero from '../../components/PageHero'
import AppPreview from '../../components/AppPreview'
import ServiceIcon from '../../components/ServiceIcon'
import { businessMeeting } from '../../components/images'

const APP_URL = 'https://customs-uk.vercel.app/'

const solutions = [
  {
    number: '01',
    title: 'Import declarations',
    icon: 'document',
    description: 'Guided CDS import entries for goods arriving in Great Britain, with duty and VAT calculated.',
    features: ['CDS entries', 'Duty & VAT', 'Validation', 'Audit trail'],
  },
  {
    number: '02',
    title: 'Export declarations',
    icon: 'export',
    description: 'Export entries filed directly with HMRC CDS, with proof of export kept on record.',
    features: ['Export entries', 'Proof of export', 'Documents', 'Record keeping'],
  },
  {
    number: '03',
    title: 'Safety & security',
    icon: 'shield',
    description: 'Pre-arrival entry summary (ENS) declarations for goods arriving in Great Britain.',
    features: ['GB ENS', 'Pre-arrival', 'Linked to CDS', 'Records'],
  },
  {
    number: '04',
    title: 'Transit & GVMS',
    icon: 'route',
    description: 'NCTS transit movements and Goods Movement References for RoRo crossings.',
    features: ['NCTS', 'T1 & T2', 'GMR', 'Port references'],
  },
  {
    number: '05',
    title: 'Duty & tax tools',
    icon: 'calculator',
    description: 'Commodity codes, duty rates and import VAT estimates inside the declaration.',
    features: ['Classification', 'Preference', 'Reliefs', 'Cost estimates'],
  },
  {
    number: '06',
    title: 'Brokerage support',
    icon: 'support',
    description: 'Our customs team can prepare, check or file declarations on your behalf.',
    features: ['Managed filing', 'Entry review', 'HMRC queries', 'Training'],
  },
]

const faqs = [
  {
    question: 'What do you need to prepare a declaration?',
    answer:
      'Commercial invoice, packing list, transport document, commodity codes, values and origin. If anything is missing, the software flags it before you submit.',
  },
  {
    question: 'Is the app software or a brokerage?',
    answer:
      'It is self-service software. Your team files its own declarations using guided entries and built-in checks — or our customs team can file on your behalf.',
  },
  {
    question: 'Do I need my own HMRC authorisation?',
    answer:
      'Yes. You authorise the app against your GB EORI in CDS. We help you set this up during onboarding.',
  },
  {
    question: 'Does the software work for occasional importers?',
    answer: 'Yes. File a single declaration, or set up a retained account for regular trade.',
  },
]

function SolutionsContent() {
  return (
    <main className="solutions-page">
      <PageHero label="Customs declaration services" />

      <section className="section-pad page-intro">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Our services</p>
            <h1 className="page-title-lg">Declarations, software and customs support.</h1>
          </div>
          <div>
            <p className="lead">
              We support declarants moving goods into and out of Great Britain, with everything the
              declaration needs in one place. File it yourself in the app, or ask our customs
              team to prepare and submit it for you.
            </p>
            <p>Use one service or combine them.</p>
          </div>
        </div>
      </section>

      {/* App spotlight */}
      <section className="solutions-app-spotlight">
        <div className="container app-feature-banner">
          <div className="app-feature-copy">
            <p className="eyebrow eyebrow-light">
              Declaration app
              <span className="app-pill app-pill-light">App</span>
            </p>
            <h2>Submit your own HMRC declarations.</h2>
            <p>
              Our declaration platform for UK importers, exporters and forwarders. Build an entry,
              see the duty and VAT, send it to CDS and track it to clearance.
            </p>
            <div className="app-feature-actions">
              <Link href="/solutions/customsdirect" className="button button-light">
                Explore the app <span aria-hidden="true">→</span>
              </Link>
              <a
                href={APP_URL}
                className="text-link text-link-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the app <span aria-hidden="true">↗</span>
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
                <div className="service-card-visual">
                  <span className="service-card-icon">
                    <ServiceIcon name={solution.icon} />
                  </span>
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
                  <Link href="/contact" className="text-link">
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
            <h2>One platform, one record.</h2>
            <p>
              Everything the declaration needs sits together — no chasing documents across email
              and spreadsheets.
            </p>
            <ul className="tick-list tick-list-wide">
              <li>CDS import and export entries in one workspace</li>
              <li>Built-in checks against HMRC rules before submission</li>
              <li>Duty and import VAT calculated before you file</li>
              <li>Documents attached to every declaration</li>
              <li>HMRC responses and submission history kept</li>
              <li>Optional review by our customs team</li>
            </ul>
          </div>
          <div className="split-visual">
            <div className="media-frame">
              <Image
                src={businessMeeting}
                alt="Customs specialists reviewing declarations with a client"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
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
            <Link href="/contact" className="text-link">
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
          <h2>Not sure which declaration you need?</h2>
          <p>Tell us what you are importing or exporting and we will point you to the right place.</p>
          <Link href="/contact" className="button button-light">
            Contact us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SolutionsContent
