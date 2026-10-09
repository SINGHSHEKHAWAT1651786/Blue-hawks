import { Link } from "react-router-dom";
import contactDetails from '../../contactDetails';

import ins1 from '../../assets/ins1.webp';
import ins2 from '../../assets/ins2.webp';
import ins3 from '../../assets/ins3.webp';
import ins4 from '../../assets/ins3.webp';
import ins5 from '../../assets/ins5.webp';
function Footer() {
    return (
        <>
            <footer className="big-light py-5 pb-0">
                <div className="container">
                    <div className="row g-4">
                        <h2 className="fw-bold mb-4">Quick Links:</h2>
                        <div className="row g-3 w-100">
                            <div className="col-md-9">
                                <div className="row">
                                    {[
                                        { label: "Home", to: "/" },
                                        { label: "About Us", to: "/about" },
                                        { label: "Trip Search", to: "/tour" },
                                        { label: "Travel Services", to: "/services" },
                                        { label: "Destinations", to: "/destination" },
                                        { label: "Travel Blog", to: "/blog" },
                                        { label: "Contact", to: "/contact" },
                                    ].map(({ label, to }) => (
                                        <div className="col-sm-6 col-lg-4" key={to}>
                                            <p>
                                                <i className="fas fa-check me-2" />
                                                <Link className="text-dark text-decoration-none" to={to}>{label}</Link>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className=" col-md-3">
                                <p><i className="fas fa-user me-2"></i>{contactDetails.name}</p>
                                <p><i className="fas fa-phone-alt me-2"></i><a className="text-dark text-decoration-none" href={`tel:${contactDetails.phoneLink}`}>{contactDetails.phone}</a></p>
                                <p><i className="fas fa-envelope me-2"></i><a className="text-dark text-decoration-none" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
                                <p><i className="fas fa-map-marker-alt me-2"></i>{contactDetails.address}</p>
                                <div className="footer-social footer-icons mt-3">
                                    <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/bluehawks_travelwithease/" className="text-dark text-decoration-none me-3" target="_blank" rel="noopener noreferrer" aria-label="Visit Blue Hawks on Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="footer-img  d-flex flex-wrap justify-content-center gap-3">
                                <div className="img-wrapper">
                                    <img src={ins1} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins2} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins3} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins4} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins5} alt="ins-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright text-center mt-4 py-3  border-top">
                        <p className="mb-0 small">
                            © {new Date().getFullYear()} <Link to="/" className="footer-copyright-link"><strong>Bluehawk</strong></Link> - All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;