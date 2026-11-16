import AppBanner from './AppBanner'

/**
 * Branded page banner for the declarant-support site.
 * Leads with a Customs Portal screen recreated in CSS instead of freight photography.
 */
export default function PageHero({ label = 'Customs software', variant = 'dashboard' }) {
  return (
    <section className="page-banner page-banner-brand" aria-label={label}>
      <div className="page-banner-grid" aria-hidden="true" />
      <div className="page-banner-glow" aria-hidden="true" />

      <div className="container page-banner-inner">
        <div className="page-banner-window">
          <div className="page-banner-window-bar">
            <i />
            <i />
            <i />
            <span>Customs Portal · {variant === 'account' ? 'Account' : 'Dashboard'}</span>
          </div>
          <AppBanner variant={variant} />
        </div>

        <div className="page-banner-meta">
          <span className="page-banner-chip">HMRC CDS</span>
          <span className="page-banner-chip">GB import &amp; export</span>
          <span className="page-banner-chip">Declarant support</span>
        </div>
      </div>
    </section>
  )
}
