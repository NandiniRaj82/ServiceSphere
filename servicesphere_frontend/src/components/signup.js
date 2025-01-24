import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/signup.css';

function SignupLeftSide() {
  return (
    <div className="signup-left-side">
      <div className="community-text">
        <h1 className="main-heading">Hello Friend!</h1>
        <p className="sub-heading">
          Enter your personal details and 
          <br /> start your journey with us
        </p>
      </div>
    </div>
  );
}

function SignupRightSide() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/v1/users/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Signup successful!');
        localStorage.setItem("isSignedIn", "true");
        navigate("/");
      } else {
        const errorData = await response.json();
        setMessage(`Signup failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="signup-right-side">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="UserName">User Name:</label>
          <input
            type="text"
            id="UserName"
            placeholder="Enter your Name"
            value={formData.UserName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign up
        </button>
      </form>
      <div className="login-link">
        <span>Already have an account?</span>
        <a href="/sign-in">Sign in </a>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="style">
      <div className="signup-container">
        <SignupLeftSide />
        <SignupRightSide />
      </div>
    </div>
  );
}

export default Signup;
