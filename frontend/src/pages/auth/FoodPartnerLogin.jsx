import React, { useState } from 'react'
import '../../styles/auth.css'

function FoodPartnerLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-box">
          <div className="logo-section">
            <div className="logo">👨‍🍳</div>
          </div>

          <div className="auth-header">
            <h1>Partner Login</h1>
            <p>Manage your restaurant on FoodyFy</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="business@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="checkbox-group" style={{ marginTop: 0 }}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="checkbox-input"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe" className="checkbox-label" style={{ margin: 0 }}>
                  Remember me
                </label>
              </div>
              <a href="#forgot" style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color var(--transition-fast)'
              }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
          </form>

          <div className="auth-divider">
            ─── OR ───
          </div>

          <button type="button" className="btn btn-secondary btn-block">
            <span>🔐</span> Sign in with Google
          </button>

          <div className="auth-footer">
            Not a partner yet? <a href="/food-partner/register">Register now</a> or <a href="/user/register">register as a user</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
