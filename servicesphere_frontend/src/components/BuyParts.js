import React, { useState } from 'react';
import Header from './Header';
import '../styles/service.css';
import '../styles/category.css';

function BuyPartsMain() {
  return (
    <div className="service-container">
      <Header />
        <h2>Explore Parts</h2>
        <main className="home-container">
        <div className="box">
          <img src="https://yt3.googleusercontent.com/ytc/AGIKgqORfP4rb9kWvd9Z26WAWAFEt8p15IiN3VPuXV_q=s900-c-k-c0x00ffffff-no-rj" alt="Looking for a job" />
          <h2>Car parts?</h2>
          <a href='/car-parts'><button>Find product</button></a>
        </div>
        <div className="box">
          <img src="https://th.bing.com/th/id/OIP.9UiTi_uk4R58xUlKptFEDwHaHb?w=601&h=603&rs=1&pid=ImgDetMain" alt="Hiring an employee" />
          <h2>Electrical components?</h2>
          <a href='#'><button>Find product</button></a>
        </div>
        <div className="box">
          <img src="https://thumbs.dreamstime.com/b/technician-installer-solar-panels-friendly-wears-belt-tools-90439579.jpg" alt="Looking for a job" />
          <h2>Solar components?</h2>
          <a href='#'><button>Find product</button></a>
        </div>
        <div className="box">
          <img src="https://thumbs.dreamstime.com/b/handyman-holding-pipe-wrench-handyman-holding-pipe-wrench-cartoon-illustration-can-be-download-vector-format-unlimited-141256843.jpg" alt="Looking for a job" />
          <h2>Water system parts</h2>
          <a href='#'><button>Find product</button></a>
        </div>
      </main>
      
      </div>
  
  );
}

export default BuyPartsMain;
