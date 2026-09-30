function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Mobile First",
      description:
        "Your website looks great and works smoothly on phones, tablets and desktops.",
    },
    {
      number: "02",
      title: "WhatsApp Ready",
      description:
        "Make it easy for customers to ask questions and enquire directly through WhatsApp.",
    },
    {
      number: "03",
      title: "Fast & Simple",
      description:
        "Clear layouts and focused content help visitors find what they need without getting lost.",
    },
    {
      number: "04",
      title: "Built Around You",
      description:
        "Every website is tailored around your business, services and the customers you want to reach.",
    },
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-label">
          <span>✦</span>
          WHY YOUR WEBSITE MATTERS
        </div>

        <div className="benefits-heading">
          <h2>
            More than just
            <br />
            <span>a pretty website.</span>
          </h2>

          <p>
            Your website should make it easier for people to understand your
            business, trust what you offer and take the next step.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.number}>
              <span className="benefit-number">{benefit.number}</span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;