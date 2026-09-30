function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✦</span>
            Websites built for growing businesses
          </div>

          <h1>
            Build a website
            <br />
            that brings you
            <br />
            <span>more customers.</span>
          </h1>

          <p>
            We create modern, mobile-friendly websites that help small
            businesses showcase what they do and turn visitors into real
            enquiries.
          </p>

          <div className="hero-actions">
            <a href="#start" className="button button-primary">
              Get Started <span>↗</span>
            </a>

            <a href="#work" className="button button-secondary">
              View Our Work
            </a>
          </div>

          <div className="hero-note">
            <span>✓</span>
            Built for small & local businesses
          </div>
        </div>

        <div className="hero-visual">
          <div className="browser">
            <div className="browser-top">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="browser-address">
                yourbusiness.com
              </div>
            </div>

            <div className="browser-content">
              <div className="mockup-nav">
                <strong>BUSINESS</strong>

                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="mockup-hero">
                <small>WELCOME TO YOUR BUSINESS</small>

                <h2>
                  Quality service.
                  <br />
                  <em>Made simple.</em>
                </h2>

                <p>
                  Everything your customers need to know,
                  all in one place.
                </p>

                <div className="mockup-button">
                  Get a Quote →
                </div>
              </div>

              <div className="mockup-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span>✦</span>
            Mobile Friendly
          </div>

          <div className="floating-card floating-card-two">
            <span>◉</span>
            WhatsApp Ready
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;