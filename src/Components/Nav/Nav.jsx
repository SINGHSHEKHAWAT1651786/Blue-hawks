// Nav.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


import whiteLogo from "../../assets/whitelogo.png";   // top-of-page logo
import colorLogo from "../../assets/logodesign.png";       // after-scroll logo

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  /* theme swap on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 return (
  <>
    <nav
      className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${
        scrolled ? "black-them" : "white-them"
      }`}
    >
       <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* USE THE FLAG TO PICK THE IMAGE */}
        <Link to="/" className="logo navbar-brand d-flex align-items-center">
          <img
            src={scrolled ? colorLogo : whiteLogo}
            alt="BlueHawk logo"
            style={{
              height: "60px",
              marginLeft: "-50px",
              objectFit: "contain",
            }}
          />
          Blue<span>Hawks</span>
        </Link>

          <div className="d-flex align-items-center">
            {/* This is for search icon  */}
             {/* This opens the search modal when the icon is clicked */}
            <i className="bi bi-search me-2 search-icon" type='button'data-bs-toggle="modal" data-bs-target='#searchModal'></i>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >

              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/tour">Tour</Link></li>
            <li className="nav-item"><Link to="/blog">Blog</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav> 
      {/* Searching  */}
      {/* fade  animation  when click on search button  */}
      <div className="modal fade" id='searchModal' tabIndex='-1' aria-labelledby='searchModalLabel' aria-hidden="true">
        {/* Modal center show */}
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal content black background and white text  */}
          <div className="modal-content bg-dark text-white">
            {/* modal text having close button and header */}
          <div className="modal-header border-0">
            <h5 className="modal-title" id='searchModalLabel'>Search</h5>
           <button type='button' className='btn-close btn-close-white' data-bs-dismiss="modal" aria-label='Close'></button>
          </div>
          <div className="modal-body">
            <div className="input-group modal-input">
            <input type="text" className='form-control' placeholder='Search Here...'/>
            <span className="input-group-text bg-white"><i className="bi bi-search text-dark"></i></span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
