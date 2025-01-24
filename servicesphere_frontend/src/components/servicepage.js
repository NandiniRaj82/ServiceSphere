import React, { useState } from 'react';
import Header from './Header';
import '../styles/service.css';
import '../styles/category.css';

function Service() {
  return (
    <div className="service-container">
      <Header />
        <h2>Explore Our Services</h2>
        <main className="home-container">
        <div className="box">
          <img src="https://thumbs.dreamstime.com/b/car-mechanic-repair-shop-vector-concept-web-banner-website-page-auto-mechanics-fixing-broken-illustration-workshop-tire-172627368.jpg" alt="Looking for a job" />
          <h2>Car service?</h2>
          <a href='/car-finder'><button>Find service</button></a>
        </div>
        <div className="box">
          <img src="https://thumbs.dreamstime.com/b/electrician-specialist-near-dashboard-electrical-appliances-vector-illustration-electrician-specialist-near-dashboard-199192305.jpg" alt="Hiring an employee" />
          <h2>Electric service?</h2>
          <a href='/electric-finder'><button>Find service</button></a>
        </div>
        <div className="box">
          <img src="https://img.freepik.com/premium-vector/woman-use-renewable-energy-save-earth_854078-352.jpg" alt="Looking for a job" />
          <h2>Solar service?</h2>
          <a href='/solar-finder'><button>Find service</button></a>
        </div>
        <div className="box">
          <img src="https://th.bing.com/th/id/OIP.JUo4B5W0jZvJx5cUy1aqsgAAAA?w=300&h=300&rs=1&pid=ImgDetMain" alt="Looking for a job" />
          <h2>Water service?</h2>
          <a href='/water-finder'><button>Find service</button></a>
        </div>
      </main>
      
      </div>
  
  );
}

export default Service;
