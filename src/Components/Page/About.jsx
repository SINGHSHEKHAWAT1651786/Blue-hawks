import React from 'react'
import star from '../../assets/star.webp';
const destinationimage1 = "/Images/Destination-6.webp";
const destinationimage2 = "/Images/Destination-7.webp";
const destinationimage3 = "/Images/Destination-8.webp";
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
              <div className="top-destination item w-100">
                <div className="top-destination-image position-relative">
                  <img src={destinationimage1} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{fontWeight:'800'}}>Rome, Italy</h3>
                    <span className="fs-bold fs-4 m-0" style={{fontWeight:'800'}}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-destination item w-100">
                <div className="top-destination-image position-relative">
                  <img src={destinationimage2} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{fontWeight:'800'}}>Rome, Italy</h3>
                    <span className="fs-bold fs-4 m-0" style={{fontWeight:'800'}}>$0</span>
                  </div>
                  <div className="trip-time fs-5">
                    <i className="fa-solid fa-location-arrow pe-1"></i>
                    4 days
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-destination item w-100">
                <div className="top-destination-image position-relative">
                  <img src={destinationimage3} alt="destination-image" />
                  <div className="top-destination-icons">
                    <i className="bi bi-play"></i>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                </div>
                <div className="top-destination-content">
                  <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                    <h3 className="dst-title fw-bolder fs-4 m-0" style={{fontWeight:'800'}}>Paris, France </h3>
                    <span className="fs-bold fs-4 m-0" style={{fontWeight:'800'}}>$0</span>
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
    </>
  )
}

export default About