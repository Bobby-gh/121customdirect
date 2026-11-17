import Image from 'next/image'
import { cargoShipSea } from './images'

export default function LoginPreview() {
  return (
    <div className="login-preview" aria-label="Preview of the login screen">
      <div className="login-preview-form">
        <h3>Welcome back!</h3>
        <p>Enter your credentials</p>

        <label>
          Email <span aria-hidden="true">*</span>
          <input type="text" defaultValue="you@company.co.uk" readOnly />
        </label>

        <label>
          Password <span aria-hidden="true">*</span>
          <input type="password" defaultValue="password" readOnly />
        </label>

        <div className="login-preview-links">
          <span>show password</span>
          <span>forgot password?</span>
        </div>

        <a href="https://customs-uk.vercel.app/" className="login-preview-button" target="_blank" rel="noopener noreferrer">
          Login
        </a>

        <div className="login-preview-divider">
          <span>or</span>
        </div>

        <p className="login-preview-footer">
          Don&apos;t have an account? <span>Sign Up</span>
        </p>
      </div>

      <div className="login-preview-photo">
        <Image
          src={cargoShipSea}
          alt="Cargo ship at a container terminal"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>
    </div>
  )
}
