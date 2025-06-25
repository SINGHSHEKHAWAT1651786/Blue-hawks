import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* Banner Section */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>Contact</h2>
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="me-2">Home</Link>
              </li>
              <li>
                <i className="bi bi-gear fs-6 pe-2"></i>Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section py-5 my-5">
        <div className="container">
          <div className="section-title contact-title mb-5">
            <h2 className="fw-bold">
              Get in touch with our <br /> Lovely Team
            </h2>
          </div>

          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-6 contact-info d-flex flex-column justify-content-center">
              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-text">
                  <h5>Office Address</h5>
                  <p className="mb-0">Travel Agency Network 20</p>
                  <p>Eastbourne Terrace, London W2 6LG</p>
                </div>
              </div>

              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-text">
                  <h5>Phone Number</h5>
                  <p className="mb-0">(488) 8543-234-5434</p>
                  <p>(488) 8543-234-5434</p>
                </div>
              </div>

              <div className="info-block d-flex">
                <div className="info-icon me-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h5>Mail Address</h5>
                  <p className="mb-0">info@bluehawks.com</p>
                  <p>support@bluehawks.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Type Your Message..."></textarea>
                </div>
                <button type="submit" className="btn w-100 fw-bold">Send Message Now</button>
              </form>
            </div>
          </div>

          {/* Social Icons */}
          <div className="contact-icons d-flex gap-3 mt-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.068701883718!2d75.7374909!3d26.9330364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3c83587af4f%3A0xbcf404433f7e875e!2sBlue%20Hawks%20-%20Travel%20With%20Ease!5e0!3m2!1sen!2sin!4v1750707471983!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Contact;
