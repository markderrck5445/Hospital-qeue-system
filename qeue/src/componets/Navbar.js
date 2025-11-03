import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false); // Added for login dropdown
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/Dashboard' },
    { name: 'Book Appointment', path: '/Appointment' }, 
    { name: 'My Appointments', path: '/MyAppointment' },
    { name: 'Queue Status', path: '/Qeue' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginMenu = () => { // Added function for login dropdown
    setIsLoginMenuOpen(!isLoginMenuOpen);
  };

  const handleItemClick = () => {
    setIsMenuOpen(false); // Close mobile menu when item is clicked
  };

  const handleLoginClick = () => { // Added function to close login dropdown
    setIsLoginMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
     

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            MediQueue
          </Link>

          <Link to="/" className="index">
            index
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={handleItemClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side navigation - MODIFIED */}
          <div className="nav-right">
            {/* Login Icon - ADDED */}
            <div className="login-container">
              <button className="login-icon" onClick={toggleLoginMenu}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </button>
              
              {/* Login Dropdown - ADDED */}
              <div className={`login-dropdown ${isLoginMenuOpen ? 'active' : ''}`}>
                <Link to="/login" className="login-option" onClick={handleLoginClick}>
                  Login
                </Link>
                <Link to="/register" className="login-option" onClick={handleLoginClick}>
                  Register
                </Link>
              </div>
            </div>

            {/* Hamburger Menu */}
            <div 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <div key={item.name} className="mobile-nav-item">
              <Link
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={handleItemClick}
              >
                {item.name}
              </Link>
            </div>
          ))}
          
          {/* Mobile Login Section - ADDED */}
        
        </div>
      </nav>
    </>
  );
};

export default Navbar;