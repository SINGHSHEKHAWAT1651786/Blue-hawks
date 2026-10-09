import contactDetails from "../../contactDetails";
import servicesHeroImage from "../../assets/Hero-slider-2.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: "bi-airplane-engines",
    title: "Flight bookings",
    description:
      "Find a flight that fits your dates, route, and budget. Our team can help compare options and guide you through booking.",
    note: "Domestic & international",
  },
  {
    number: "02",
    icon: "bi-buildings",
    title: "Hotel bookings",
    description:
      "From a comfortable city stay to a special getaway, get help finding accommodation that suits your trip and travel style.",
    note: "Stays for every kind of trip",
  },
  {
    number: "03",
    icon: "bi-passport",
    title: "Visa assistance",
    description:
      "Get help understanding visa requirements, preparing your documents, and planning the next steps for your destination.",
    note: "Guidance for your destination",
  },
];

function Services() {
  return (
    <main className="travel-services">
      <section className="section-banner section-banner--services w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>Services</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><i className="bi bi-gear fs-6" aria-hidden="true"></i>Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="travel-services-hero">
        <div className="container travel-services-hero-inner">
          <div className="travel-services-hero-copy">
            <span className="travel-services-eyebrow">
              <i className="bi bi-sun" aria-hidden="true"></i>
              Your next chapter starts here
            </span>
            <h1>Big plans.<br />Easy journeys.</h1>
            <p>
              Flights, stays, and visa support—brought together by one
              thoughtful travel team. Tell us where you want to go.
            </p>
            <div className="travel-services-hero-actions">
              <a className="travel-services-primary-link travel-service-button custom-btn1" href={`tel:${contactDetails.phone}`}>
                <span><i className="bi bi-telephone" aria-hidden="true"></i> Talk to our team</span>
              </a>
              <a className="travel-services-secondary-link" href="#travel-services-list">
                See how we can help <i className="bi bi-arrow-down" aria-hidden="true"></i>
              </a>
            </div>
            <div className="travel-services-trust-note">
              <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
              Personal help, from first idea to take-off
            </div>
          </div>
          <div className="travel-services-hero-art">
            <img src={servicesHeroImage} alt="A tranquil tropical beach resort ready for a holiday" />
            <div className="travel-services-photo-label">
              <span><i className="bi bi-geo-alt-fill" aria-hidden="true"></i> Your next escape</span>
              <strong>Somewhere wonderful.</strong>
            </div>
            <div className="travel-services-photo-sticker" aria-hidden="true">
              <i className="bi bi-airplane-engines-fill"></i>
              <span>LET’S<br />GO!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="travel-services-content" id="travel-services-list">
        <div className="container">
          <div className="travel-services-heading">
            <span>THE DETAILS, TAKEN CARE OF</span>
            <h2>What can we help you book?</h2>
            <p>
              Tell us where you’re headed and what you need. We’ll help you
              figure out the next step.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => {
              const emailSubject = encodeURIComponent(
                `Enquiry: ${service.title}`,
              );
              const emailBody = encodeURIComponent(
                `Hello Blue Hawks,\n\nI'm interested in ${service.title.toLowerCase()}.\n\nDestination / route:\nTravel dates:\nNumber of travellers:\n\nPlease share the available options.\n\nThank you.`,
              );

              return (
                <div className="col-md-6 col-xl-4" key={service.number}>
                  <article className="travel-service-card">
                    <div className="travel-service-card-top">
                      <span className="travel-service-number">{service.number}</span>
                      <span className="travel-service-icon">
                        <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                      </span>
                    </div>
                    <span className="travel-service-note">{service.note}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="travel-service-actions">
                      <a className="travel-service-button custom-btn1" href={`tel:${contactDetails.phone}`}>
                        <span><i className="bi bi-telephone" aria-hidden="true"></i> Call us</span>
                      </a>
                      <a
                        className="travel-service-button custom-btn1"
                        href={`mailto:${contactDetails.email}?subject=${emailSubject}&body=${emailBody}`}
                      >
                        <span><i className="bi bi-envelope" aria-hidden="true"></i> Email enquiry</span>
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          <div className="travel-services-contact">
            <div>
              <span>Have a different request?</span>
              <h2>Let’s plan the details together.</h2>
            </div>
            <div className="travel-services-contact-actions">
              <a className="travel-service-button custom-btn1" href={`tel:${contactDetails.phone}`}>
                <span><i className="bi bi-telephone" aria-hidden="true"></i> {contactDetails.phone}</span>
              </a>
              <a className="travel-service-button custom-btn1" href={`mailto:${contactDetails.email}`}>
                <span><i className="bi bi-envelope" aria-hidden="true"></i> {contactDetails.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
