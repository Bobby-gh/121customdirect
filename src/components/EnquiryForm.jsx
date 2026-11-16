'use client'

import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  company: '',
  enquiryType: 'CustomsDirect software',
  origin: '',
  destination: '',
  goods: '',
  message: '',
}

/**
 * Enquiry form used on the home page.
 * Not wired to a mailbox yet — submission shows a confirmation only.
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  if (submitted) {
    return (
      <div className="form-panel">
        <div className="form-notice" role="status">
          <h3>Thanks.</h3>
          <p>
            This form is not connected to a mailbox yet, so nothing was sent. Email{' '}
            <a href="mailto:hello@121customsdirect.co.uk">hello@121customsdirect.co.uk</a> and we
            will pick it up.
          </p>
          <button
            type="button"
            className="button button-outline"
            onClick={() => setSubmitted(false)}
          >
            Edit the details
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      className="form-panel"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <h3>Ask about CustomsDirect</h3>
      <p className="form-intro">Takes about a minute.</p>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="q-name">
            Your name *
          </label>
          <input
            id="q-name"
            className="form-input"
            type="text"
            value={values.name}
            onChange={update('name')}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="q-email">
            Email address *
          </label>
          <input
            id="q-email"
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
          <label className="form-label" htmlFor="q-company">
            Company
          </label>
          <input
            id="q-company"
            className="form-input"
            type="text"
            value={values.company}
            onChange={update('company')}
            placeholder="Your business"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="q-enquiry">
            What do you need?
          </label>
          <select
            id="q-enquiry"
            className="form-select"
            value={values.enquiryType}
            onChange={update('enquiryType')}
          >
            <option>CustomsDirect software</option>
            <option>Import declaration</option>
            <option>Export declaration</option>
            <option>Duty &amp; VAT question</option>
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="q-origin">
            Origin
          </label>
          <input
            id="q-origin"
            className="form-input"
            type="text"
            value={values.origin}
            onChange={update('origin')}
            placeholder="e.g. Shenzhen, China"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="q-destination">
            Destination
          </label>
          <input
            id="q-destination"
            className="form-input"
            type="text"
            value={values.destination}
            onChange={update('destination')}
            placeholder="e.g. Birmingham, UK"
          />
        </div>
      </div>

      <div className="form-group">          <label className="form-label" htmlFor="q-goods">
            Goods
          </label>
          <input
            id="q-goods"
            className="form-input"
            type="text"
            value={values.goods}
            onChange={update('goods')}
            placeholder="What do you import or export?"
          />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="q-message">
          Anything else? *
        </label>
        <textarea
          id="q-message"
          className="form-textarea"
          value={values.message}
          onChange={update('message')}
          placeholder="Volumes, systems, questions..."
          required
        />
      </div>

      <button type="submit" className="button button-dark form-submit">
        Send enquiry
        <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">Not connected to a mailbox yet — this will not send.</p>
    </form>
  )
}
