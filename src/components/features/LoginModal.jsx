import React, { useState, useEffect } from 'react'
import './LoginModal.css'

const LoginModal = ({ onClose }) => {
  const [activeForm, setActiveForm] = useState('login')

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-body">
              {/* Login Form */}
              {activeForm === 'login' && (
                <div id="login">
                  <div className="text-center mb-7">
                    <h3 className="mb-0">Sign In to Vodi</h3>
                    <p>Login to manage your account.</p>
                  </div>

                  <div className="form-group mb-4">
                    <label className="input-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="input-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-end mb-4">
                    <a
                      className="small link-underline"
                      href="#"
                      onClick={() => setActiveForm('forgot')}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-sm btn-primary btn-block">
                      Sign In
                    </button>
                  </div>

                  <div className="text-center mb-3">
                    <span className="divider divider-xs divider-text">OR</span>
                  </div>

                  <a className="btn btn-sm btn-ghost-secondary btn-block mb-2" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fab fa-google mr-2"></i>
                      Sign In with Google
                    </span>
                  </a>

                  <div className="text-center">
                    <span className="small text-muted">Do not have an account?</span>
                    <a
                      className="small font-weight-bold ml-2"
                      href="#"
                      onClick={() => setActiveForm('signup')}
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              )}

              {/* Signup Form */}
              {activeForm === 'signup' && (
                <div id="signup">
                  <div className="text-center mb-7">
                    <h3 className="mb-0">Create your account</h3>
                    <p>Fill out the form to get started.</p>
                  </div>

                  <div className="form-group mb-4">
                    <label className="input-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="input-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="input-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-sm btn-primary btn-block">
                      Sign Up
                    </button>
                  </div>

                  <div className="text-center mb-3">
                    <span className="divider divider-xs divider-text">OR</span>
                  </div>

                  <a className="btn btn-sm btn-ghost-secondary btn-block mb-2" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fab fa-google mr-2"></i>
                      Sign Up with Google
                    </span>
                  </a>

                  <div className="text-center">
                    <span className="small text-muted">Already have an account?</span>
                    <a
                      className="small font-weight-bold ml-2"
                      href="#"
                      onClick={() => setActiveForm('login')}
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              )}

              {/* Forgot Password Form */}
              {activeForm === 'forgot' && (
                <div id="forgotPassword">
                  <div className="text-center mb-7">
                    <h3 className="mb-0">Recover password</h3>
                    <p>Instructions will be sent to you.</p>
                  </div>

                  <div className="form-group">
                    <label className="sr-only">Your email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-sm btn-primary btn-block">
                      Recover Password
                    </button>
                  </div>

                  <div className="text-center mb-4">
                    <span className="small text-muted">Remember your password?</span>
                    <a
                      className="small font-weight-bold ml-2"
                      href="#"
                      onClick={() => setActiveForm('login')}
                    >
                      Login
                    </a>
                  </div>
                </div>
              )}
        </div>
      </div>
    </div>
  )
}

export default LoginModal

