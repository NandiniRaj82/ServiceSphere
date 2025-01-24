import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUserCircle,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "../styles/homeScreen.css";
import Header from './Header';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Student Section */}
        <div className="footer-section">
          <h3>Service Section</h3>
          <ul>
            <li><a href="/student-registration">Registration</a></li>
            <li><a href="/student-login">Login</a></li>
            <li><a href="/student-registration">Registration</a></li>
            <li><a href="/student-login">Login</a></li>
            <li><a href="/student-registration">Registration</a></li>
            <li><a href="/student-login">Login</a></li>
            
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>spare parts Section</h3>
          <ul>
            <li><a href="/company-registration"> Registration</a></li>
            <li><a href="/company-login"> Login</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
          </ul>
        </div>

      

        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="/about">About servicesphere</a></li>
            <li><a href="/team">Our Team</a></li>
          </ul>
        </div>

         {/* About Us */}
         <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            
          </ul>
        </div>
        </div>
    
    </footer>
  );
};

function SlidingImageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`sliding-section ${isVisible ? "slide-in" : ""}`}
    >
      <div className="sliding-image-container">
        <img
          src="https://th.bing.com/th/id/OIP.2k6CDhZjbmsvD1UAyrNIVAHaHa?rs=1&pid=ImgDetMain"
          alt="Sliding Example"
          className="sliding-image"
        />
      </div>
      <div className="sliding-text-container">
        <h2 className="sliding-title1">Welcome to ServiceSphere</h2>
        <p className="sliding-text">
          Discover our comprehensive range of services tailored to meet your
          needs. From car repairs to home electrical systems, we bring
          convenience and expertise directly to your doorstep.
        </p>
      </div>
    </div>
  );
}

function SlidingSection1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`sliding-section1 ${isVisible ? "slide-in" : ""}`}
    >
      <div className="sliding-image-container1">
        <img
          src="https://th.bing.com/th/id/OIP.2k6CDhZjbmsvD1UAyrNIVAHaHa?rs=1&pid=ImgDetMain"
          alt="Sliding Example"
          className="sliding-image1"
        />
      </div>
      <div className="sliding-text-container">
        <h2 className="sliding-title">Welcome to ServiceSphere</h2>
        <p className="sliding-text">
          Discover our comprehensive range of services tailored to meet your
          needs. From car repairs to home electrical systems, we bring
          convenience and expertise directly to your doorstep.
        </p>
      </div>
    </div>
  );
}
function SlidingSection2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`sliding-section2 ${isVisible ? "slide-in" : ""}`}
    >
      <div className="sliding-image-container2">
        <img
          src="https://th.bing.com/th/id/OIP.2k6CDhZjbmsvD1UAyrNIVAHaHa?rs=1&pid=ImgDetMain"
          alt="Sliding Example"
          className="sliding-image2"
        />
      </div>
      <div className="sliding-text-container">
        <h2 className="sliding-title">Welcome to ServiceSphere</h2>
        <p className="sliding-text">
          Discover our comprehensive range of services tailored to meet your
          needs. From car repairs to home electrical systems, we bring
          convenience and expertise directly to your doorstep.
        </p>
      </div>
    </div>
  );
}
function SlidingSection3() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`sliding-section ${isVisible ? "slide-in" : ""}`}
    >
      <div className="sliding-image-container">
        <img
          src="https://th.bing.com/th/id/OIP.2k6CDhZjbmsvD1UAyrNIVAHaHa?rs=1&pid=ImgDetMain"
          alt="Sliding Example"
          className="sliding-image"
        />
      </div>
      <div className="sliding-text-container">
        <h2 className="sliding-title1">Welcome to ServiceSphere</h2>
        <p className="sliding-text">
          Discover our comprehensive range of services tailored to meet your
          needs. From car repairs to home electrical systems, we bring
          convenience and expertise directly to your doorstep.
        </p>
      </div>
    </div>
  );
}

function Main() {
 
  return (
    <div className="main">
    <>
      <Header />

      {/* Swiper Section */}
      <section className="swiper-section">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/OIP.2k6CDhZjbmsvD1UAyrNIVAHaHa?rs=1&pid=ImgDetMain"
              alt="Slide 1"
              className="swiper-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.motorera.com/wp-content/uploads/2017/10/best-car-repair.jpg"
              alt="Slide 2"
              className="swiper-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn2.hubspot.net/hubfs/4495544/electrical-system-in-home.jpeg"
              alt="Slide 3"
              className="swiper-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/OIP.P2jFFIBeLSD1edCRb8iIowHaEh?rs=1&pid=ImgDetMain"
              alt="Slide 4"
              className="swiper-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/OIP.Tb7a1C-jfh-1mRlKFfiBiQHaEM?rs=1&pid=ImgDetMain"
              alt="Slide 5"
              className="swiper-image"
            />
          </SwiperSlide>
        </Swiper>
      </section>
            <div className="username">welcome to servicesphere</div>
      {/* Sliding Image Section */}
      <SlidingImageSection />
      <div className="section"></div>
      <div className="div">
      <SlidingSection1 />
      <SlidingSection2 />
      </div>
      <div className="section"></div>
      <SlidingSection3 />
      <Footer />
    </>
    </div>
    
  );
}

export default Main;
