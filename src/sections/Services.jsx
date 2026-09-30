function Services() {
  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "A professional website that tells customers who you are, what you offer and why they should choose you.",
      tags: ["Responsive", "Modern Design", "SEO Ready"],
    },
    {
      number: "02",
      title: "WhatsApp Enquiries",
      description:
        "Turn website visitors into enquiries with clear WhatsApp buttons and enquiry flows built around your business.",
      tags: ["WhatsApp", "Lead Generation", "Easy Contact"],
    },
    {
      number: "03",
      title: "Services & Products",
      description:
        "Showcase your services, products or packages clearly so customers can understand what you offer.",
      tags: ["Service Pages", "Product Showcase", "Pricing"],
    },
    {
      number: "04",
      title: "Booking & Quote Forms",
      description:
        "Give customers an easier way to request a quote, ask a question or submit their project details.",
      tags: ["Enquiry Forms", "Quote Requests", "Custom Fields"],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="section-label">
              <span>✦</span>
              WHAT WE DO
            </div>

            <h2>
              Everything you need
              <br />
              <span>to get online.</span>
            </h2>
          </div>

          <p>
            From a simple business website to a complete enquiry experience,
            we build the essentials your business needs to look professional
            online.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <div className="service-number">{service.number}</div>

              <div className="service-main">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="service-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;