/**
 * Stylised preview of the CustomsDirect app interface.
 * Built in HTML/CSS rather than a screenshot so it stays crisp and on-brand.
 */
export default function AppPreview() {
  return (
    <div className="app-preview" aria-label="Preview of the CustomsDirect declaration app">
      <div className="app-preview-bar">
        <span className="app-preview-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="app-preview-url">app.customsdirect.uk</span>
        <span className="app-preview-tag">CDS</span>
      </div>

      <div className="app-preview-body">
        <div className="app-preview-head">
          <div>
            <p className="app-preview-eyebrow">Import declaration</p>
            <p className="app-preview-ref">CD-2026-0418</p>
          </div>
          <span className="app-status">
            <i aria-hidden="true" />
            Cleared
          </span>
        </div>

        <div className="app-preview-grid">
          <div>
            <span>Goods</span>
            <strong>Machinery parts</strong>
          </div>
          <div>
            <span>Origin</span>
            <strong>Shenzhen, CN</strong>
          </div>
          <div>
            <span>Commodity code</span>
            <strong>8479 90 70</strong>
          </div>
          <div>
            <span>Procedure</span>
            <strong>Import · 40 00</strong>
          </div>
        </div>

        <div className="app-preview-totals">
          <div>
            <span>Customs duty</span>
            <strong>£1,240.00</strong>
          </div>
          <div>
            <span>Import VAT</span>
            <strong>£2,480.00</strong>
          </div>
          <div>
            <span>Total due</span>
            <strong>£3,720.00</strong>
          </div>
        </div>

        <ul className="app-preview-steps">
          <li className="is-done">Declarant details confirmed</li>
          <li className="is-done">Documents attached</li>
          <li className="is-done">Entry submitted to HMRC</li>
          <li className="is-current">Clearance granted</li>
        </ul>
      </div>
    </div>
  )
}
