import Link from 'next/link'
import PageHero from '../../../components/PageHero'

function Solutions() {
  const solutions = [
    {
      number: '01',
      title: 'Customs declarations',
      description: 'Support with the information and steps involved in preparing customs declarations for goods moving across borders.',
      features: ['Declaration preparation', 'Shipment details', 'Supporting information', 'Next-step guidance'],
      color: 'blue',
      image: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Guidance and advice',
      description: 'Talk through customs questions, understand what information may be needed and get a clearer view of the process ahead.',
      features: ['Practical guidance', 'Requirements explained', 'Questions answered', 'Support for your situation'],
      color: 'yellow',
      image: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Connected workflows',
      description: 'Explore how customs processes can sit more naturally alongside the systems and routines your business already uses.',
      features: ['Workflow discussions', 'Process review', 'System requirements', 'A practical way forward'],
      color: 'green',
      image: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
  ]

  return (
    <div className="solutions-page">
      <PageHero
        eyebrow="Our services"
        title="Practical help for customs work."
        description="From a single declaration question to a broader workflow, start with the support that fits your business."
        action={{ href: '/121customsdirect/contact', label: 'Talk through what you need' }}
      />

      <section className="solutions-hero">
        <span className="section-label">What we offer</span>
        <h2>A considered approach to customs.</h2>
        <p>
          Tell us what you are moving and where you are getting stuck. We can help you understand
          the declaration process, the details to gather and the possible next steps.
        </p>
      </section>

      <section className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className={`solution-card fade-in`}>
            <div className="solution-image">{solution.image}</div>
            <div className="solution-card-body">
              <span className="solution-number">{solution.number}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="solution-features">
                {solution.features.map((feature, fIndex) => (
                  <span key={fIndex} className="solution-feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              <Link href="/121customsdirect/contact">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M12 5L19 12L12 19" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="solutions-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Not sure where to start?</h2>
            <p>
            Tell us a little about your customs question. We can help you work out what to do next.
            </p>
            <Link
              href="/121customsdirect/contact"
              className="btn btn-primary btn-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
