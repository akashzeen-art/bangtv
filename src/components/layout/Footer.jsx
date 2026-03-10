import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-gray-4300">
        <div className="container px-md-5">
          <div className="footer-content d-md-flex align-items-center justify-content-between py-3">
            <div className="footer-copyright text-center text-md-left mb-2 mb-md-0">
              <span className="font-size-13 text-gray-1300">Copyright © 2025, nServe Technology LLC All Rights Reserved</span>
            </div>
            <div className="footer-links text-center text-md-right">
              <Link to="/terms" className="font-size-13 h-g-white footer-link">Terms of Services</Link>
              <span className="mx-2 text-gray-1300">|</span>
              <Link to="/refund" className="font-size-13 h-g-white footer-link">Refund Policy</Link>
              <span className="mx-2 text-gray-1300">|</span>
              <Link to="/privacy" className="font-size-13 h-g-white footer-link">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

