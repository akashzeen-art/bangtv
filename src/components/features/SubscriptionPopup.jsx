import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './SubscriptionPopup.css'

const SubscriptionPopup = ({ isOpen, onClose, onSubscribe }) => {
  const [step, setStep] = useState(1) // 1: Mobile, 2: Plan Selection
  const [mobileNumber, setMobileNumber] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  const [error, setError] = useState('')

  // Reset form when popup opens/closes
  useEffect(() => {
    if (isOpen) {
      // Reset form state when popup opens
      setStep(1)
      setMobileNumber('')
      setError('')
      // Don't prevent body scroll - allow background content to scroll
      // Popup will remain fixed in center due to CSS
      // Keep body scrollable so background content can move
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    } else {
      // Reset any styles when closed
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Calculate prices (will be replaced with backend prices later)
  const calculatePrices = (baseMonthly, baseYearly) => {
    const monthlyDiscount = 0.60 // 60% off
    const yearlyDiscount = 0.60 // 60% off
    
    return {
      monthly: {
        price: Math.round(baseMonthly * (1 - monthlyDiscount)),
        original: baseMonthly,
        discount: '60% OFF'
      },
      yearly: {
        price: Math.round(baseYearly * (1 - yearlyDiscount)),
        original: baseYearly,
        discount: '60% OFF'
      }
    }
  }

  // Backend prices (will be fetched from API later)
  const backendPrices = {
    baseMonthly: 125,
    baseYearly: 199
  }

  const prices = calculatePrices(backendPrices.baseMonthly, backendPrices.baseYearly)

  // Validate mobile number
  const validateMobile = (mobile) => {
    // Remove any non-digit characters
    const cleaned = mobile.replace(/\D/g, '')
    // Check if it's a valid Indian mobile number (10 digits)
    return cleaned.length >= 8 && cleaned.length <= 10
  }

  const handleMobileChange = (e) => {
    const value = e.target.value
    // Only allow digits and limit to 10 characters
    const cleaned = value.replace(/\D/g, '').slice(0, 10)
    setMobileNumber(cleaned)
    setError('') // Clear error when user types
  }

  const handleInitialSubmit = (e) => {
    e.preventDefault()
    setError('') // Clear previous errors
    
    // Validate mobile number
    if (!mobileNumber || mobileNumber.trim() === '') {
      setError('Please enter your mobile number')
      return
    }
    
    if (!validateMobile(mobileNumber)) {
      setError('Please enter a valid mobile number (8-10 digits)')
      return
    }
    
    // If validation passes, move to plan selection
    setStep(2)
  }

  const handlePlanSubmit = (e) => {
    e.preventDefault()
    
    // Validate that a plan is selected
    if (!selectedPlan) {
      setError('Please select a subscription plan')
      return
    }
    
    // Mark user as subscribed
    localStorage.setItem('isSubscribed', 'true')
    localStorage.setItem('userMobile', mobileNumber)
    localStorage.setItem('selectedPlan', selectedPlan)
    
    // Close popup
    onClose()
    
    // Call onSubscribe callback
    if (onSubscribe) {
      onSubscribe({
        mobile: mobileNumber,
        plan: selectedPlan
      })
    }

    // Redirect to payment (will be replaced with actual payment URL)
    const paymentUrl = selectedPlan === 'monthly' 
      ? 'https://backend-url/monthly' 
      : selectedPlan === 'weekly'
      ? 'https://backend-url/weekly'
      : 'https://backend-url/yearly'
    
    // For now, just log (remove this when payment URL is ready)
    console.log('Redirecting to payment:', paymentUrl)
    // window.location.href = paymentUrl
  }

  if (!isOpen) return null

  // Render popup directly to document body using Portal to ensure it's not constrained by parent containers
  return createPortal(
    <div className="subscription-popup-overlay" onClick={onClose}>
      <div className="subscription-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="subscription-popup-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {step === 1 && (
          <div className="subscription-popup-step">
            <h3 className="subscription-popup-title">Enter Mobile Number</h3>
            <form id="initialForm" onSubmit={handleInitialSubmit}>
              <div className="subscription-input-group">
                <input
                  type="tel"
                  id="mobileInput"
                  placeholder="Enter your phone number"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  maxLength="10"
                  required
                  autoFocus
                />
                {error && <div className="subscription-error-message">{error}</div>}
              </div>

              <button type="submit" className="subscription-submit-btn">
                Subscribe Now
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="subscription-popup-step">
            <div className="subscription-mobile-display">
              Mobile: {mobileNumber}
            </div>
            <form id="planForm" onSubmit={handlePlanSubmit}>
              {/* Weekly Plan */}
              <label className="subscription-plan-option">
                <input
                  className="subscription-plan-radio"
                  type="radio"
                  name="plan"
                  value="weekly"
                  checked={selectedPlan === 'weekly'}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                />
                <div className="subscription-plan-body">
                  <div className="subscription-top-row">
                    <div className="subscription-price-section">
                      <span className="subscription-plan-name">Weekly</span>
                      <span className="subscription-price-now">₹65</span>
                      <span className="subscription-price-old">₹130</span>
                    </div>
                    <div className="subscription-discount">50% OFF</div>
                  </div>
                </div>
              </label>

              {/* Monthly Plan */}
              <label className="subscription-plan-option">
                <input
                  className="subscription-plan-radio"
                  type="radio"
                  name="plan"
                  value="monthly"
                  checked={selectedPlan === 'monthly'}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                />
                <div className="subscription-plan-body">
                  <div className="subscription-top-row">
                    <div className="subscription-price-section">
                      <span className="subscription-plan-name">Monthly</span>
                      <span className="subscription-price-now">₹{prices.monthly.price}</span>
                      <span className="subscription-price-old">₹{prices.monthly.original}</span>
                    </div>
                    <div className="subscription-discount">{prices.monthly.discount}</div>
                  </div>
                  {/* Description on its own row, centered under the top row */}
                  <div className="subscription-plan-desc">Unlimited Videos & Web Series</div>
                </div>
              </label>

              <div className="subscription-form-actions">
                <button 
                  type="button" 
                  className="subscription-back-btn"
                  onClick={() => {
                    setStep(1)
                    setError('')
                  }}
                >
                  Back
                </button>
                <button type="submit" className="subscription-submit-btn">
                  Submit
                </button>
              </div>
              {error && <div className="subscription-error-message">{error}</div>}
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

export default SubscriptionPopup
