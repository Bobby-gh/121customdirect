import Link from 'next/link'
import Image from 'next/image'
import Hero from '../../components/Hero'
import EnquiryForm from '../../components/EnquiryForm'
import AppPreview from '../../components/AppPreview'
import ServiceIcon from '../../components/ServiceIcon'
import { businessMeeting } from '../../components/images'

const APP_URL = 'https://customs-uk.vercel.app/'

const services = [
  {
    number: '01',
    title: 'CDS declarations',
    icon: 'document',
    copy: 'Guided import and export entries, validated against HMRC rules and submitted to CDS.',
    points: ['Import & export entries', 'Built-in validation', 'Direct CDS submission'],
  },
  {
    number: '02',
    title: 'Duty & VAT tools',
    icon: 'calculator',
    copy: 'See what a declaration will cost before anything is sent to HMRC.',
    points: ['Duty estimates', 'Import VAT', 'Preference & reliefs'],
  },
  {
    number: '03',
    title: 'Customs support',
    icon: 'support',
    copy: 'Software backed by a team that prepares and files declarations every day.',
    points: ['Onboarding & training', 'Entry reviews', 'HMRC queries'],
  },
]

const declarationTypes = [
  {
    title: 'Import declarations',
    detail: 'Guided CDS entries for goods arriving in Great Britain, with duty and VAT calculated as you go.',
  },
  {
    title: 'Export declarations',
    detail: 'Export entries with proof of export, filed from the same workspace.',
  },
  {
    title: 'Transit & GVMS',
    detail: 'NCTS transit movements and Goods Movement References for RoRo crossings.',
  },
  {
    title: 'Safety & security',
    detail: 'Entry summary (ENS) declarations submitted before goods arrive.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Create your account',
    detail: 'Register, add your business details and GB EORI.',
  },
  {
    number: '02',
    title: 'Authorise with HMRC',
    detail: 'Connect CustomsDirect to CDS so declarations can be filed.',
  },
  {
    number: '03',
    title: 'Build the entry',
    detail: 'Guided fields, commodity codes and checks as you type.',
  },
  {
    number: '04',
    title: 'Submit and track',
    detail: 'Send to HMRC CDS and follow the declaration to clearance.',
  },
]

const stats = [
  { value: '12+', label: 'Years in customs' },
  { value: '8,400+', label: 'Declarations filed' },
  { value: '96%', label: 'Accepted first time' },
  { value: '24h', label: 'Support response' },
]

const capabilities = [
  'Guided CDS import and export declarations',
  'Checks against HMRC rules before submission',
  'Duty and import VAT calculated as you enter data',
  'Documents attached to every declaration',
  'Submission history and a full audit trail',
  'Optional review by our customs team',
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
            <p className="eyebrow">What we do</p>
            <h2 className="page-title-lg">Everything a declarant needs to file with HMRC.</h2>
            <p className="lead">
              We support declarants moving goods into and out of Great Britain. CustomsDirect brings
              the declaration, the checks and the customs support together — so you can prepare and
              submit to HMRC’s Customs Declaration Service with confidence.
            </p>
            <div className="home-welcome-actions">
              <a
                href={APP_URL}
                className="button button-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the app
                <span aria-hidden="true">↗</span>
              </a>
              <Link href="/121customsdirect/solutions/customsdirect" className="text-link">
                See how it works
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
              <h2>Software, duties, support.</h2>
            </div>
            <Link href="/121customsdirect/solutions" className="text-link">
              All services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="card-grid card-grid-3">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-visual">
                  <span className="service-card-icon">
                    <ServiceIcon name={service.icon} />
                  </span>
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
              CustomsDirect is the declaration platform we support. Build an entry, see the duty and
              VAT, submit to HMRC’s CDS — or have us check it first.
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
                href={APP_URL}
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

      {/* Declaration types */}
      <section className="section-pad home-freight">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">What you can file</p>
              <h2>One workspace, every declaration.</h2>
            </div>
            <p className="section-note">
              Import, export, transit and safety &amp; security — built around HMRC’s Customs
              Declaration Service.
            </p>
          </div>

          <div className="freight-grid">
            {declarationTypes.map((mode) => (
              <article className="declaration-card" key={mode.title}>
                <span className="declaration-card-mark" aria-hidden="true">
                  ✓
                </span>
                <div className="declaration-card-body">
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
          <div className="home-about-panel">
            <AppPreview />
            <div className="home-about-note">
              <span className="media-badge-value">Support included</span>
              <span className="media-badge-label">
                A UK customs team alongside declarants moving goods in and out of GB
              </span>
            </div>
          </div>

          <div className="split-copy">
            <p className="eyebrow">About us</p>
            <h2>Software backed by people who file declarations.</h2>
            <p>
              We support declarants on the CustomsDirect platform every day. We know where entries
              go wrong — and we are on hand when one needs checking.
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

      {/* Support team */}
      <section
        className="people-band"
        style={{ '--people-image': `url(${businessMeeting})` }}
      >
        <div className="container">
          <div className="people-band-inner">
            <p className="eyebrow">Support</p>
            <h2>A customs team alongside the software.</h2>
            <p>
              When an entry needs checking or HMRC raises a query, talk to customs people who work
              with CDS every day — whether you file it yourself or ask us to.
            </p>
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
              <h2>Four steps to a submitted declaration.</h2>
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
              <p className="eyebrow">Who files with us</p>
              <h2>Trusted by traders and forwarders.</h2>
            </div>
            <p className="section-note">
              Importers, exporters and customs agents filing through CustomsDirect.
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
            <p className="eyebrow">Talk to us</p>
            <h2>Not sure where to start?</h2>
            <p>
              Tell us what you are importing or exporting and we will show you how it is declared —
              or book a walkthrough of the software.
            </p>
            <ul className="contact-prompt-list">
              <li>What are you importing or exporting?</li>
              <li>Are you filing yourself or do you need our team?</li>
              <li>Would you like a walkthrough of CustomsDirect?</li>
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
          <h2>Ready to submit your first declaration?</h2>
          <p>Open CustomsDirect and set up your business — or ask us to walk you through it.</p>
          <div className="closing-cta-actions">
            <a
              href={APP_URL}
              className="button button-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open CustomsDirect <span aria-hidden="true">↗</span>
            </a>
            <Link
              href="/121customsdirect/contact"
              className="button button-outline button-outline-light"
            >
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
