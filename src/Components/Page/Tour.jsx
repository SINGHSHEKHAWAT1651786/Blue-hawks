import { useState } from "react";
import {  Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';
import Datas from '../../Destination.json';

const filterGroups = [
    { label: "Destination", key: "location" },
    { label: "Activities", key: "activities" },
    { label: "Trip Type", key: "tripType" },
];

const getFilterOptions = (key) => [
    ...new Set(
        Datas.flatMap((tour) => {
            const value = tour[key];
            return Array.isArray(value) ? value : [value];
        }).filter(Boolean)
    ),
].sort();

function Tour() {
    const [filters, setFilters] = useState({
        location: [],
        activities: [],
        tripType: [],
    });
    const [sortBy, setSortBy] = useState("featured");

    const toggleFilter = (key, value) => {
        setFilters((currentFilters) => {
            const selectedValues = currentFilters[key];
            return {
                ...currentFilters,
                [key]: selectedValues.includes(value)
                    ? selectedValues.filter((selectedValue) => selectedValue !== value)
                    : [...selectedValues, value],
            };
        });
    };

    const filteredTours = Datas.filter((tour) =>
        filterGroups.every(({ key }) => {
            const selectedValues = filters[key];
            if (selectedValues.length === 0) return true;

            const tourValues = Array.isArray(tour[key]) ? tour[key] : [tour[key]];
            return selectedValues.some((value) => tourValues.includes(value));
        })
    );

    const sortedTours = [...filteredTours].sort((firstTour, secondTour) => {
        switch (sortBy) {
            case "name":
                return firstTour.name.localeCompare(secondTour.name);
            case "duration-short":
                return Number.parseInt(firstTour.days, 10) - Number.parseInt(secondTour.days, 10);
            case "duration-long":
                return Number.parseInt(secondTour.days, 10) - Number.parseInt(firstTour.days, 10);
            default:
                return firstTour.id - secondTour.id;
        }
    });

    return (
        <>
            {/* About Section  */}
            <div className="section-banner section-banner--tour w-100">
                <div className="container">
                    <div className="section-banner-content ">
                        <h2>Trip Search Result</h2>
                        <ul>
                            <li className='pe-2'><Link to='/'>Home</Link>
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Trip Search Result
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Tour  */}
            <div className="tour-wrapper my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 tour-cate-wrap-sticky">
                            <div className="tour-cate-wrap">
                                <div className="tour-cate-col pb-3 border-bottom d-flex gap-5 justify-content-between">
                                    <h2>Criteria</h2>
                                    <button
                                        className="btn"
                                        type="button"
                                        onClick={() => setFilters({ location: [], activities: [], tripType: [] })}
                                    >
                                        Clear All
                                    </button>
                                </div>
                                {filterGroups.map(({ label, key }) => (
                                    <div className="tour-cate-box-wrap rounded pb-4 mt-5" key={key}>
                                        <div className="tour-cate-box">
                                            <h2>{label}</h2>
                                            {getFilterOptions(key).map((value) => {
                                                const count = Datas.filter((tour) => {
                                                    const tourValues = Array.isArray(tour[key]) ? tour[key] : [tour[key]];
                                                    return tourValues.includes(value);
                                                }).length;

                                                return (
                                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2" key={value}>
                                                        <label className="d-flex align-items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                checked={filters[key].includes(value)}
                                                                onChange={() => toggleFilter(key, value)}
                                                            />
                                                            {value}
                                                        </label>
                                                        <span aria-label={`${count} trips`}>{count}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="col-lg-8 ps-4 ps-lg-5">
                            <div className="row">
                                <div className="col-lg-12 border rounded p-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
                                    <span className="fs-5">{filteredTours.length} trips found</span>
                                    <label className="d-flex align-items-center gap-2 mb-0">
                                        <span className="fs-6">Sort by:</span>
                                        <select
                                            className="form-select"
                                            value={sortBy}
                                            onChange={(event) => setSortBy(event.target.value)}
                                            aria-label="Sort trips"
                                        >
                                            <option value="featured">Featured</option>
                                            <option value="name">Name (A–Z)</option>
                                            <option value="duration-short">Duration (shortest first)</option>
                                            <option value="duration-long">Duration (longest first)</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="row tours-grid mt-4">
                                {sortedTours.length > 0 ? (
                                    sortedTours.map(Data => (
                                        <div className="col-lg-6 mb-4" key={Data.id}>
                                            <div className="tour-card shadow-sm">
                                                <div className="tour-card-img">
                                                    <img src={Data.image} className="img-fluid rounded" alt="" />
                                                    <Link
                                                        to="/Contact"
                                                        className="tour-contact-link"
                                                        aria-label={`Contact about ${Data.name} package details`}
                                                    >
                                                        <span className="tour-contact-city">{Data.location}</span>
                                                    </Link>
                                                </div>
                                                <div className="tour-card-content mt-4 px-3">
                                                    <Link to={`/Tour-details/${Data.id}`} state={{ tours: Data }} className="text-black text-decoration-none"><h2>{Data.name}</h2></Link>
                                                    <div className="tour-card-box border-top py-3 d-flex justify-content-between gap-2 mt-3">
                                                        <p><i className="bi bi-clock-history"></i>{Data.days}</p>
                                                        <Link to={`/Tour-details/${Data.id}`} state={{ tours: Data }}>
                                                            View-Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="col-12 text-center py-5">No trips match the selected filters.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gallery  */}
            <section section className="gallery-grid my-5 mb-0" >
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
            </section >
        </>
    )
}
export default Tour;