import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './SubscriptionPopup.css'

const PLANS = [
  { value: 'weekly',    label: 'Weekly',    price: 79,  original: 158, desc: 'Full access for 7 days' },
  { value: 'monthly',   label: 'Monthly',   price: 149, original: 298, desc: 'Unlimited videos & web series' },
  { value: 'quarterly', label: 'Quarterly', price: 199, original: 398, desc: 'Best value — 90 days access' },
]

const SubscriptionPopup = ({ isOpen, onClose, onSubscribe }) => {
  const [step, setStep] = useState(1)
  const [mobileNumber, setMobileNumber] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  const [error, setError] = useState('')

  const handleClose = () => {
    setStep(1)
    setMobileNumber('')
    setError('')
    setSelectedPlan('monthly')
    onClose()
  }

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))
    setError('')
  }

  const handleMobileSubmit = (e) => {
    e.preventDefault()
    if (mobileNumber.length < 8) {
      setError('Please enter a valid mobile number (8–10 digits)')
      return
    }
    setStep(2)
  }

  const handlePlanSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('isSubscribed', 'true')
    localStorage.setItem('userMobile', mobileNumber)
    localStorage.setItem('selectedPlan', selectedPlan)
    if (onSubscribe) onSubscribe({ mobile: mobileNumber, plan: selectedPlan })
  }

  if (!isOpen) return null

  // Step dots: step 1 = phone, step 2 = age verify, step 3 = plans
  // Dots only shown for step 1 and step 3 (the "real" 2-step flow visible to user)
  const showDots = step !== 2
  const dotStep = step === 3 ? 2 : 1

  return createPortal(
    <div className="sp-overlay">
      <div className="sp-card">

        {/* Close */}
        <button className="sp-close" onClick={handleClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Step dots */}
        {showDots && (
          <div className="sp-dots">
            <span className={`sp-dot${dotStep === 1 ? ' sp-dot--active' : ' sp-dot--done'}`} />
            <span className={`sp-dot${dotStep === 2 ? ' sp-dot--active' : ''}`} />
          </div>
        )}

        {/* ── Step 1: Phone ── */}
        {step === 1 && (
          <div className="sp-step">
            <h2 className="sp-title">Enter Your Phone Number</h2>
            <p className="sp-subtitle">We'll use this to manage your subscription</p>
            <form onSubmit={handleMobileSubmit}>
              <input
                className={`sp-input${error ? ' sp-input--error' : ''}`}
                type="tel"
                placeholder="10-digit mobile number"
                value={mobileNumber}
                onChange={handleMobileChange}
                maxLength="10"
                autoFocus
              />
              {error && <p className="sp-error">{error}</p>}
              <button type="submit" className="sp-btn-primary">Continue →</button>
            </form>
          </div>
        )}

        {/* ── Step 2: Age Verify ── */}
        {step === 2 && (
          <div className="sp-step sp-age">
            <div className="sp-age-title">
              Erotica TV is <span>adults only</span>
            </div>
            <div className="sp-age-body">
              <p>The content available on Erotica TV may contain pornographic materials.</p>
              <p>Erotica TV is strictly limited to those over 18&nbsp;or of legal age in your jurisdiction, whichever is greater.</p>
              <p>One of our core goals is to help parents restrict access to Erotica TV for minors, so we have ensured that Erotica TV is, and remains, fully compliant with the RTA (Restricted to Adults) code. This means that all access to the site can be blocked by simple parental control tools.</p>
              <p>Anyone with a minor in their household or under their supervision should implement basic parental control protections, including computer hardware and device settings, software installation, or ISP filtering services, to block your minors from accessing inappropriate content.</p>
            </div>
            <p className="sp-age-footer-text">To enter Erotica TV you must be 18&nbsp;or older</p>
            <button className="sp-btn-primary" onClick={() => setStep(3)}>
              I'm 18 or older — Enter Now
            </button>
          </div>
        )}

        {/* ── Step 3: Plans ── */}
        {step === 3 && (
          <div className="sp-step">
            <h2 className="sp-title">Choose Your Plan</h2>
            <p className="sp-subtitle">Mobile: <strong>{mobileNumber}</strong></p>
            <form onSubmit={handlePlanSubmit}>
              {PLANS.map((plan) => (
                <label
                  key={plan.value}
                  className={`sp-plan${selectedPlan === plan.value ? ' sp-plan--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.value}
                    checked={selectedPlan === plan.value}
                    onChange={() => setSelectedPlan(plan.value)}
                    className="sp-plan-radio"
                  />
                  <div className="sp-plan-info">
                    <span className="sp-plan-name">{plan.label}</span>
                    <span className="sp-plan-desc">{plan.desc}</span>
                  </div>
                  <div className="sp-plan-pricing">
                    <span className="sp-plan-price">₹{plan.price}</span>
                    <span className="sp-plan-original">₹{plan.original}</span>
                    <span className="sp-plan-badge">50% OFF</span>
                  </div>
                </label>
              ))}
              <div className="sp-actions">
                <button type="button" className="sp-btn-back" onClick={() => setStep(2)}>← Back</button>
                <button type="submit" className="sp-btn-primary sp-btn-primary--flex">Subscribe Now</button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>,
    document.body
  )
}

export default SubscriptionPopup
