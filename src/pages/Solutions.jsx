function Solutions({ onNavigate }) {
  const solutions = [
    {
      number: '01',
      title: 'Customs Declaration Software',
      description: 'Our flagship solution provides a complete, user-friendly platform for submitting HMRC customs declarations. Built with compliance at its core, it guides you through every step of the process.',
      features: ['Real-time HMRC Integration', 'Automated Validation', 'Multi-Commodity Support', 'Document Management'],
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
      title: 'Trade Compliance Advisory',
      description: 'Navigate complex trade regulations with confidence. Our expert advisors help you understand your obligations, classify goods correctly, and stay compliant with changing HMRC requirements.',
      features: ['Commodity Classification', 'Regulatory Updates', 'Risk Assessment', 'Training & Support'],
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
      title: 'API & System Integration',
      description: 'Seamlessly connect your existing systems with HMRC through our robust API. Automate your customs workflows and reduce manual effort while maintaining full compliance.',
      features: ['RESTful API', 'Webhook Notifications', 'Custom Workflows', '24/7 Uptime'],
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
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <a href="#" onClick={() => onNavigate('home')}>Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Solutions</span>
          </nav>
          <h1 className="page-title">
            Our <span className="highlight">Solutions</span>
          </h1>
          <p className="page-subtitle">
            Comprehensive customs declaration tools and services designed to make HMRC compliance simple, accurate, and accessible.
          </p>
        </div>
      </section>

      <section className="solutions-hero">
        <span className="section-label">What We Offer</span>
        <h2>Customs Direct - Your Complete HMRC Solution</h2>
        <p>
          At 121 Customs Direct, we believe that customs declarations should be straightforward. Our software connects the complex world of HMRC requirements with the people who need to use them. Whether you're importing goods, exporting products, or managing a supply chain, our solutions adapt to your needs.
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
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M12 5L19 12L12 19" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="solutions-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Transform Your Customs Process?</h2>
            <p>
              Get in touch with our team to discuss how 121 Customs Direct can help your business.
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('contact')
              }}
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
