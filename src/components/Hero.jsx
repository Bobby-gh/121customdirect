function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-pattern"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span>Trusted by UK businesses</span>
          </div>

          <h1 className="hero-title">
            Customs Declarations
            <br />
            <span className="highlight-text">Made Simple</span>
          </h1>

          <p className="hero-subtitle">
            121 Customs Direct connects your business directly with HMRC requirements. Our software solution streamlines customs declarations, linking complex processes with the people who need them most.
          </p>

          <div className="hero-actions">
            <a
              href="#"
              className="btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('solutions')
              }}
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16V12M12 8H12.01" />
              </svg>
              Learn About Our Solution
            </a>
            <a
              href="#"
              className="btn btn-outline btn-lg"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('contact')
              }}
            >
              Contact Us
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M12 5L19 12L12 19" />
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Declarations Processed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">First-Time Approval Rate</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-1">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="card-title">Declaration Status</span>
            </div>
            <div className="card-status active">
              <div className="status-indicator"></div>
              <span>Submitted Successfully</span>
            </div>
            <div className="card-details">
              <div className="detail-row">
                <span className="detail-label">EORI Number</span>
                <span className="detail-value">GB123456789000</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Commodity Code</span>
                <span className="detail-value">8471.30.01</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Declaration Type</span>
                <span className="detail-value">Import</span>
              </div>
            </div>
          </div>

          <div className="hero-card hero-card-2">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="card-title">Real-Time Tracking</span>
            </div>
            <div className="tracking-bar">
              <div className="tracking-fill"></div>
              <div className="tracking-marker" style={{ left: '75%' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="6" />
                </svg>
                <span>In Progress</span>
              </div>
            </div>
            <div className="tracking-steps">
              <div className="step completed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Submitted</span>
              </div>
              <div className="step completed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Verified</span>
              </div>
              <div className="step active">
                <div className="step-dot"></div>
                <span>Processing</span>
              </div>
              <div className="step">
                <div className="step-dot"></div>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
