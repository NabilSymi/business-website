import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most simple business websites can be completed within a few days to a couple of weeks, depending on the number of pages, content and revisions required.",
    },
    {
      question: "Do I need to provide the content?",
      answer:
        "You provide the basic information about your business, services, contact details and any photos you want to use. We can help organise the content so it fits the website properly.",
    },
    {
      question: "Will the website work on mobile?",
      answer:
        "Yes. Every website is designed to be responsive, so it adapts to phones, tablets and desktop screens.",
    },
    {
      question: "Can customers contact me through WhatsApp?",
      answer:
        "Yes. WhatsApp buttons and enquiry forms can be connected directly to your business WhatsApp number.",
    },
    {
      question: "Do you provide the domain and hosting?",
      answer:
        "Domain and hosting can be arranged separately. Their cost depends on the provider and setup you choose.",
    },
    {
      question: "Can I request changes after seeing the website?",
      answer:
        "Yes. Each package includes a specific number of revisions. Additional changes outside the included revisions can be quoted separately.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-intro">
            <div className="section-label">
              <span>✦</span>
              FAQ
            </div>

            <h2>
              Questions?
              <br />
              <span>We've got answers.</span>
            </h2>

            <p>
              Still unsure about something? Get in touch and we'll walk you
              through the process.
            </p>

            <a href="#start" className="faq-contact">
              Ask us anything <span>↗</span>
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;