import { useEffect } from 'react'

function About({ onNavigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <a href="#" onClick={() => onNavigate('home')}>Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </nav>
          <h1 className="page-title">
            About <span className="highlight">121 Customs Direct</span>
          </h1>
          <p className="page-subtitle">Connecting businesses with seamless customs solutions since day one.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-wrapper">
              <div className="story-image fade-in">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" rx="12" fill="#f0f4ff" />
                  <circle cx="200" cy="120" r="60" fill="#e0e7ff" stroke="#c7d2fe" strokeWidth="2" />
                  <path d="M150 220 L200 140 L250 220" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <circle cx="200" cy="120" r="8" fill="#3b82f6" />
                  <rect x="170" y="140" width="60" height="6" rx="3" fill="#818cf8" />
                  <rect x="180" y="155" width="40" height="4" rx="2" fill="#a5b4fc" />
                </svg>
              </div>
              <div className="story-image-accent"></div>
            </div>
            <div className="story-content fade-in">
              <span className="section-label">Our Story</span>
              <h2>Built to Bridge the Gap Between Customs and Business</h2>
              <p>
                At 121 Customs Direct, we saw firsthand how complex and overwhelming HMRC customs declarations could be for businesses of all sizes. The paperwork, the regulations, the constant changes - it was a barrier that prevented many companies from trading confidently.
              </p>
              <p>
                We set out to change that. Our mission was simple: create a software solution that makes customs declarations as straightforward as possible, linking the technical requirements of customs processes directly with the people who need to use them.
              </p>
              <p>
                What started as a vision to simplify trade compliance has grown into a trusted platform serving businesses across the UK, helping them navigate HMRC requirements with confidence and ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card fade-in">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To make HMRC customs declarations accessible, accurate, and effortless for every business - from sole traders to enterprise organizations. We believe that trade should flow smoothly, not stall at the border.
              </p>
            </div>
            <div className="mission-card fade-in">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                A future where customs compliance is no longer a burden but a seamless part of doing business. We envision a UK trade environment where technology bridges the gap between regulation and practice, empowering people to focus on what they do best.
              </p>
            </div>
            <div className="mission-card fade-in">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.63l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>
                <strong>Simplicity First:</strong> We build tools that are intuitive and easy to use.<br />
                <strong>Accuracy Matters:</strong> Every declaration is handled with precision.<br />
                <strong>People at the Center:</strong> Technology serves people, not the other way around.<br />
                <strong>Continuous Innovation:</strong> We keep evolving to meet changing trade needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Why Choose Us</span>
            <h2>Understanding the 121 Difference</h2>
            <p>
              The name 121 represents something fundamental to what we do - the direct, personal connection between our solution and your business needs.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card fade-in">
              <span className="why-number">01</span>
              <h3>Direct Connection</h3>
              <p>
                Just like a 1-to-1 relationship, our platform creates a direct link between your business and HMRC requirements. No intermediaries, no confusion - just clear, direct communication.
              </p>
            </div>
            <div className="why-card fade-in">
              <span className="why-number">02</span>
              <h3>Customs Meets People</h3>
              <p>
                We don't just build software; we build bridges. Our solution connects the technical world of customs declarations with the human beings who need to use them, making complex processes feel approachable.
              </p>
            </div>
            <div className="why-card fade-in">
              <span className="why-number">03</span>
              <h3>HMRC Expertise Built In</h3>
              <p>
                Our team understands HMRC inside and out. The knowledge that would take you years to accumulate is built into our platform, guiding you through every declaration with expert precision.
              </p>
            </div>
            <div className="why-card fade-in">
              <span className="why-number">04</span>
              <h3>Always Here for You</h3>
              <p>
                Trade doesn't keep business hours, and neither do we. With 24/7 support and real-time updates, you're never left wondering about the status of your declarations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in">
              <span className="stat-number" data-target="10000">0</span>
              <span className="stat-label">Declarations Processed</span>
            </div>
            <div className="stat-item fade-in">
              <span className="stat-number" data-target="500">0</span>
              <span className="stat-label">Businesses Served</span>
            </div>
            <div className="stat-item fade-in">
              <span className="stat-number" data-target="98">0</span>
              <span className="stat-label">First-Time Approval Rate</span>
            </div>
            <div className="stat-item fade-in">
              <span className="stat-number" data-target="24">0</span>
              <span className="stat-label">/7 Support Coverage</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Team</span>
            <h2>Experts Dedicated to Your Success</h2>
          </div>
          <div className="team-grid">
            <div className="team-card fade-in">
              <div className="team-avatar">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="110" r="50" fill="#e0e7ff" />
                  <circle cx="50" cy="40" r="20" fill="#c7d2fe" />
                  <path d="M20 110 Q20 70 50 70 Q80 70 80 110" fill="#c7d2fe" />
                </svg>
              </div>
              <div className="team-info">
                <h3>Customs Specialists</h3>
                <p>
                  Our team includes certified customs experts with deep knowledge of HMRC requirements and international trade regulations.
                </p>
              </div>
            </div>
            <div className="team-card fade-in">
              <div className="team-avatar">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="30" width="50" height="3" rx="1.5" fill="#818cf8" />
                  <rect x="25" y="38" width="40" height="3" rx="1.5" fill="#818cf8" />
                  <rect x="25" y="46" width="45" height="3" rx="1.5" fill="#818cf8" />
                  <circle cx="50" cy="70" r="18" fill="#c7d2fe" />
                </svg>
              </div>
              <div className="team-info">
                <h3>Software Engineers</h3>
                <p>
                  Talented developers who build reliable, secure, and user-friendly platforms that handle the complexities of customs declarations.
                </p>
              </div>
            </div>
            <div className="team-card fade-in">
              <div className="team-avatar">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 60 Q30 40 50 40 Q70 40 70 60 L70 80 L30 80 Z" fill="#c7d2fe" />
                  <circle cx="50" cy="25" r="5" fill="#818cf8" />
                  <circle cx="38" cy="22" r="4" fill="#a5b4fc" />
                  <circle cx="62" cy="22" r="4" fill="#a5b4fc" />
                </svg>
              </div>
              <div className="team-info">
                <h3>Customer Success</h3>
                <p>
                  Dedicated support professionals who are here to help you succeed, available around the clock to answer questions and solve problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Simplify Your Customs Declarations?</h2>
            <p>Join the businesses that trust 121 Customs Direct for their HMRC compliance needs.</p>
            <a
              href="#"
              className="btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('contact')
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
