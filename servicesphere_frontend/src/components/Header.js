import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "../styles/header.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  // Check sign-in status on component mount
  useEffect(() => {
    const signedInStatus = localStorage.getItem("isSignedIn") === "true";
    setIsSignedIn(signedInStatus);
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
    setIsProfileOpen(false);
    localStorage.removeItem("isSignedIn"); // Clear sign-in status
    navigate("/");
  };

  return (
    <div className="main">
      <>
        <header className="header">
          <div className="header-content">
            <div className="left-nav">
              <Link to="/" className="nav-link logo">
                ServiceSphere
              </Link>
              <nav className="main-nav">
                <Link to="/Service" className="nav-link">
                  Services
                </Link>
                <Link to="/buy-partsMain" className="nav-link">
                  Buy Parts
                </Link>
                <Link to="/track" className="nav-link">
                  Track
                </Link>
              </nav>
            </div>
            <div className="right-nav">
              {isSignedIn ? (
                <div className="profile-dropdown">
                  <span onClick={toggleProfileDropdown} className="nav-link">
                    <FontAwesomeIcon icon={faUserCircle} className="icon" />
                  </span>
                  {isProfileOpen && (
                    <div className="dropdown-menu">
                      <Link to="/cart" className="dropdown-item">
                        Cart
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item logout-button"
                      >
                        <FontAwesomeIcon icon={faSignOut} className="icon" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/sign-in" className="nav-link">
                    Sign In
                  </Link>
                  <Link to="/category" className="nav-link1 btn">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
      </>
    </div>
  );
}

export default Header;
