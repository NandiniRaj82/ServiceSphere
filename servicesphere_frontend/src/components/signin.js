import React from 'react';
import '../styles/signin.css';

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
  return (
   
    <div className="signup-right-side">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="signup-btn">
          Sign In
        </button>
      </form>
      <div className="login-link">
        <span>Don't have an account?</span>
        <a href="/sign-up">Sign up </a>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className='style'>
    <div className="signup-container">
      <SignupRightSide />
      <SignupLeftSide />
    </div>
    </div>
  );
}

export default Signup;