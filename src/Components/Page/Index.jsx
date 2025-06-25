import React from 'react';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
//Data
import Destination from '../../Destination.json'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import btnArrow from './../../assets/btn-arrow.svg';
import plane from './../../assets/plane.svg';
import '@splidejs/react-splide/css/skyblue';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import about1 from './../../assets/about-image-1.webp';
import about2 from './../../assets/about-image-2.webp';
import checkImg from './../../assets/about-check.svg';

import tst1 from './../../assets/tst-1.webp';
import tst2 from './../../assets/tst-2.webp';
import tst3 from './../../assets/tst-3.webp';
import tst4 from './../../assets/tst-4.webp';

import abElement1 from './../../assets/about-element-1.webp';
import abElement2 from './../../assets/about-element-2.webp';
import abElement3 from './../../assets/about-element-3.webp';
import DiscoverImg1 from './../../assets/Discover-image-1.webp';
import DiscoverImg2 from './../../assets/Discover-image-2.webp';
import DiscoverImg3 from './../../assets/Discover-image-3.webp';
import DiscoverImg4 from './../../assets/Discover-image-4.webp';
import steps1 from './../../assets/steps-1.svg';
import steps2 from './../../assets/steps-2.svg';
import steps3 from './../../assets/steps-3.svg';
import FeatureImg1 from './../../assets/Feature-image-1.webp';
import FeatureImg2 from './../../assets/Feature-image-2.webp';
import offerBG1 from './../../assets/offer-bg-1.webp';
import offerBG2 from './../../assets/offer-bg-2.webp';
import testBG from './../../assets/test-bg.webp';
import quote from './../../assets/quote-left.png';
import testimg01 from './../../assets/tst-image-1.webp';
import testimg02 from './../../assets/tst-3.webp';
import blog1 from './../../assets/blog1.webp';
import blog2 from './../../assets/blog2.webp';
import blog3 from './../../assets/blog3.webp';
import footer from './../../assets/footer.webp'
function Index() {
  return (
    <>
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        className="overflow-hidden"
      >
        {/* Slide of destination  */}
        <SwiperSlide>
          <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content1 w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">THE KINGDOM OF ICE</h2>
              <h1 className="text-white">Greenland</h1>
              {/* Learn more link  */}
              <Link
  to="/blog"                                       
  className="btn text-white hero-btn mt-5 d-inline-flex align-items-center text-decoration-none"
>
  LEARN MORE
  <img src={btnArrow} className="img-fluid ms-2" alt="arrow" />
</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content2 w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">THE KINGDOM OF NATURE</h2>
              <h1 className="text-white">Amazon</h1>
              <button className="btn text-white hero-btn mt-5">
                LEARN MORE <img src={btnArrow} className="img-fluid" alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content3 w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">THE KINGDOM OF PEAKS</h2>
              <h1 className="text-white">Himalayas</h1>
              <button className="btn text-white hero-btn mt-5">
                LEARN MORE <img src={btnArrow} className="img-fluid" alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
        <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>
      </Swiper>

      {/* Swiper navigation buttons */}
      <div className="swiper-buttons d-flex justify-content-between mt-3">
        <div className="swiper-prev-btn btn btn-outline-light">Prev</div>
        <div className="swiper-next-btn btn btn-outline-light">Next</div>
      </div>
      {/* Destination  */}
      <div className="Destination py-5 my-5">
        <div className="section-title">
          <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
            <span className="d-flex align-items-center gap-2">
              <img src={plane} className='img-fluid' alt="" />
              <span>Travel With Ease</span>
              <img src={plane} className='img-fluid' alt="" />
            </span>
            <h2>Top Destinations</h2>
            <p>Explore our top destinations voted by more than 10,000+ customer around the world</p>
          </div>
        </div>
        <div className="destination-wrapper mt-5">
          <Splide
            hasTrack={false}
            options={{
              type: 'loop',
              drag: 'free',
              focus: 'center',
              gap: 50,
              perPage: 3,
              arrows: false,
              // This is used to hide sidebar dot 
              pagination: false,
              AutoScroll: {
                speed: 1,
                autoStart: true,
              },
              breakpoint: {
                1199: { perPage: 3 },
                911: { perPage: 2 },
                767: { perPage: 2 },
                575: { perPage: 1 },
                0: { perPage: 1 },
              }
            }}
            extensions={{ AutoScroll }}
          >
            <SplideTrack>
              {Destination.map(dest => (
                <SplideSlide key={dest.id}>
                  <div className="dest-card position-relative">
                    <div className="dest-img overflow-hidden rounded">
                      <img src={dest.image} className="img-fluid" alt={dest.name} />
                      <span className="dest-price position-absolute top-0 end-0">
                        {dest.price}
                      </span>
                    </div>
                    <div className="dest-content p-4 rounded border-top-0 start-0 mt-3 position-absolute">
                      <i className="fa-solid fa-arrow-right dest-arrow position-absolute"></i>
                      <h2>{dest.name}</h2>
                      <p>{dest.pere}</p>
                      <div className="dest-day border-top pt-3">
                        <i className="bi bi-send-fill me-2"></i>
                        <span>{dest.days}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
          <p className="text-center mt-5 fs-5">
            Want to See Our Top Destination.
            <a href="/Destination" className="ms-1 text-decoration-underline">Click to View More</a>
          </p>
        </div>
      </div>
      {/* About Section */}
      <div className="about py-5">
        <div className="container">
          <div className="row">
            < div className="col-lg-6 about-content-wrap">
              <div className="section-title about-title">
                {/* FIRST ROW — Plane Icon + Text + Plane Icon */}
                <div className="flex-column d-flex align-items-start justify-content-start gap-4 mb-3s">
                  <span className="d-flex align-items-start gap-2">
                    <img src={plane} className="img-fluid" alt="Plane Icon" />
                    <span>About our company</span>
                    <img src={plane} className="img-fluid" alt="Plane Icon" />
                  </span>
                  {/* TITLE */}
                  <h2 className="mb-3">This is travel — with ease</h2>
                  <p>
                    BlueHawk isn’t just a travel company — we blend culture, taste, and a touch of
                    wanderlust to turn every journey into a story worth telling.
                  </p>
                </div>
              </div>
              <div className="row about-cols">
                {/* Left Image Column */}
                <div className="col-md-6">
                  <div className="about-col-img position-relative">
                    <i className="bi bi-play-fill position-absolute"></i>
                    <img src={about2} className="img-fluid" alt="About BlueHawk" />
                  </div>
                </div>
                {/* Right Check Features Column */}
                <div className="col-lg-6 about-cols p-1">
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="Check Icon" />
                    Hassle-free planning
                  </h4>
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="Check Icon" />
                    24/7 customer assistance
                  </h4>
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="Check Icon" />
                    Save Your Budget
                  </h4>
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="Check Icon" />
                    Free Consultations
                  </h4>
                </div>
              </div>
              {/* About Bottom */}
              {/* Left: Button + Testimonials */}
              <div className="about-bottom mt-5 d-flex gap-4">
                <div className="btn-box">
                  <Link to='/About'className="btn custom-btn1">
                    Learn More
                    <img src={btnArrow} className="img-fluid ms-2" alt="Arrow Icon" />
                  </Link>
                </div>
                {/* Client img  */}
                <div className="about-col-box d-flex align-items-center ms-2">
                  <div className="about-col-box-img">
                    <img src={tst1} className="img-fluid" alt="Client Avatar" />
                    <img src={tst2} className="img-fluid" alt="Client Avatar" />
                    <img src={tst3} className="img-fluid" alt="Client Avatar" />
                    <img src={tst4} className="img-fluid" alt="Client Avatar" />
                  </div>
                  <p className="ms-4 m-0 fs-5">8000+ Satisfied Clients</p>
                </div>
              </div>
            </div>
            {/* Right: Background cream color decorative Images */}
            <div className="col-lg-4 about-img">
              <img src={about1} className="img-fluid" alt="Main About Image" />
              <img src={abElement1} className="img-fluid abElement1 position-absolute" alt="Decorative Element 1" />
              <img src={abElement2} className="img-fluid abElement2 position-absolute" alt="Decorative Element 2" />
              <img src={abElement3} className="img-fluid abElement3 position-absolute" alt="Decorative Element 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Discover  */}
      <div className="discover py-5">
        <div className="section-title">
          <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3 section-title mt-5 pt-5">
            <span className="d-flex align-items-center gap-2">
              <img src={plane} className='img-fluid' alt="" />
              <span>Travel Destination</span>
              <img src={plane} className='img-fluid' alt="" />
            </span>
            <h2>Discover the Touch of Nature</h2>
            <p> Nature’s finest, curated for you. Our guests call it unforgettable. We call it standard </p>
          </div>
        </div>
        <div className="row px-5 my-5 mx-0 gap-1 align-items-center justify-content-center">
          <div className="col-lg-2 discover-card position-relative">
            <img src={DiscoverImg1} className='img-fluid' alt="" />
            <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
              <span><i className="bi bi-geo-alt-fill"></i>Maldives</span>
              <h2 className="mt-4">Beautiful tropical beach with the umbrella chair around swimming pool</h2>
            </div>
          </div>
          <div className="col-lg-2 discover-card position-relative">
            <img src={DiscoverImg2} className='img-fluid' alt="" />
            <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
              <span><i className="bi bi-geo-alt-fill"></i>Italy</span>
              <h2 className="mt-4">Charming cobblestone streets with café terraces and sunset views over ancient ruins</h2>
            </div>
          </div>
          <div className="col-lg-2 discover-card position-relative">
            <img src={DiscoverImg3} className='img-fluid' alt="" />
            <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
              <span><i className="bi bi-geo-alt-fill"></i>Dubai</span>
              <h2 className="mt-4">Luxury skyline views with golden sands and rooftop pools under the desert sun</h2>
            </div>
          </div>
          <div className="col-lg-2 discover-card position-relative">
            <img src={DiscoverImg4} className='img-fluid' alt="" />
            <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
              <span><i className="bi bi-geo-alt-fill"></i>Nepal</span>
              <h2 className="mt-4">Peaceful mountain escape with cozy lodges nestled below the Himalayan sky</h2>
            </div>
          </div>
        </div>
        <p className='text-center mt-5 fs-5'>Want to See Our Top Destinations.<a href="/tour">Click here to View More </a></p>
      </div>
      {/* Working Steps  */}
      <div className="working py-4 my-5 position-relative">
        <img src={FeatureImg1} className='featureImg featureImg1 img-fluid position-absolute' alt="" />
        <img src={FeatureImg2} className='featureImg featureImg2 img-fluid position-absolute' alt="" />
        <div className="container">
          <div className="row">
            <div className="section-title about-title">
              {/* FIRST ROW — Plane Icon + Text + Plane Icon */}
              <div className="flex-column d-flex align-items-start justify-content-start gap-3 mb-3">
                <span className="d-flex align-items-start gap-2">
                  <img src={plane} className="img-fluid" alt="Plane Icon" />
                  <span>Working Steps</span>
                  <img src={plane} className="img-fluid" alt="Plane Icon" />
                </span>
                {/* TITLE */}
                <h2>Book Your Next Trip<br />In 3 Steps</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5 gap-3">
            <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
              <div className="step-img rounded">
                <img src={steps1} className='img-fluid' alt="" />
              </div>
              <div className="step-content">
                <h2>Pick A Place</h2>
                <p>Find the one that matches your vibe — Wander through world-class destinations</p>
              </div>
            </div>
            <div className="col-lg-4 step-card rounded p-4 border d-flex flex-column gap-3">
              <div className="step-img step-img2 rounded">
                <img src={steps2} className='img-fluid' alt="" />
              </div>
              <div className="step-content">
                <h2>Secure Your Spot</h2>
                <p>Lock in your travel plans with just a few clicks — No queues, no chaos.</p>
              </div>
            </div>
            <div className="col-lg-4 step-card rounded p-4 border d-flex flex-column gap-3">
              <div className="step-img step-img3 rounded">
                <img src={steps3} className='img-fluid' alt="" />
              </div>
              <div className="step-content">
                <h2>Board with Ease</h2>
                <p>Arrive at the airport or station with  confidence —   Sit back and enjoy trip.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offers  */}
      <div className="offers py-5 position-relative overflow-hidden">
        {/* Background Images */}
        <img src={offerBG1} className="offer-img1 img-fluid position-absolute" alt="Offer Background 1" />
        <img src={offerBG2} className="offer-img2 img-fluid position-absolute" alt="Offer Background 2" />

        <div className="container">
          <div className="row">
            <div className="offers-wrapper position-relative z-1">
              <div className="section-title offer-title">
                <div className="d-flex flex-column align-items-start justify-content-start gap-3 text-start">
                  <div className="d-flex align-items-center gap-2">
                    <img src={plane} className="img-fluid" alt="Plane Left" />
                    <span>Offer</span>
                    <img src={plane} className="img-fluid" alt="Plane Right" />
                  </div>

                  <h2>Get Special Offer</h2>
                  <p className="text-start">
                    Embark on an unforgettable journey with our exclusive tour special offer—seize the moment and create lasting memories.
                  </p>
                </div>

                {/* Call-to-action Button */}
                <div className="btn-box offer-btn mt-4">
                  <Link to='/about'className="btn custom-btn1">
                    Learn More
                    <img src={btnArrow} className="img-fluid ms-1" alt="Arrow" />
                  </Link>
                </div>

                {/* Large Decorative Offer Number */}
                <div className="offer-text position-absolute">
                  <h1 className="offer-number">20<span>% OFF</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials  */}
      <div className="testimonial py-5  mt-5 position-relative">
        <img src={testBG} alt="img-testimonials" className="img-fluid test-img position-absolute" />
        <img src={testBG} alt="img-testimonials" className="img-fluid test-img-2 position-absolute" />

        <div className='section-title test-title mt-2'>
          <div className="text-center d-flex flex-column gap-3 justify-content-center align-items-center">
            <span className='d-flex align-items-center gap-2'>
              <img src={plane} className='img-fluid' alt="" />
              <span>Testimonials</span>
              <img src={plane} className='img-fluid' alt="" />
            </span>
            <h2>What Our Clients Say</h2>
            <p>We believe great service speaks for itself—but our clients say it even better. Here’s what they have to say.</p>
          </div>

        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            className='test-Swiper'
          >
            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="testimonial-img d-flex align-items-center justify-content-center">
                    <img src={testimg01} className='img-fluid' alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="test-content">
                    <img src={quote} className='img-fluid test-content-img' alt="" />
                    <p className='test-pare'>
                      Lorem ipsum dolor amet consectetur, adipisicing elit.
                    </p>
                    <div className="test-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="test-user mt-3 d-flex align-items-center gap-2">
                      <img src={testimg02} className='img-fluid' alt="" />
                    </div>
                    <div className="test-user-info">
                      <h3>GOVIND SINGH</h3>
                      <p className='m-0'>Developer at Anisant</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="testimonial-img d-flex align-items-center justify-content-center">
                    <img src={testimg01} className='img-fluid' alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="test-content">
                    <img src={quote} className='img-fluid test-content-img' alt="" />
                    <p className='test-pare'>
                      Lorem ipsum dolor amet consectetur, adipisicing elit.
                    </p>
                    <div className="test-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="test-user mt-3 d-flex align-items-center gap-2">
                      <img src={testimg02} className='img-fluid' alt="" />
                    </div>
                    <div className="test-user-info">
                      <h3>GOVIND SINGH</h3>
                      <p className='m-0'>Developer at Anisant</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Banners  */}
      <div className="blog-banner py-5 container-fluid d-flex justify-content-center align-items-center">
        <div className="container banner-title section-title d-flex text-center">
          <h2>BlueHawk is a World Leading Tour Booking Platform</h2>
          <div className="btn-box mt-5">
            <Link to='/contact' className="btn custom-btn1">
              Learn More
              <img src={btnArrow} className='img-fluid ms-2' alt="" />
            </Link>
          </div>
        </div>
      </div>
      {/* Blog  */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 section-title blog-title">
            <span className="text-primary fw-bold">BLOG & NEWS</span>
            <h2 className='fw-bold mt-2'>Get More Update<br />News & Blogs</h2>
          </div>
          <div className="col-md-6 blog-paragraph">
            <p>Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog post.</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card blog-card border-0 overflow-hidden">
              <div className="blog-img">
                <img src={blog1} className='card-img' alt="" />
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <span>Read More</span>
                <div className="detail">
                  <h5 className="card-title fw-bold">Beach Days, Long Hikes, And</h5>
                  <p className="card-text">Emma Mark ~ April 22,2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-card border-0 overflow-hidden">
              <div className="blog-img">
                <img src={blog2} className='card-img' alt="" />
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <span>Read More</span>
                <div className="detail">
                  <h5 className="card-title fw-bold">Beach Days, Long Hikes, And</h5>
                  <p className="card-text">Emma Mark ~ April 22,2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-card border-0 overflow-hidden">
              <div className="blog-img">
                <img src={blog3} className='card-img' alt="" />
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <span>Read More</span>
                <div className="detail">
                  <h5 className="card-title fw-bold">Beach Days, Long Hikes, And</h5>
                  <p className="card-text">Emma Mark ~ April 22,2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-center mt-5 fs-5">
          Want to See Our Blogs.
          <a href="/blog" className="ms-1 text-decoration-underline">Click to View More</a>
        </p>
      </div>

    {/* Footer */}
<div className="container-fluid">
  {/* Footer Main Section */}
  <div className="row px-3 px-md-5 py-5 align-items-start m-0">
    {/* Left Side (Subscribe + Info) */}
    <div className="col-md-8 order-1 order-md-0">
      {/* Subscribe Section */}
      <div className="row footer-head align-items-start custom-subscribe-row">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="footer-title section-title">
            Join the News Letter for more update
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your Email"
              className="form-control custom-input p-3 w-100 mb-2"
            />
            <div className="btn-box offer-btn mt-2">
              <button className="btn custom-btn1">
                Subscribe
                <img src={btnArrow} className="img-fluid ms-2" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mb-4 text-start">
        <a
          href="#"
          id="footer-logo"
          className="logo d-inline-block fw-bold mb-2"
          style={{
            fontSize: "1.8rem",
            textDecoration: "underline",
            color: "#000",
          }}
        >
          BlueHawk
        </a>
        <p className="text-muted">
          Go on a journey of unparalleled adventure with our travel agency,
          where every destination is a memory.
        </p>
        <ul className="d-flex justify-content-start gap-3 list-unstyled social-icons mt-3">
          <li><i className="ri-facebook-circle-fill fs-4"></i></li>
          <li><i className="ri-youtube-fill fs-4"></i></li>
          <li><i className="ri-instagram-fill fs-4"></i></li>
          <li><i className="ri-linkedin-box-fill fs-4"></i></li>
        </ul>
      </div>

      {/* Footer Links */}
      <div className="row text-start">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">Offers</a></li>
            <li><a href="/tour">Services</a></li>
          </ul>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <ul className="footer-links">
            <li><a href="/contact">Booking</a></li>
            <li><a href="/contact">FAQ</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="/about">Teams</a></li>
          </ul>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <ul className="footer-links">
            <li><a href="#">Terms & Use</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="/blog">Blogs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Side Image */}
   <div className="col-md-4 footer-img-container py-0">
  <img
    src={footer}
    className="footer-img"
    alt="Footer Visual"
  />
</div>
  </div>
</div>

{/* Footer Bottom */}
<div className="footer-bottom container-fluid text-white bg-dark p-2 text-center">
  <p className="mb-0 small">© 2024 <strong>Bluehawk</strong> - All Rights Reserved.</p>
</div>

    </>
  );
}

export default Index;
