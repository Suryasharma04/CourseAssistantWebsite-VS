 
import React, { useState, useContext } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate, Route } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';
import { AuthContext } from '../../authContext';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const auth = () => {
    const val = document.getElementById('account').value; 
    const pass = document.getElementById('password').value; 
    onLogin(val, pass);
  }


  const handleSubmit = (e) => {
    console.log("in hadleSubmit");
  }
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="lg-form-group">
          <label htmlFor="account">Username</label>
          <div className="email-container">
            <input
              // type="email"
              id="account"
              name="account"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
        </div>

        <div className="lg-form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
           <span onClick={togglePasswordVisibility} className="password-toggle-icon">
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span> 
           
          </div>
          <div className="forgot-password">
            Forgot password?
          </div>
        </div>
        <button type="button" onClick={() => auth(onLogin)}>Login</button>
        <div className="already-signup">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
