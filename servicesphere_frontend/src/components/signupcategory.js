
import React from 'react';
import buyParts from './buypartssignup';
import serviceProvider from './serviceProvidersignin';
import Signup from './signup';
import "../styles/category.css";


function SignupHeader() {
  return (
    <header className="header1">
      <div className="logo">
        <a href='/'>Service Sphere</a>
      </div>
      <div className="options">
      </div>
    </header>
  );
};


function SignupCategory() {
  return (
    
    <div>
      <SignupHeader />
      <main className="home-container">
        <div className="box">
          <img src="https://mnlct.org/wp-content/uploads/2021/08/writing.png" alt="Looking for a job" />
          <h2>Looking for a service?</h2>
          <a href='/sign-up'><button>Find service</button></a>
        </div>
        <div className="box">
          <img src="https://th.bing.com/th/id/OIP.awrEzEkyVbX8hJ3JA1XHZgHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Hiring an employee" />
          <h2>Offering a service?</h2>
          <a href='service-provide'><button>Post a service</button></a>
        </div>
        <div className="box">
          <img src="https://th.bing.com/th/id/OIP.ldbfWpa3oaJFm8tHVLkpbAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Looking for a job" />
          <h2>products for sale?</h2>
          <a href='buy-parts'><button>Find product</button></a>
        </div>
      </main>
    </div>
    
  );
}

export default SignupCategory