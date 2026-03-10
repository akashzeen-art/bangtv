/**
 * Check if user is subscribed
 * @returns {boolean}
 */
export const isSubscribed = () => {
  const subscribed = localStorage.getItem('isSubscribed')
  return subscribed === 'true'
}

/**
 * Mark user as subscribed
 */
export const markAsSubscribed = () => {
  localStorage.setItem('isSubscribed', 'true')
}

/**
 * Get user subscription data
 * @returns {object|null}
 */
export const getSubscriptionData = () => {
  const subscribed = localStorage.getItem('isSubscribed')
  if (subscribed === 'true') {
    return {
      mobile: localStorage.getItem('userMobile'),
      email: localStorage.getItem('userEmail'),
      plan: localStorage.getItem('selectedPlan')
    }
  }
  return null
}

/**
 * Clear subscription data (for testing/logout)
 */
export const clearSubscription = () => {
  localStorage.removeItem('isSubscribed')
  localStorage.removeItem('userMobile')
  localStorage.removeItem('userEmail')
  localStorage.removeItem('selectedPlan')
}

