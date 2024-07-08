import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    numberOrSpecialChar: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'password') {
      validatePassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', form);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!form.firstName) errors.firstName = 'First Name is required';
    if (!form.lastName) errors.lastName = 'Last Name is required';
    if (!form.email) errors.email = 'Email Address is required';
    if (!form.password) errors.password = 'Password is required';
    if (!form.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const validatePassword = (password) => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const numberOrSpecialChar = /[0-9!@#$%^&*]/.test(password);

    setPasswordValidations({
      length,
      uppercase,
      numberOrSpecialChar,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="su-form-group">
          <label>
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className={errors.firstName ? 'error-border' : ''}
          />
        </div>
        <div className="su-form-group">
          <label>
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className={errors.lastName ? 'error-border' : ''}
          />
        </div>
        <div className="su-form-group">
          <label>
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'error-border' : ''}
          />
        </div>
        <div className="su-form-group">
          <label>
            Password <span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'error-border' : ''}
            />
            <span onClick={togglePasswordVisibility} className="password-toggle-icon">
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <div className="password-requirements">
            <small className={passwordValidations.length ? 'valid' : 'invalid'}>
              • At least 8 characters
            </small>
            <small className={passwordValidations.uppercase ? 'valid' : 'invalid'}>
              • One uppercase letter
            </small>
            <small className={passwordValidations.numberOrSpecialChar ? 'valid' : 'invalid'}>
              • One number or special character
            </small>
          </div>
        </div>
        <div className="su-form-group">
          <label>
            Confirm Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className={errors.confirmPassword ? 'error-border' : ''}
          />
           {errors.confirmPassword && (
            <small className='error-message'>{errors.confirmPassword}</small>
          )}
        </div>
        <button type="submit">Create Account</button>

        <div className="already-login">
          Already have an account? <span to="/login">Log In</span>
        </div>
      </form>
    </div>
  );
};

export default Signup;