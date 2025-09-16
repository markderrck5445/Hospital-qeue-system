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
      {/* Add these styles to your existing CSS */}
      <style jsx>{`
        /* Your existing styles remain the same, plus these additions: */
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .login-container {
          position: relative;
        }

        .login-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .login-icon:hover {
          background-color: #e5e7eb;
          transform: scale(1.05);
        }

        .login-icon svg {
          width: 20px;
          height: 20px;
          color: #374151;
        }

        .login-dropdown {
          position: absolute;
          top: 50px;
          right: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .login-dropdown.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .login-dropdown::before {
          content: '';
          position: absolute;
          top: -8px;
          right: 16px;
          width: 16px;
          height: 16px;
          background: white;
          transform: rotate(45deg);
        }

        .login-option {
          display: block;
          padding: 12px 20px;
          color: #374151;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 6px;
          margin: 8px;
          font-weight: 500;
        }

        .login-option:hover {
          background-color: #f8fafc;
          color: #2563eb;
        }

        .mobile-login-section {
          border-top: 1px solid #e5e7eb;
          margin-top: 20px;
          padding-top: 20px;
        }

        .mobile-login-option {
          display: block;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          padding: 16px 40px;
          border-radius: 8px;
          transition: all 0.3s ease;
          margin-bottom: 8px;
        }

        .mobile-login-option:hover {
          color: #2563eb;
          background-color: #f8fafc;
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            MedBook
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
          <div className="mobile-login-section">
            <Link to="/login" className="mobile-login-option" onClick={handleItemClick}>
              Login
            </Link>
            <Link to="/register" className="mobile-login-option" onClick={handleItemClick}>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;