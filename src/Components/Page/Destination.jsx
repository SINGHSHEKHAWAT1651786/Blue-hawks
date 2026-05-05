import React from "react";
import star from '../../assets/star.webp';
import { Link } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const destinationimage1 = "/Images/Destination-6.webp";
const destinationimage2 = "/Images/Destination-7.webp";
const destinationimage3 = "/Images/Destination-8.webp";

import brandimage1 from '../../assets/brand-image1.webp';
import brandimage2 from '../../assets/brand-image2.webp';
import brandimage3 from '../../assets/brand-image3.webp';
import brandimage4 from '../../assets/brand-image4.webp';
import brandimage5 from '../../assets/brand-image5.webp';

import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';
import btnArrow from '../../assets/btn-arrow.svg';

function Destination(){

    return(
        <>
         {/* About Section  */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content ">
            <h2>Destination</h2>
            <ul>
              <li className='pe-2'><Link to='/'>Home</Link>
              </li>
              <li>
                <i className="bi bi-gear fs-6 pe-2"></i>Destination
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
                <h2>Top Destinations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="top-destination-item w-100">
                <Link to='/Destination-details'>
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
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-destination-item">
                <Link to='/Destination-details'>
                <div className="top-destination-image position-relative">
                  <img src={destinationimage2} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content shadown">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Rome, Italy</h3>
                    <span className="fs-bold fs-4 m-0" style={{ fontWeight: '800' }}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-destination-item w-100">
                <Link to='/Destination-details'>
                <div className="top-destination-image position-relative">
                  <img src={destinationimage3} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content shadown">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Paris, France </h3>
                    <span className="fs-bold fs-4 m-0" style={{ fontWeight: '800' }}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
                </Link>
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
export default Destination;