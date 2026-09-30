function Portfolio() {
  const projects = [
    {
      number: "01",
      category: "AUTOMOTIVE",
      title: "AutoCare Workshop",
      description:
        "A modern website concept for an automotive workshop focused on services, trust and WhatsApp enquiries.",
      type: "Concept Project",
      theme: "dark",
    },
    {
      number: "02",
      category: "HOME SERVICES",
      title: "CoolAir Solutions",
      description:
        "A clean service-based website concept designed to help customers discover air-conditioning services and request a quote.",
      type: "Concept Project",
      theme: "light",
    },
    {
      number: "03",
      category: "CONSTRUCTION",
      title: "CasaBuild",
      description:
        "A professional website concept for a renovation company showcasing projects, services and customer enquiries.",
      type: "Concept Project",
      theme: "accent",
    },
  ];

  return (
    <section className="portfolio-section" id="work">
      <div className="container">
        <div className="portfolio-top">
          <div>
            <div className="section-label">
              <span>✦</span>
              SELECTED WORK
            </div>

            <h2>
              Websites built
              <br />
              <span>to make an impact.</span>
            </h2>
          </div>

          <a href="#start" className="portfolio-link">
            Start your project <span>↗</span>
          </a>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article
              className={`portfolio-card portfolio-${project.theme}`}
              key={project.number}
            >
              <div className="portfolio-preview">
                <div className="preview-browser">
                  <div className="preview-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-content">
                    <div className="preview-nav">
                      <strong>{project.title}</strong>

                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    <div className="preview-hero">
                      <small>{project.category}</small>

                      <h3>
                        Built for
                        <br />
                        <em>better business.</em>
                      </h3>

                      <div className="preview-button">
                        Get Started →
                      </div>
                    </div>

                    <div className="preview-blocks">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <span className="preview-label">{project.type}</span>
              </div>

              <div className="portfolio-info">
                <div>
                  <span className="portfolio-number">
                    {project.number}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;