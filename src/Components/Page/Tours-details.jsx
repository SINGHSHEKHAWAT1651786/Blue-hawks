import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Datas from '../../Destination.json';

const destinationimage1 = "/Images/Destination-8.webp";
const destinationimage2 = "/Images/Destination-image-4.webp";
const destinationimage3 = "/Images/Destination-image-2.webp";
const destinationimage4 = "/Images/Destination-image-1.webp";

function ToursDetails() {
  const { id } = useParams();
  const tour = Datas.find(item => item.id === parseInt(id));

  if (!tour) return <p>Tour not found</p>;

  const images = [
    destinationimage1,
    destinationimage2,
    destinationimage3,
    destinationimage4,
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);

  const priceAdult = parseInt(tour.price.replace(/\D/g, ""), 10) || 0;
  const priceChild = parseInt(tour.price.replace(/\D/g, ""), 10) || 0;
  const adultTotal = priceAdult * adultCount;
  const childTotal = priceChild * childCount;
  const total = adultTotal + childTotal;

  return (
    <>
      {/* Banner */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>{tour.name}</h2>
            <ul>
              <li className="pe-2"><Link to="/">Home</Link></li>
              <li><i className="bi bi-gear fs-5 pe-2" /> Trip Details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main section of desination */}
      <div className="destination-container">
        <div className="container my-5">
          <div className="row g-4 destination-top">
            <div className="col-lg-2 d-flex flex-column gap-2 destination-images" style={{ overflowY: 'auto', maxHeight: '450px' }}>
              {images.map((img, index) => (
                <div
                  key={`thumb-${index}`}
                  className={`destination-details-thumb d-flex ${mainImage === img ? 'active-thumb' : ''}`}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setMainImage(img)}
                  onKeyDown={(e) => e.key === "Enter" && setMainImage(img)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="img-fluid"
                    style={{ height: '90px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              ))}
            </div>

            <div className="col-lg-6 position-relative destination-main-image h-100">
              <img src={`/${tour.image}`} className="img-fluid w-100" alt="Selected destination" />
            </div>
          </div>

          <h2 className="fw-bold mt-5 fs-1">{tour.name}</h2>
          <button type="button" className="btn btn-purple fs-4 open-book-tn"
  data-bs-toggle="modal" data-bs-target="#bookingModal">
            Book Now
          </button>

          <div className="row">
            <div className="col-lg-9">
              <div className="row row-cols-2 row-cols-md-4 g-4 mt-2">
                {[
                  { icon: "bi-hospital", label: "Accommodation", value: "5‑Star Hotel" },
                  { icon: "bi-ticket", label: "Admission Fee", value: "No" },
                  { icon: "bi-airplane", label: "Arrival City", value: "London" },
                  { icon: "bi-calendar2-heart", label: "Best Season", value: "Autumn" },
                  { icon: "bi-geo-alt", label: "Departure City", value: "Kathmandu" },
                  { icon: "bi-shield-check", label: "Insurance", value: "60% Covered" },
                  { icon: "bi-chat-text", label: "Language", value: "English" },
                  { icon: "bi-person-video", label: "Guide", value: "Included" },
                  { icon: "bi-person-badge", label: "Min Age", value: 18 },
                  { icon: "bi-taxi-front", label: "Hotel Transfer", value: "Available" },
                  { icon: "bi-person-exclamation", label: "Max Age", value: 58 },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="col d-flex align-items-center">
                    <i className={`bi ${icon} me-3 destination-details-icon`} />
                    <div className="destination-details-info">
                      {label}:<br />
                      <strong>{value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold fs-1">Overview</h2>
              <p className="fs-5">Sample description about the tour goes here. You can replace this text.</p>
              <p className="fs-5">You can also dynamically include content about the tour from `Destination.json` later.</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold fs-1">Top Highlights</h2>
              <ul className="list-unstyled mt-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i} className="fs-5 mb-1">
                    <i className="bi bi-stars text-primary me-2" />
                    Easily generate images with detailed text prompts
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Include / Exclude */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold mb-4 fs-1">Include and Exclude</h2>
              <div className="row">
                {[1, 2].map((col) => (
                  <div key={col} className="col-md-6 mb-3">
                    <div className="bg-light p-3 rounded shadow-sm">
                      <ul className="list-unstyled">
                        {[
                          "Meals as per hotel plan — drinks free too.",
                          "Return airport and round‑trip transfers.",
                          "Accommodation on twin‑sharing basis.",
                        ].map((item) => (
                          <li key={item} className="fs-5 mb-2">
                            <i className="bi bi-check2-circle text-primary me-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="row mt-5">
            <div className="col-md-9">
              <div className="form-container shadow p-4">
                <h5 className="mb-4 fs-3">You can send an enquiry via the form below.</h5>
                <p className="mb-3">
                  <strong className="fs-6">Trip name:</strong>{" "}
                  <span className="text-danger">*</span> {tour.name}
                </p>

                <form className="destination-details-form">
                  <div className="mb-3">
                    <label className="form-label required">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label required">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" required />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Country</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Choose a country</option>
                        {["USA", "UK", "India", "Canada"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Contact Number</label>
                      <input type="tel" className="form-control" placeholder="Enter your contact" />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">No. of Adults</label>
                      <input type="number" className="form-control" min="1" placeholder="Adults" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">No. of Children</label>
                      <input type="number" className="form-control" min="0" placeholder="Children" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enquiry Subject</label>
                    <input type="text" className="form-control" placeholder="Enquiry subject" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Your Message</label>
                    <textarea className="form-control w-100" placeholder="Enter your message" />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-purple px-5 py-2">
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ToursDetails;
