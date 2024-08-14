import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logoRapidRasoi.png"
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <header className="header">
      <Link to="/" className="heading-link">
        <img src={logo} className="logo-image" alt="RapidRasoi Logo" />
      </Link>

      {/* Hamburger menu icon */}
      <div className="hamburger-menu" onClick={handleMenuClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation menu */}
      <ul className={`lists ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        {/* <li>
          <Link to="/features" className="nav-link">
            Features
          </Link>
        </li> */}
        <li>
          <Link to="/contacts" className="nav-link">
            Contacts
          </Link>
        </li>
        {/* <li>
          <Link to="/more" className="nav-link">
            More
          </Link>
        </li> */}
        <li>
          <Link to="/download">
            <button className="signup-btn">
              <span>Download Now</span>
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export { Header };
