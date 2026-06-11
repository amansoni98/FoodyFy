import React, { useState } from 'react'
import '../../styles/auth.css'

function FoodPartnerRegister() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cuisineType: '',
    password: '',
    agreeTerms: false,
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
            <h1>Partner Registration</h1>
            <p>Join FoodyFy as a food partner</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                name="businessName"
                className="form-input"
                placeholder="Your Restaurant Name"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                className="form-input"
                placeholder="John Doe"
                value={formData.ownerName}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
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
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-input"
                placeholder="Street address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Cuisine Type</label>
                <select
                  name="cuisineType"
                  className="form-input"
                  value={formData.cuisineType}
                  onChange={handleChange}
                >
                  <option value="">Select cuisine</option>
                  <option value="italian">Italian</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="mexican">Mexican</option>
                  <option value="fusion">Fusion</option>
                  <option value="other">Other</option>
                </select>
              </div>
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

            <button type="submit" className="btn btn-primary btn-block">
              Register Business
            </button>
          </form>

          <div className="auth-footer">
            Already partnered with us? <a href="/food-partner/login">Sign in</a>
          </div>
          <div className="auth-footer">
            Want to register as a normal user? <a href="/user/register">Register as a user</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
