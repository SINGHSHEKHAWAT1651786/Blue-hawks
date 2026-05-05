import React from 'react'
import star from '../../assets/star.webp';
const destinationimage1 = "/Images/Destination-6.webp";
const destinationimage2 = "/Images/Destination-7.webp";
const destinationimage3 = "/Images/Destination-8.webp";

import travelIcon1 from '../../assets/travel-icon1.webp';
import travelIcon2 from '../../assets/travel-icon2.webp';
import tst1 from '../../assets/tst-1.webp';
import tst2 from '../../assets/tst-2.webp';
import tst3 from '../../assets/tst-3.webp';
import tst4 from '../../assets/tst-4.webp';
import travelexperienceimage1 from '../../assets/experience-image1.webp';
import travelexperienceimage2 from '../../assets/experience-image2.webp';
import travelexperienceimage3 from '../../assets/experience-image3.webp';
import travelplace from '../../assets/place-image.webp';
import placeelement from '../../assets/place-element.webp';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import brandimage1 from '../../assets/brand-image1.webp';
import brandimage2 from '../../assets/brand-image2.webp';
import brandimage3 from '../../assets/brand-image3.webp';
import brandimage4 from '../../assets/brand-image4.webp';
import brandimage5 from '../../assets/brand-image5.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import price1 from '../../assets/price-1.webp';
import price2 from '../../assets/price-2.webp';
import price3 from '../../assets/price-3.webp';
import price4 from '../../assets/price-4.webp';
import price5 from '../../assets/price-5.webp';
import price6 from '../../assets/price-6.webp';

import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';
import btnArrow from '../../assets/btn-arrow.svg'; 

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* About Section  */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content ">
            <h2>About</h2>
            <ul>
              <li className='pe-2'><Link to='/'>Home</Link>
              </li>
              <li>
                <i className="bi bi-gear fs-6 pe-2"></i>About
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Destination  */}
      <section className="top-destination py-5 my-5">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12 text-center">
              <div className="section-title top-destination-title">
                <div className="text-conter d-flex align-items-center justify-content-center gap-3">
                  <img src={star} alt="star-image" className="img-fluid" />
                  <h3 className="m-0">
                    Get To Know Us
                  </h3>
                </div>
                <h2>Top Destiantions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="top-destination-item w-100">
                <div className="top-destination-image position-relative">
                  <img src={destinationimage1} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Rome, Italy</h3>
                    <span className="fs-bold fs-4 m-0" style={{ fontWeight: '800' }}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-destination-item w-100">
                <div className="top-destination-image position-relative">
                  <img src={destinationimage2} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Rome, Italy</h3>
                    <span className="fs-bold fs-4 m-0" style={{ fontWeight: '800' }}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-destination-item w-100">
                <div className="top-destination-image position-relative">
                  <img src={destinationimage3} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Paris, France </h3>
                    <span className="fs-bold fs-4 m-0" style={{ fontWeight: '800' }}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Travel Experience by Customer  */}
      <section className="travel-experience my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title travel top-experience-title">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={star} className="img-fluid" alt="star-image" />
                  <h3 className="m-0">Get To Know Us</h3>
                </div>

                <h2>Get the Best Travel Experience</h2>
                <ul className="list-unstyled pt-4">
                  <li className="d-flex align-items-center gap-3 pb-4">
                    <img src={travelIcon1} alt="travel-icon" width={50} height={50} />
                    <div>
                      <h4>Friendly price</h4>
                      <p>
                        We don't just work with concrete and steel, <br />
                        We are approachable, with even our highest
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="travel-experience-btn d-flex flex-column flex-sm-row align-items-center gap-3 mt-4">
                  <div className="btn-box">
                    <button className="btn custom-btn1 find-more-btn">
                      Find More
                      <img src={btnArrow} className="img-fluid ms-2" alt="Arrow Icon" />
                    </button>
                  </div>
                  <div className="travel-experience-user d-flex align-items-center ps-sm-4">
                    <img src={tst1} alt="user" />
                    <img src={tst2} alt="user" />
                    <img src={tst3} alt="user" />
                    <img src={tst4} alt="user" />

                    <span className="ms-2">50+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                    <img src={travelexperienceimage1} className="img-fluid w-100" alt="" />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">America</span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                    <img src={travelexperienceimage2} className="img-fluid w-100" alt="" />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">Africa</span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                    <img src={travelexperienceimage3} className="img-fluid w-100" alt="" />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">Asia</span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                    <img src={travelexperienceimage1} className="img-fluid w-100" alt="" />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">Europe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* travel places  */}
      <section className="travel-places my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="section-title travel-places-title">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={star} className="img-fluid" alt="star-image" />
                  <h3 className="m-0">Get To Know Us</h3>
                </div>
                <h2>Travel Place for <br />
                  You & Your <br />
                  Family
                </h2>
                <div className="travle-experience-btn mt-4">
                  <div className="travel-experience-user d-flex align-items-center pb-2">
                    <img src={tst1} alt="user" />
                    <img src={tst2} alt="user" />
                    <img src={tst3} alt="user" />
                    <span className="ms-2">50+</span>
                  </div>
                  <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>500k+ Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="row align-items-center gy-4">
                <div className="col-lg-6">
                  <div className="travel-places-image">
                    <img src={travelplace} alt="travel-place" className="img-fluid object-fit-cover" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="travel-places-info">
                    <h4>Waiting for adevntures? Don't miss them</h4>
                    <p> We don't just work with concrete and steel.
                      We are Approachable, with even our highest
                      concrete and steel. We work with people
                    </p>
                    <div className="place-text d-flex gap-3 align-items-center shadow p-3 rounded-4 mt-3">
                      <img src={placeelement} alt="palce" width='70' height="90" />
                      <h6>We have more than 6 year of experience</h6>
                    </div>
                    <ul className="list-unstyled pt-3 travel-place-ul">
                      <li className="pb-3"><i className="fa-solid fa-check me-2"></i>Generation Technology</li>
                      <li className="pb-3"><i className="fa-solid fa-check me-2"></i>24/7 customer support</li>
                      <li className="pb-3"><i className="fa-solid fa-check me-2"></i>Economy friendaly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* business-banner */}
      <section
        className="business-banner py-5"
        style={{ backgroundColor: '#f7ffc4' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className=" trusted-brands-banner text-center mb-5">
                <h2 className="mb-0">Trusted By Local Business</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Splide
                className="banner-splide"
                options={{
                  perPage: 5,
                  loop: true,
                  type: 'loop',
                  gap: '1rem',
                  pagination: false,
                  arrows: false,
                  breakpoints: {
                    1200: { perPage: 4 },
                    992: { perPage: 3 },
                    768: { perPage: 2 },
                    576: { perPage: 1 },
                  },
                }}
              >
                {[brandimage1, brandimage2, brandimage3, brandimage4].map((img, idx) => (
                  <SplideSlide key={idx}>
                    <div className="brand-image text-center">
                      <img src={img} className="img-fluid" alt={`brand-image-${idx + 1}`} />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </section>
      {/* Team  */}
      <section className="team my-5 py-5 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="section-title travel-places-title">
                <div className="d-flex align-items-center gap-3">
                  <img src={star} className="img-fluid  mt-5" alt="star-image" />
                  <h3 className="m-0 mt-5">Travel With Ease</h3>
                </div>
                <h2 className="m-0 p-0">About Our Team</h2>
                <p className="py-3 text-start">
                  Blue Hawk was created with a vision — to change the way people experience travel. Today, that vision lives on in every ticket we book, every smile we send, and every journey we shape.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <Swiper effect={'cards'}
                grabCursor={true}
                loop={true}
                autoplay={true}
                modules={[EffectCards]}
                className="ab-tst-swiper"
              >
                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst3} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      I create  the  Blue Hawk travel planning. So Enjoy travel with ease by client
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Kuldeep Singh</h3>
                        <span>CEO</span>
                      </div>
                      <button className="btn custom-swipe-btn">Swipe</button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst3} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      I Manage the  Blue Hawk travel planning. So Enjoy travel with ease by client
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Anu Tanwar</h3>
                        <span>COO</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst1} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      I marketing the  Blue Hawk with style
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Vidhi Singh</h3>
                        <span>Marketing Head</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing  */}
      <section className="reviews my-5 py-5 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="section-title travel-places-title">
                <div className="d-flex align-items-center gap-3">
                  <img src={star} className="img-fluid  mt-5" alt="star-image" />
                  <h3 className="m-0 mt-5">Get to Know Us</h3>
                </div>
                <h2 className="m-0 p-0">Best Holiday Package</h2>

              </div>
            </div>
            <div className="col-12">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4">
                  <div className="card h-100 shadow-lg round-4 p-5 text-start border-0 price-card">
                    <h2><sup>$</sup>99<small>/month</small></h2>
                    <div className="d-flex justify-content-center my-4 w-100">
                      <img src={price1} alt="tour1" className="object-fit-cover" width='70%' style={{ borderRadius: "100px" }} />
                      <img src={price2} alt="tour2" className="rounded-circle ms-2  object-fit-cover" width='70%' />
                    </div>
                    <h4 className="fw-bold fd-1">Turkey Tour</h4>
                    <p className="text-muted fs-5">
                      We don't just wprk concerate and steel. Approachable, with even our highest concerate.
                    </p>
                    <hr />
                    <ul className="list-unstyled text-start card-price-list p-0">
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Generation Technology
                      </li>
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Audio Player
                      </li>
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Generation Technology
                      </li>
                    </ul>

                    <div className="btn-box-1">
                      <button className="btn custom-btn-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card h-100 shadow-lg round-4 p-5 text-start border-0 price-card">
                    <h2><sup>$</sup>77<small>/month</small></h2>
                    <div className="d-flex justify-content-center my-4 w-100">
                      <img src={price3} alt="tour1" className="object-fit-cover" width='70%' style={{ borderRadius: "100px" }} />
                      <img src={price4} alt="tour2" className="rounded-circle ms-2  object-fit-cover" width='70%' />
                    </div>
                    <h4 className="fw-bold fd-1">India Tour</h4>
                    <p className="text-muted fs-5">
                      We don't just wprk concerate and steel. Approachable, with even our highest concerate.
                    </p>
                    <hr />
                    <ul className="list-unstyled text-start card-price-list p-0">
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Generation Technology
                      </li>
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Audio Player
                      </li>
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Generation Technology
                      </li>
                    </ul>

                    <div className="btn-box-1">
                      <button className="btn custom-btn-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card h-100 shadow-lg round-4 p-5 text-start border-0 price-card">
                    <h2><sup>$</sup>67<small>/month</small></h2>
                    <div className="d-flex justify-content-center my-4 w-100">
                      <img src={price3} alt="tour1" className="object-fit-cover" width='70%' style={{ borderRadius: "100px" }} />
                      <img src={price4} alt="tour2" className="rounded-circle ms-2 object-fit-cover" width='70%' />
                    </div>
                    <h4 className="fw-bold fd-1">World Tour</h4>
                    <p className="text-muted fs-5">
                      We don't just wprk concerate and steel. Approachable, with even our highest concerate.
                    </p>
                    <hr />
                    <ul className="list-unstyled text-start card-price-list p-0">
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Generation Technology
                      </li>
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Audio Player
                      </li>
                      <li className="fw-bold mb-3">
                        <i className="fa-regular fa-circle-check pe-2 fa-lg"></i>
                        Generation Technology
                      </li>
                    </ul>
                    <div className="btn-box-1">
                      <button className="btn custom-btn-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="price-bottom-text text-center mt-5 fs-5">
            Want to see our Recent News & Update.<a href="#" className="text-decoration-none fw-bold">Click here to View More</a>
          </p>
        </div>
      </section>
      {/* Gallery  */}
      <section className="gallery-grid my-5 mb-0">
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={5}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              className="gallery-swiper"
            >
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage1} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage2} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage3} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage4} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage5} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage2} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-image">
                  <img src={galleryimage3} className="img-fluid w-100" alt="gallery" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

    </>
  )
}

export default About