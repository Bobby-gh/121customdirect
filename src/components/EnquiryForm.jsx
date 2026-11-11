'use client'

import { useState } from 'react'

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

/**
 * Quote / enquiry form used on the home page.
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
          <h3>Thanks — your details are ready to send.</h3>
          <p>
            This form is not connected to a mailbox yet, so nothing has been sent. In the meantime,
            email <a href="mailto:hello@121customsdirect.co.uk">hello@121customsdirect.co.uk</a> and
            we will pick it up from there.
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
      <h3>Request a customs quote</h3>
      <p className="form-intro">It takes about a minute. Nothing is submitted until you send it.</p>

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
          <label className="form-label" htmlFor="q-mode">
            Freight mode
          </label>
          <select id="q-mode" className="form-select" value={values.mode} onChange={update('mode')}>
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

      <div className="form-group">
        <label className="form-label" htmlFor="q-goods">
          Goods
        </label>
        <input
          id="q-goods"
          className="form-input"
          type="text"
          value={values.goods}
          onChange={update('goods')}
          placeholder="What are you shipping?"
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
          placeholder="Volumes, deadlines, questions about duty or paperwork..."
          required
        />
      </div>

      <button type="submit" className="button button-dark form-submit">
        Send enquiry
        <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">
        This form is not connected to a mailbox yet — submitting will not send your message.
      </p>
    </form>
  )
}
