/**
 * Banner-sized renderings of the Customs Portal application screens.
 * Recreated in HTML/CSS from the app so the banners stay sharp, responsive and
 * free of placeholder test data.
 */
const months = [8, 14, 11, 18, 22, 17, 54, 9, 16, 21, 12, 6]

function Sidebar() {
  return (
    <div className="app-banner-side">
      <div className="app-banner-logo">
        <span className="app-banner-logo-mark">C</span>
        <strong>Customs Portal</strong>
      </div>
      <div className="app-banner-nav">
        <span className="is-active">Overview</span>
        <span>CDS</span>
        <span>GVMS</span>
        <span>Reference</span>
      </div>
      <div className="app-banner-nav app-banner-nav-bottom">
        <span>Account</span>
        <span>Plans &amp; pricing</span>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="app-banner-main">
      <div className="app-banner-top">
        <strong>Dashboard</strong>
        <span className="app-banner-live">Live</span>
        <span className="app-banner-search">Search…</span>
      </div>

      <div className="app-banner-stats">
        <div className="app-banner-stat">
          <span className="app-banner-stat-label">Total declarations</span>
          <strong>228</strong>
          <em className="is-up">↗ 12%</em>
          <i className="app-banner-spark is-blue" />
        </div>
        <div className="app-banner-stat">
          <span className="app-banner-stat-label">Pending</span>
          <strong>16</strong>
          <em>— No change</em>
          <i className="app-banner-spark" />
        </div>
        <div className="app-banner-stat">
          <span className="app-banner-stat-label">Cleared</span>
          <strong>201</strong>
          <em className="is-up">↗ 5%</em>
          <i className="app-banner-spark is-teal" />
        </div>
        <div className="app-banner-stat">
          <span className="app-banner-stat-label">Rejected</span>
          <strong>11</strong>
          <em className="is-down">↘ 8%</em>
          <i className="app-banner-spark is-red" />
        </div>
      </div>

      <div className="app-banner-panels">
        <div className="app-banner-panel">
          <div className="app-banner-panel-head">
            <span>Monthly declarations</span>
            <span className="app-banner-toggles">
              <i className="is-on">CDS</i>
              <i>GVMS</i>
            </span>
          </div>
          <div className="app-banner-bars">
            {months.map((height, index) => (
              <i key={index} style={{ height: `${height * 2}px` }} />
            ))}
          </div>
          <div className="app-banner-months" aria-hidden="true">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="app-banner-panel app-banner-status">
          <div className="app-banner-panel-head">
            <span>Status breakdown</span>
          </div>
          <div className="app-banner-donut">
            <span>88%</span>
          </div>
          <div className="app-banner-legend">
            <span><i className="is-teal" /> Cleared <b>201</b></span>
            <span><i className="is-red" /> Rejected <b>11</b></span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Account() {
  return (
    <div className="app-banner-main">
      <div className="app-banner-top">
        <strong>Account</strong>
        <span className="app-banner-live">Verified</span>
        <span className="app-banner-search">Search…</span>
      </div>

      <div className="app-banner-members">
        <div><strong>9</strong><span>Total members</span></div>
        <div><strong>2</strong><span>Admins</span></div>
        <div><strong>4</strong><span>Clients</span></div>
      </div>

      <div className="app-banner-plan">
        <div>
          <span className="app-banner-plan-label">Your plan</span>
          <strong>Growth</strong>
          <span className="app-banner-plan-price">£189 <i>/ month</i></span>
          <span className="app-banner-plan-note">200 declarations included each month</span>
        </div>
        <span className="app-banner-trial">Trial</span>
      </div>

      <div className="app-banner-org">
        <div className="app-banner-org-row">
          <span>HMRC registration</span>
          <strong>GB 55320 27348 52</strong>
          <em>Verified</em>
        </div>
        <div className="app-banner-org-row">
          <span>Companies House</span>
          <strong>Active</strong>
          <em>Active</em>
        </div>
      </div>
    </div>
  )
}

export default function AppBanner({ variant = 'dashboard' }) {
  return (
    <div className={`app-banner app-banner-${variant}`} aria-hidden="true">
      <Sidebar />
      {variant === 'account' ? <Account /> : <Dashboard />}
    </div>
  )
}
