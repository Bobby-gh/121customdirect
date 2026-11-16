/**
 * Branded page banner for the software-led site.
 * Rendered in CSS rather than photography so the product, not freight imagery, leads.
 */
export default function PageHero({ label = 'Customs software' }) {
  return (
    <section className="page-banner page-banner-brand" aria-label={label}>
      <div className="page-banner-grid" aria-hidden="true" />
      <div className="page-banner-glow" aria-hidden="true" />

      <div className="container page-banner-inner">
        <div className="page-banner-window" aria-hidden="true">
          <div className="page-banner-window-bar">
            <i />
            <i />
            <i />
            <span>CustomsDirect · CDS</span>
          </div>
          <div className="page-banner-window-body">
            <div className="page-banner-window-side">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="page-banner-window-main">
              <span className="page-banner-line is-wide" />
              <span className="page-banner-line" />
              <span className="page-banner-line is-short" />
              <div className="page-banner-window-blocks">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
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
