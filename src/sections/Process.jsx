function Process() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Business",
      description:
        "Tell us what your business does, what you offer and what you want your website to achieve.",
    },
    {
      number: "02",
      title: "We Design & Build",
      description:
        "We turn your information into a clean, professional website designed around your business.",
    },
    {
      number: "03",
      title: "You Review",
      description:
        "You review the website and let us know what needs to be adjusted before it goes live.",
    },
    {
      number: "04",
      title: "Go Live",
      description:
        "Once everything is ready, your website goes live and your customers can start finding you online.",
    },
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-label">
          <span>✦</span>
          HOW IT WORKS
        </div>

        <div className="process-heading">
          <h2>
            From idea to
            <br />
            <span>online.</span>
          </h2>

          <p>
            No complicated process. Just a straightforward way to get your
            business online and ready for customers.
          </p>
        </div>

        <div className="process-list">
          {steps.map((step, index) => (
            <div className="process-step" key={step.number}>
              <div className="process-number">{step.number}</div>

              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="process-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;