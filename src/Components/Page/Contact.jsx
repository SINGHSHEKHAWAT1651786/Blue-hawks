import React from 'react';
import { Link } from 'react-router-dom';
import btnArrow from '../../assets/btn-arrow.svg';
import contactDetails from '../../contactDetails';

function Contact() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get('subject') || 'Website contact message';
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      '',
      'Message:',
      formData.get('message'),
    ].join('\n');

    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Banner Section */}
      <div className="section-banner section-banner--contact w-100">
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
                  <i className="fas fa-user"></i>
                </div>
                <div className="info-text">
                  <h5>Contact Person</h5>
                  <p>{contactDetails.name}</p>
                </div>
              </div>

              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-text">
                  <h5>Office Address</h5>
                  <p>{contactDetails.address}</p>
                </div>
              </div>

              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-text">
                  <h5>Phone Number</h5>
                  <p><a href={`tel:${contactDetails.phoneLink}`}>{contactDetails.phone}</a></p>
                </div>
              </div>

              <div className="info-block d-flex">
                <div className="info-icon me-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h5>Mail Address</h5>
                  <p><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="mb-3">
                  <input name="name" type="text" className="form-control" placeholder="Full Name" aria-label="Full name" required />
                </div>
                <div className="mb-3">
                  <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email address" required />
                </div>
                <div className="mb-3">
                  <input name="phone" type="tel" className="form-control" placeholder="Phone Number" aria-label="Phone number" />
                </div>
                <div className="mb-3">
                  <input name="subject" type="text" className="form-control" placeholder="Subject" aria-label="Subject" />
                </div>
                <div className="mb-3">
                  <textarea name="message" className="form-control" rows="4" placeholder="Type Your Message..." aria-label="Message" required></textarea>
                </div>
                <button type="submit" className="btn custom-btn1 contact-submit-btn">
                  <span>Send Message Now</span>
                  <img src={btnArrow} className="img-fluid ms-2" alt="" />
                </button>
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
        title="BlueHawks office location map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(`Blue Hawks - Travel With Ease, ${contactDetails.address}`)}&output=embed`}
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
