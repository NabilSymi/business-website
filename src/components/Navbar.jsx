import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="logo" onClick={closeMenu}>
          STUDIO<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <a href="#start" className="nav-cta">
          Get Started <span>↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#work" onClick={closeMenu}>
          Work
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>

        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>

        <a href="#start" className="mobile-menu-cta" onClick={closeMenu}>
          Get Started <span>↗</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;