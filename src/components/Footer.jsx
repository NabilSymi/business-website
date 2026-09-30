function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              STUDIO<span>.</span>
            </a>

            <p>
              Modern websites for small businesses,
              built to help you get discovered and
              turn visitors into customers.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <a href="#start">Start a Project</a>
            <a href="#">WhatsApp</a>
            <a href="#">Instagram</a>
            <a href="#">Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 STUDIO. All rights reserved.</p>

          <p>Built for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;