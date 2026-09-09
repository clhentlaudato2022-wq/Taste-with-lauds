import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          Taste <span>with Lauds</span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/recipes"
            className={location.pathname === "/recipes" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Recipes
          </Link>

          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Blog
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Contact
          </Link>

        </nav>

    

      </div>
    </header>
  );
}

export default Navbar;