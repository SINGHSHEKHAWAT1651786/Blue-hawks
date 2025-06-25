import React from 'react'
import { Link } from 'react-router-dom';
import blogAuthor from './../../assets/blog-author.jpeg';
import blog1 from './../../assets/blog1.webp';
import blog2 from './../../assets/blog2.webp';
import blog3 from './../../assets/blog3.webp';
import blog4 from './../../assets/blog4.webp';
import blog5 from './../../assets/blog5.webp';

function Blog() {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Blog</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Blog
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="blog py-5">
                <div className="container position-relative">

                    {/* Blog Cards */}
                    <div className="row g-4 blog-page mt-5 pt-2">
                        {[blog1, blog1, blog2, blog3, blog4].map((img, index) => (
                            <div className="col-lg-8" key={index}>
                                <div className="blog-card mb-4 shadow">
                                    <img src={img} className="blog-img-top img-fluid" alt="Blog" />
                                    <div className="blog-card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="blog-img mt-4">
                                                <img
                                                    src={blogAuthor}
                                                    className="blog-author-img me-3"
                                                    alt="Author"
                                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                                />
                                            </div>
                                        </div>
                                        <h3 className="card-title fw-bold mb-3">Island Hopping And Weather Tips</h3>
                                        <p className="card-text mb-3">
                                            Rfdk dfbtjg fd gtgifbtrgio igtiggijbtrggfbitrhijgfbijogg t tgiotgigbtsiooigthjoibjbbvb
                                        </p>
                                        <a href="#" className="no-underline">
                                            Explore More <i className="bi bi-arrow-up-right ms-3"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search  */}
                    <div className="position-absolute" style={{ top: '33px', right: '20px', width: '300px' }}>
                        <div className="details mb-4 bg-white p-3 shadow rounded">
                            <h5 className="fw-bold mb-4">Search</h5>
                            <div className="search-input-wrapper">
                                <input type="text" className="form-control search-input-with-icon" placeholder="Search..." />
                                <i className="bi bi-search search-icon-inside"></i>
                            </div>
                        </div>
                    </div>
                    
                    {/* Categories Box  */}
                    <div className="position-absolute" style={{ top: '200px', right: '20px', width: '300px' }}>
                        <div className="categories-card bg-white p-3 shadow rounded">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            <ul className="list-group mb-0">
                                <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-asterisk me-2"></i>
                                        <a href="#" className="text-decoration-none">Adventure</a>
                                    </div>
                                    <span>2</span>
                                </li>
                            </ul>
                            <ul className="list-group mb-0">
                                <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-asterisk me-2"></i>
                                        <a href="#" className="text-decoration-none">Adventure</a>
                                    </div>
                                    <span>2</span>
                                </li>
                            </ul>
                            <ul className="list-group mb-0">
                                <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-asterisk me-2"></i>
                                        <a href="#" className="text-decoration-none">City Tours</a>
                                    </div>
                                    <span>3</span>
                                </li>
                            </ul>
                            <ul className="list-group mb-0">
                                <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-asterisk me-2"></i>
                                        <a href="#" className="text-decoration-none">Visas News</a>
                                    </div>
                                    <span>2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Recent Box */}
                    <div
                        className="recent-card position-absolute bg-white p-3 shadow rounded"
                        style={{ top: '550px', right: '20px', width: '300px' }}
                    >
                        <h5 className="fw-bold mb-4">Recent Posts</h5>
                        {[blog1, blog2, blog3, blog4].map((img, index) => (
                            <div className="d-flex mb-4 recent-item" key={index}>
                                <img src={img} className="recent-thumb me-3" alt="Post" />
                                <div>
                                    <small>
                                        <i className="bi bi-calendar2-week me-1"></i>May&nbsp;11,&nbsp;2024
                                    </small>
                                    <p className="recent-title">
                                        {index === 0
                                            ? 'Island Hopping And Weather Tips'
                                            : index === 1
                                                ? 'Beach Days, Long Hikes'
                                                : 'Experience the World Travel'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
