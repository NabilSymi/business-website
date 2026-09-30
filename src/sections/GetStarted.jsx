import { useState } from "react";

function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    type: "",
    package: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "60123456789";

    const message = `Hi STUDIO, I'd like to enquire about a website.

Name: ${form.name}
Business: ${form.business}
Business Type: ${form.type}
Package: ${form.package}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="get-started-section" id="contact">
      <div className="container">
        <div className="get-started-layout">
          <div className="get-started-intro">
            <div className="section-label">
              <span>✦</span>
              LET'S WORK TOGETHER
            </div>

            <h2>
              Tell us about
              <br />
              <span>your business.</span>
            </h2>

            <p>
              Fill in a few details and we'll continue the conversation
              through WhatsApp.
            </p>

            <div className="get-started-note">
              <span>✓</span>
              No complicated forms. Just a quick enquiry.
            </div>
          </div>

          <form className="get-started-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Nabil"
                  value={form.name}
                  onChange={handleChange}
                  autoCapitalize="words"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="business">Business Name</label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="e.g. ABC Auto Service"
                  value={form.business}
                  onChange={handleChange}
                  autoCapitalize="words"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="type">Business Type</label>

              <input
                id="type"
                name="type"
                type="text"
                placeholder="e.g. Workshop, Aircond Service, Contractor"
                value={form.type}
                onChange={handleChange}
                autoCapitalize="words"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="package">
                Which package are you interested in?
              </label>

              <select
                id="package"
                name="package"
                value={form.package}
                onChange={handleChange}
                required
              >
                <option value="">Select a package</option>
                <option value="Starter — RM299">Starter — RM299</option>
                <option value="Business — RM599">Business — RM599</option>
                <option value="Pro — RM1,099">Pro — RM1,099</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us what you need</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us a little about your business and what you want your website to do..."
                value={form.message}
                onChange={handleChange}
                autoCapitalize="sentences"
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Continue on WhatsApp
              <span>↗</span>
            </button>

            <p className="form-disclaimer">
              Your enquiry will open in WhatsApp. You can review it before
              sending.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;