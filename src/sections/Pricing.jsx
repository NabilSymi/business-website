function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For businesses that need a simple professional presence online.",
      oldPrice: "RM399",
      price: "RM299",
      features: [
        "One-page website",
        "Up to 5 sections",
        "Mobile responsive",
        "WhatsApp button",
        "Basic contact section",
        "1 revision",
      ],
    },
    {
      name: "Business",
      description: "For businesses ready for a more complete website experience.",
      oldPrice: "RM699",
      price: "RM599",
      popular: true,
      features: [
        "Professional multi-section website",
        "Services / products showcase",
        "Gallery section",
        "WhatsApp enquiry form",
        "Google Maps",
        "FAQ section",
        "Basic SEO setup",
        "2 revisions",
      ],
    },
    {
      name: "Pro",
      description: "For businesses that need more pages and a more customised experience.",
      oldPrice: "RM1,299",
      price: "RM1,099",
      features: [
        "Up to 5 pages",
        "Custom enquiry forms",
        "WhatsApp integration",
        "Services / product pages",
        "Gallery",
        "FAQ section",
        "Google Maps",
        "Basic SEO setup",
        "3 revisions",
      ],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-heading">
          <div>
            <div className="section-label">
              <span>✦</span>
              SIMPLE PRICING
            </div>

            <h2>
              Start small.
              <br />
              <span>Grow from there.</span>
            </h2>
          </div>

          <p>
            Straightforward packages for businesses at different stages.
            No unnecessary features, no confusing pricing.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="pricing-card-top">
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>

              <div className="pricing-price">
                <span className="old-price">{plan.oldPrice}</span>

                <div>
                  <span className="price">{plan.price}</span>
                  <span className="price-label">one-time</span>
                </div>
              </div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#start"
                className={`pricing-button ${
                  plan.popular ? "pricing-button-primary" : ""
                }`}
              >
                Choose {plan.name}
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          * Domain, hosting, logo design, copywriting and advanced
          functionality are quoted separately.
        </p>
      </div>
    </section>
  );
}

export default Pricing;