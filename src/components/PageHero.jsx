import Link from 'next/link'

export default function PageHero({ eyebrow, title, description, action }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
          <Link href="/121customsdirect">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <p className="page-hero-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-description">{description}</p>
        {action && (
          <Link href={action.href} className="button button-light">
            {action.label}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
