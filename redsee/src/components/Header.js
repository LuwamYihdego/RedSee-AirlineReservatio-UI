import React from "react";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Ethiopian Airlines" />
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/flights" className="nav-link">
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a href="/bookings" className="nav-link">
              Bookings
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
