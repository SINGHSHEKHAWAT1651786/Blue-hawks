import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Datas from '../../Destination.json';
import contactDetails from '../../contactDetails';
import btnArrow from '../../assets/btn-arrow.svg';

const additionalTripImages = [
  "/Images/Destination-8.webp",
  "/Images/Destination-image-4.webp",
  "/Images/Destination-image-2.webp",
  "/Images/Destination-image-1.webp",
];

function ToursDetails() {
  const { id } = useParams();
  const tour = Datas.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (tour) setSelectedImage(`/${tour.image.replace(/^\/+/, '')}`);
  }, [tour]);

  if (!tour) {
    return (
      <main className="container py-5">
        <h1>Trip not found</h1>
        <p>The trip may have been removed or the link may be incorrect.</p>
        <Link to="/tour" className="btn btn-purple">Browse trips</Link>
      </main>
    );
  }

  const imageUrl = `/${tour.image.replace(/^\/+/, '')}`;
  const galleryImages = [
    ...new Set([imageUrl, ...additionalTripImages]),
  ];
  const whatsappMessage = encodeURIComponent(
    `Hi BlueHawks, I'm interested in the ${tour.name} trip in ${tour.location}. Please share more details.`
  );
  const whatsappUrl = `https://wa.me/${contactDetails.whatsappNumber}?text=${whatsappMessage}`;

  const facts = [
    { label: "Duration", value: tour.days },
    { label: "Accommodation", value: tour.accommodation },
    { label: "Arrival city", value: tour.arrivalCity },
    { label: "Best season", value: tour.bestSeason },
    { label: "Trip type", value: tour.tripType },
  ];

  return (
    <>
      <div className="section-banner section-banner--tour w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>{tour.name}</h2>
            <ul>
              <li className="pe-2"><Link to="/">Home</Link></li>
              <li><i className="bi bi-gear fs-5 pe-2" />Trip Details</li>
            </ul>
          </div>
        </div>
      </div>

      <main className="destination-container">
        <div className="container my-5">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="tour-detail-gallery">
                <div className="tour-detail-thumbnails" aria-label="Trip images">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={`tour-detail-thumbnail ${selectedImage === image ? "active" : ""}`}
                      onMouseEnter={() => setSelectedImage(image)}
                      onFocus={() => setSelectedImage(image)}
                      onClick={() => setSelectedImage(image)}
                      aria-label={`Show trip image ${index + 1}`}
                      aria-pressed={selectedImage === image}
                    >
                      <img src={image} alt="" />
                    </button>
                  ))}
                </div>
                <div className="tour-detail-image-wrap">
                  <img
                    src={selectedImage || imageUrl}
                    className="tour-detail-image"
                    alt={`${tour.location} trip, image ${galleryImages.indexOf(selectedImage) + 1}`}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <span className="blog-post-category">{tour.tripType} trip</span>
              <p className="text-secondary mt-3 mb-2">
                <i className="bi bi-geo-alt me-2" />{tour.location}
              </p>
              <h1 className="fw-bold">{tour.name}</h1>
              <p className="fs-5 text-secondary">{tour.pere}</p>
              <p className="package-contact-message mb-3">Contact us for package details</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn custom-btn1 tour-enquiry-button"
              >
                <span>Enquire about this trip</span>
                <img src={btnArrow} className="img-fluid ms-2" alt="" />
              </a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4 mt-2">
                {facts.map(({ label, value }) => (
                  <div key={label} className="col d-flex align-items-center">
                    <div className="destination-details-info">
                      {label}:<br />
                      <strong>{value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <section className="col-12 col-lg-9">
              <h2 className="fw-bold fs-1">Trip Overview</h2>
              <p className="fs-5">{tour.description}</p>
              <p>
                Activities: {tour.activities.join(' · ')}. The itinerary and availability can vary by season;
                confirm final arrangements with the trip provider before booking.
              </p>
            </section>
          </div>

          <div className="row mt-4">
            <section className="col-12 col-lg-9">
              <h2 className="fw-bold fs-1">Trip Highlights</h2>
              <ul className="list-unstyled mt-3">
                {tour.highlights.map((highlight) => (
                  <li key={highlight} className="fs-5 mb-2">
                    <i className="bi bi-stars text-primary me-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="row mt-4">
            <section className="col-12 col-lg-9">
              <h2 className="fw-bold mb-4 fs-1">What’s Included</h2>
              <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled mb-0">
                  {tour.included.map((item) => (
                    <li key={item} className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="row mt-4">
            <section className="col-12 col-lg-9">
              <h2 className="fw-bold mb-4 fs-1">Not Included</h2>
              <div className="bg-light p-4 rounded shadow-sm">
                <ul className="list-unstyled mb-0">
                  {tour.excluded.map((item) => (
                    <li key={item} className="fs-5 mb-2">
                      <i className="bi bi-dash-circle text-secondary me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="row mt-5" id="trip-enquiry">
            <div className="col-12 col-lg-9">
              <div className="form-container shadow p-4">
                <h2 className="mb-4 fs-3">Ask about this trip</h2>
                <p className="mb-3">
                  <strong>Trip:</strong> {tour.name}
                </p>
                <p className="mb-4">
                  Prefer to contact us directly? Call{" "}
                  <a href={`tel:${contactDetails.phoneLink}`}>{contactDetails.phone}</a> or email{" "}
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>.
                </p>
                <form
                  className="destination-details-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const message = [
                      'Hi BlueHawks, I would like to enquire about this trip.',
                      `Trip: ${tour.name}`,
                      `Name: ${formData.get('name')}`,
                      `Email: ${formData.get('email')}`,
                      '',
                      'Message:',
                      formData.get('message') || '',
                    ].join('\n');
                    const url = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="trip-enquiry-name">Full name</label>
                    <input id="trip-enquiry-name" name="name" type="text" className="form-control" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="trip-enquiry-email">Email</label>
                    <input id="trip-enquiry-email" name="email" type="email" className="form-control" placeholder="Enter your email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="trip-enquiry-message">Message</label>
                    <textarea id="trip-enquiry-message" name="message" className="form-control w-100" placeholder="Tell us about your travel plans" />
                  </div>
                  <button type="submit" className="btn custom-btn1 trip-enquiry-submit">
                    <span>Send enquiry</span>
                    <img src={btnArrow} className="img-fluid ms-2" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ToursDetails;
