const APP_URL = 'https://customs-uk.vercel.app/'

const features = [
  {
    label: 'Cloud-based platform',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    label: 'AI-assisted workflows',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    label: 'Training & support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    label: 'Multi-system coverage',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero-saas">
      <div className="hero-saas-bg" aria-hidden="true">
        <div className="hero-saas-sky" />
        <svg className="hero-saas-city" viewBox="0 0 1440 260" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cityGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9fd4ea" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0a2a52" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* skyline silhouette */}
          <path
            d="M0,260 L0,190 L40,190 L40,150 L70,150 L70,120 L95,120 L95,170 L130,170 L130,140 L160,140 L160,100 L185,100 L185,160 L220,160 L220,130 L250,130 L250,180 L290,180 L290,110 L315,110 L315,90 L330,90 L330,110 L355,110 L355,175 L395,175 L395,145 L425,145 L425,120 L450,120 L450,165 L485,165 L485,135 L515,135 L515,190 L560,190 L560,150 L590,150 L590,105 L620,105 L620,100 L635,100 L635,105 L665,105 L665,160 L700,160 L700,125 L730,125 L730,180 L770,180 L770,140 L800,140 L800,110 L825,110 L825,170 L860,170 L860,130 L890,130 L890,195 L935,195 L935,155 L965,155 L965,115 L990,115 L990,100 L1005,100 L1005,115 L1030,115 L1030,170 L1070,170 L1070,135 L1100,135 L1100,190 L1145,190 L1145,150 L1175,150 L1175,120 L1200,120 L1200,165 L1235,165 L1235,140 L1265,140 L1265,195 L1310,195 L1310,160 L1340,160 L1340,130 L1365,130 L1365,185 L1400,185 L1400,200 L1440,200 L1440,260 Z"
            fill="url(#cityGrad)"
          />
          {/* London Eye */}
          <g transform="translate(500,60)" opacity="0.85">
            <circle cx="0" cy="40" r="34" fill="none" stroke="#0a2a52" strokeWidth="2.5" />
            <circle cx="0" cy="40" r="26" fill="none" stroke="#0a2a52" strokeWidth="1" />
            <line x1="0" y1="6" x2="0" y2="74" stroke="#0a2a52" strokeWidth="1" />
            <line x1="-34" y1="40" x2="34" y2="40" stroke="#0a2a52" strokeWidth="1" />
            <line x1="-24" y1="16" x2="24" y2="64" stroke="#0a2a52" strokeWidth="1" />
            <line x1="-24" y1="64" x2="24" y2="16" stroke="#0a2a52" strokeWidth="1" />
            <rect x="-3" y="74" width="6" height="16" fill="#0a2a52" />
          </g>
          {/* Big Ben */}
          <g transform="translate(1080,40)" opacity="0.9">
            <rect x="-12" y="30" width="24" height="130" fill="#0a2a52" />
            <polygon points="-12,30 12,30 0,0" fill="#0a2a52" />
            <rect x="-16" y="160" width="32" height="10" fill="#0a2a52" />
            <circle cx="0" cy="62" r="6" fill="#f5c542" />
            <rect x="-2" y="78" width="4" height="90" fill="#f5c542" opacity="0.6" />
          </g>
        </svg>
        <div className="hero-saas-landscape" />
        <div className="hero-saas-road" />
      </div>

      <div className="container hero-saas-grid">
        <div className="hero-saas-copy">
          <p className="hero-saas-eyebrow">CUSTOMS SOFTWARE PROVIDER FOR UK &amp; EU TRADE</p>
          <h1 className="hero-saas-title">
            <span>One Platform for</span>
            <span className="hero-saas-title-green">Customs Declarations</span>
            <span>and Border Movements</span>
          </h1>
          <p className="hero-saas-sub">
            Prepare, validate, submit and track customs declarations, transit, safety &amp; security
            filings and border movements, with AI-assisted document processing and white-glove support.
          </p>
          <div className="hero-saas-actions">
            <a
              href={APP_URL}
              className="hero-saas-btn hero-saas-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now <span aria-hidden="true">→</span>
            </a>
            <a href="/121customsdirect/contact" className="hero-saas-btn hero-saas-btn-secondary">
              Book a Demo
            </a>
          </div>
          <ul className="hero-saas-features">
            {features.map((feature) => (
              <li key={feature.label}>
                <span className="hero-saas-feature-icon">{feature.icon}</span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-saas-visual">
          <div className="hero-mockup">
            <div className="hero-mockup-chrome">
              <span className="hero-mockup-dots">
                <i /><i /><i />
              </span>
              <span className="hero-mockup-url">app.customs-declarations.uk</span>
              <span className="hero-mockup-account">
                YOUR LOGISTICS LTD - Account <span aria-hidden="true">▾</span>
              </span>
            </div>
            <div className="hero-mockup-pill">
              <span className="hero-mockup-pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </span>
              <span>
                <strong>Drafting from your documents</strong>
                <small>Invoice, packing list and CMR read - 3 files.</small>
              </span>
            </div>
            <div className="hero-mockup-body">
              <aside className="hero-mockup-sidebar">
                {['document', 'folder', 'check', 'shield', 'user', 'truck', 'settings'].map((item, index) => (
                  <span key={item} className={index === 0 ? 'is-active' : ''}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {item === 'document' && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" />}
                      {item === 'folder' && <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />}
                      {item === 'check' && <path d="M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />}
                      {item === 'shield' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                      {item === 'user' && <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />}
                      {item === 'truck' && <path d="M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />}
                      {item === 'settings' && <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />}
                    </svg>
                  </span>
                ))}
              </aside>
              <main className="hero-mockup-main">
                <div className="hero-mockup-main-header">
                  <span className="hero-mockup-check">✓</span> Create New CDS Declaration
                </div>
                <div className="hero-mockup-card">
                  <div className="hero-mockup-warning">
                    <span>⚠</span> AI-assisted extraction - review required. Check the results against
                    your documents before you submit.
                  </div>
                  <div className="hero-mockup-card-body">
                    <div className="hero-mockup-dropzone">
                      <div className="hero-mockup-dropzone-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12" />
                        </svg>
                      </div>
                      <strong>Drag &amp; drop your documents here</strong>
                      <small>PDF, PNG, JPG, DOCX, XLSX</small>
                    </div>
                    <ul className="hero-mockup-files">
                      <li>
                        <span className="file-icon file-icon-red">📄</span>
                        <span className="file-name">Commercial_Invoice_INV-2041.pdf</span>
                        <span className="file-size">24 KB</span>
                      </li>
                      <li>
                        <span className="file-icon file-icon-green">📊</span>
                        <span className="file-name">Packing_List_INV-2041.xlsx</span>
                        <span className="file-size">18 KB</span>
                      </li>
                      <li>
                        <span className="file-icon file-icon-red">📄</span>
                        <span className="file-name">CMR-44871.pdf</span>
                        <span className="file-size">31 KB</span>
                      </li>
                    </ul>
                  </div>
                  <div className="hero-mockup-card-footer">
                    <span className="hero-mockup-badge">3/5 files selected</span>
                    <button type="button" className="hero-mockup-extract">
                      ✓ Extract Documents
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>

          <div className="hero-step-cards">
            <article className="hero-step-card">
              <h4>1. Upload documents</h4>
              <div className="hero-step-drop">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12" />
                </svg>
                <span>Drag &amp; drop your documents or click to upload</span>
                <small>PDF, XLS, CSV, DOCX</small>
              </div>
            </article>
            <article className="hero-step-card">
              <h4>2. AI data extraction</h4>
              <div className="hero-step-extract">
                <span className="hero-step-doc">📄</span>
                <span className="hero-step-doc">📦</span>
                <span className="hero-step-doc">🚚</span>
                <span className="hero-step-ai">AI</span>
                <div className="hero-step-lines">
                  <i /><i /><i />
                </div>
                <span className="hero-step-check">✓</span>
              </div>
            </article>
            <article className="hero-step-card">
              <h4>3. Validate &amp; review</h4>
              <ul className="hero-step-list">
                <li><span>✓</span> Data validation</li>
                <li><span>✓</span> Compliance checks</li>
                <li><span>✓</span> Error detection</li>
                <li><span>✓</span> Ready to submit</li>
              </ul>
            </article>
            <article className="hero-step-card">
              <h4>4. Submit to authorities</h4>
              <div className="hero-step-submit">
                <div>
                  <button type="button">✓ GB CDS</button>
                  <button type="button">EU ICS2</button>
                  <button type="button">GVMS</button>
                </div>
                <div>
                  <button type="button">GB S&amp;S / ENS</button>
                  <button type="button">NCTS6</button>
                  <button type="button">French ELO</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
