import HeroSlider from './HeroSlider'

const APP_URL = 'https://customs-uk.vercel.app/'

const systems = ['GB CDS', 'EU ICS2', 'NCTS6', 'GVMS', 'French ELO', 'GB S&S']

export default function Hero() {
  return (
    <section className="hero-saas">
      <div className="hero-saas-bg" aria-hidden="true">
        <div className="hero-saas-sky" />
        <div className="hero-saas-grid-lines" />
        <svg className="hero-saas-city" viewBox="0 0 1440 260" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cityGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b3f6e" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#08376B" stopOpacity="0.92" />
            </linearGradient>
          </defs>
          <path
            d="M0,260 L0,190 L40,190 L40,150 L70,150 L70,120 L95,120 L95,170 L130,170 L130,140 L160,140 L160,100 L185,100 L185,160 L220,160 L220,130 L250,130 L250,180 L290,180 L290,110 L315,110 L315,90 L330,90 L330,110 L355,110 L355,175 L395,175 L395,145 L425,145 L425,120 L450,120 L450,165 L485,165 L485,135 L515,135 L515,190 L560,190 L560,150 L590,150 L590,105 L620,105 L620,100 L635,100 L635,105 L665,105 L665,160 L700,160 L700,125 L730,125 L730,180 L770,180 L770,140 L800,140 L800,110 L825,110 L825,170 L860,170 L860,130 L890,130 L890,195 L935,195 L935,155 L965,155 L965,115 L990,115 L990,100 L1005,100 L1005,115 L1030,115 L1030,170 L1070,170 L1070,135 L1100,135 L1100,190 L1145,190 L1145,150 L1175,150 L1175,120 L1200,120 L1200,165 L1235,165 L1235,140 L1265,140 L1265,195 L1310,195 L1310,160 L1340,160 L1340,130 L1365,130 L1365,185 L1400,185 L1400,200 L1440,200 L1440,260 Z"
            fill="url(#cityGrad)"
          />
          <g transform="translate(500,60)" opacity="0.8">
            <circle cx="0" cy="40" r="34" fill="none" stroke="#08376B" strokeWidth="2.5" />
            <circle cx="0" cy="40" r="26" fill="none" stroke="#08376B" strokeWidth="1" />
            <line x1="0" y1="6" x2="0" y2="74" stroke="#08376B" strokeWidth="1" />
            <line x1="-34" y1="40" x2="34" y2="40" stroke="#08376B" strokeWidth="1" />
            <line x1="-24" y1="16" x2="24" y2="64" stroke="#08376B" strokeWidth="1" />
            <line x1="-24" y1="64" x2="24" y2="16" stroke="#08376B" strokeWidth="1" />
            <rect x="-3" y="74" width="6" height="16" fill="#08376B" />
          </g>
          <g transform="translate(1080,40)" opacity="0.85">
            <rect x="-12" y="30" width="24" height="130" fill="#08376B" />
            <polygon points="-12,30 12,30 0,0" fill="#08376B" />
            <rect x="-16" y="160" width="32" height="10" fill="#08376B" />
            <circle cx="0" cy="62" r="6" fill="#04B1C4" />
            <rect x="-2" y="78" width="4" height="90" fill="#04B1C4" opacity="0.55" />
          </g>
        </svg>
        <div className="hero-saas-horizon" />
      </div>

      <div className="container hero-saas-grid">
        <div className="hero-saas-copy">
          <p className="hero-saas-eyebrow">
            <span className="hero-saas-dot" aria-hidden="true" />
            Customs software for GB &amp; EU trade
          </p>
          <h1 className="hero-saas-title">
            <span>Customs declarations,</span>
            <span className="hero-saas-title-accent">made clear.</span>
          </h1>
          <p className="hero-saas-sub">
            Prepare, validate and submit to HMRC CDS — with AI document processing and a UK customs
            team behind you.
          </p>
          <div className="hero-saas-actions">
            <a
              href={APP_URL}
              className="hero-saas-btn hero-saas-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the app <span aria-hidden="true">↗</span>
            </a>
            <a href="/121customsdirect/contact" className="hero-saas-btn hero-saas-btn-secondary">
              Book a demo
            </a>
          </div>
          <ul className="hero-saas-chips">
            <li>
              <span aria-hidden="true">✓</span> CDS ready
            </li>
            <li>
              <span aria-hidden="true">✦</span> AI extraction
            </li>
            <li>
              <span aria-hidden="true">●</span> UK support
            </li>
          </ul>
        </div>

        <div className="hero-saas-visual">
          <HeroSlider />
        </div>
      </div>

      <div className="container hero-saas-strip">
        <span>One workspace for</span>
        <ul>
          {systems.map((system) => (
            <li key={system}>{system}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
