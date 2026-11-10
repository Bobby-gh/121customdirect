'use client'

import { useState } from 'react'
import PageHero from '../../../components/PageHero'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="contact-page">
      <PageHero
        eyebrow="Contact"
        title="Let’s talk through your question."
        description="A shipment, a declaration or just a question about where to begin — tell us what is on your mind."
      />

      <section className="contact-section section-pad">
        <div className="container contact-layout">
          <div className="contact-info">
            <p className="editorial-eyebrow">A useful place to start</p>
            <h2>Give us a little context.</h2>
            <p>
              Share what you are trying to do, what you already know and where you are getting
              stuck. You do not need to know all the customs terminology to ask for help.
            </p>
            <ul className="contact-prompt-list">
              <li>What are you importing or exporting?</li>
              <li>Where is the shipment travelling?</li>
              <li>What would you like help understanding?</li>
            </ul>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send a message</h2>
            <p>Fill in the details below and tell us a little about your question.</p>

            {submitted ? (
              <div className="contact-form-notice" role="status">
                <h3>Thanks for taking the time to write.</h3>
                <p>
                  This form is not connected to a mailbox yet, so your message has not been sent.
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
              <form onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
              }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="company">Business name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Your business"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">How can we help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us what you are working through..."
                    required
                  />
                </div>

                <button type="submit" className="button button-dark form-submit">
                  Continue
                  <span aria-hidden="true">→</span>
                </button>
                <p className="form-note">
                  This form is not connected to a mailbox yet. Submitting will not send your message.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
