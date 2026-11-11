'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../../components/PageHero'
import { contactBanners, roadDusk, warehouseAisle } from '../../../components/images'

const initialValues = {
  name: '',
  email: '',
  company: '',
  mode: 'Sea freight',
  origin: '',
  destination: '',
  goods: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  return (
    <main className="contact-page">
      <PageHero images={contactBanners} label="Port banner" />

      <section className="section-pad page-intro">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="page-title-lg">Let’s talk through your shipment.</h1>
          </div>
          <div>
            <p className="lead">
              A declaration, a quote or a question about where to begin — tell us what is on your
              mind.
            </p>
            <p>We reply within one working day.</p>
          </div>
        </div>
      </section>

      <section className="section-pad contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <p className="eyebrow">A useful place to start</p>
            <h2>Give us a little context.</h2>
            <p>Share what you are trying to do and where you are stuck.</p>

            <ul className="contact-prompt-list">
              <li>What are you importing or exporting?</li>
              <li>Where is the shipment travelling from and to?</li>
              <li>What would you like help understanding?</li>
            </ul>

            <div className="contact-details">
              <div className="contact-detail-row">
                <span className="contact-detail-label">Email</span>
                <a href="mailto:hello@121customsdirect.co.uk">hello@121customsdirect.co.uk</a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Phone</span>
                <a href="tel:+441210000121">0121 000 0121</a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Hours</span>
                <span>Monday to Friday, 08:30 – 17:30</span>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Based in</span>
                <span>Birmingham, United Kingdom</span>
              </div>
            </div>

            <div className="media-frame media-contact">
              <Image
                src={warehouseAisle}
                alt="A warehouse aisle lined with pallets ready for dispatch"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send an enquiry</h2>
            <p>Tell us about the shipment.</p>

            {submitted ? (
              <div className="form-notice" role="status">
                <h3>Thanks.</h3>
                <p>
                  This form is not connected to a mailbox yet, so nothing was sent. Email{' '}
                  <a href="mailto:hello@121customsdirect.co.uk">hello@121customsdirect.co.uk</a> and
                  we will pick it up.
                </p>
                <button
                  type="button"
                  className="button button-outline"
                  onClick={() => setSubmitted(false)}
                >
                  Edit your message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Your name *
                    </label>
                    <input
                      id="name"
                      className="form-input"
                      type="text"
                      value={values.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email address *
                    </label>
                    <input
                      id="email"
                      className="form-input"
                      type="email"
                      value={values.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Business name
                    </label>
                    <input
                      id="company"
                      className="form-input"
                      type="text"
                      value={values.company}
                      onChange={update('company')}
                      placeholder="Your business"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="mode">
                      Freight mode
                    </label>
                    <select
                      id="mode"
                      className="form-select"
                      value={values.mode}
                      onChange={update('mode')}
                    >
                      <option>Sea freight</option>
                      <option>Air freight</option>
                      <option>Road freight</option>
                      <option>Warehousing / courier</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="origin">
                      Origin
                    </label>
                    <input
                      id="origin"
                      className="form-input"
                      type="text"
                      value={values.origin}
                      onChange={update('origin')}
                      placeholder="e.g. Rotterdam, NL"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="destination">
                      Destination
                    </label>
                    <input
                      id="destination"
                      className="form-input"
                      type="text"
                      value={values.destination}
                      onChange={update('destination')}
                      placeholder="e.g. Birmingham, UK"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="goods">
                    Goods
                  </label>
                  <input
                    id="goods"
                    className="form-input"
                    type="text"
                    value={values.goods}
                    onChange={update('goods')}
                    placeholder="What are you shipping?"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    How can we help? *
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    value={values.message}
                    onChange={update('message')}
                    placeholder="Tell us what you are working through..."
                    required
                  />
                </div>

                <button type="submit" className="button button-dark form-submit">
                  Send message
                  <span aria-hidden="true">→</span>
                </button>
                <p className="form-note">Not connected to a mailbox yet — this will not send.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-banner-strip">
        <div className="contact-banner-media">
          <Image
            src={roadDusk}
            alt="A road at dusk leading towards a distant horizon"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>
        <div className="container contact-banner-inner">
          <h2>Prefer to speak to someone?</h2>
          <p>0121 000 0121, Monday to Friday, 08:30 – 17:30.</p>
          <Link href="/121customsdirect/solutions" className="button button-light">
            Browse our services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
