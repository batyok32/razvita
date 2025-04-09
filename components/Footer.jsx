import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-gradient-aztec-green position-relative">
            <div className="position-absolute left-minus-100px top-25px">
                <img
                    src="/images/demo-elearning-bg-05.png"
                    alt=""
                    className="w-80"
                />
            </div>
            <div
                className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
                style={{
                    backgroundImage:
                        "url('/images/vertical-line-bg-small.svg')",
                }}
            ></div>
            <div className="container overlap-section">
                <div
                    className="row g-0 justify-content-center align-items-center text-center bg-base-color border-radius-6px ps-5 pe-5 pt-3 pb-3 mb-8 sm-p-25px background-position-left-bottom background-no-repeat contain-background position-relative"
                    style={{
                        backgroundImage:
                            "url('/images/demo-elearning-bg-06.png')",
                    }}
                >
                    {/* start footer column */}
                    <div className="col-lg-auto lg-mb-20px">
                        <h6 className="alt-font fw-600 text-dark-gray m-0 ls-minus-1px d-inline-block me-30px lg-me-0">
                            Admission is open
                        </h6>
                    </div>
                    {/* end footer column */}
                    {/* start footer column */}
                    <div className="col-auto">
                        <a
                            href="/contact"
                            className="btn btn-extra-large btn-dark-gray btn-rounded btn-box-shadow btn-switch-text d-inline-block me-20px align-middle xs-m-0"
                        >
                            <span>
                                <span
                                    className="btn-double-text"
                                    data-text="Get started now"
                                >
                                    Get started now
                                </span>
                                <span>
                                    <i className="feather icon-feather-thumbs-up"></i>
                                </span>
                            </span>
                        </a>
                        <span className="d-block d-sm-inline-block text-dark-gray fs-19 fw-600 left-icon d-inline-block align-middle xs-mt-10px ls-minus-05px">
                            <a href="tel:12345678910">
                                <i className="feather icon-feather-phone-call"></i>
                                +1 206 550 1543
                            </a>
                        </span>
                    </div>
                    {/* end footer column */}
                </div>
            </div>
            <div className="container footer-dark text-center text-sm-start position-relative">
                <div className="row mb-5 sm-mb-7 xs-mb-30px">
                    {/* start footer column */}
                    <div className="col-lg-4 col-md-4 col-sm-6 d-flex flex-column last-paragraph-no-margin md-mb-40px xs-mb-30px">
                        <a
                            href="/demo-elearning"
                            className="footer-logo mb-15px d-inline-block"
                        >
                            {/* <img
                                    src="/images/demo-elearning-footer-logo.png"
                                    alt=""
                                /> */}
                            <div className="fs-3 text-white fw-bold">
                                Razvita
                            </div>
                        </a>
                        <p className="lh-28">
                            We are providing high-quality courses for about ten
                            years.
                        </p>
                        {/* <div className="elements-social social-text-style-01 mt-9 xs-mt-15px">
                                <ul className="small-icon light fw-500">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Fb.
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="http://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ig.
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="http://www.twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Tw.
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="behance"
                                            href="http://www.behance.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Be.
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                    </div>
                    {/* end footer column */}
                    {/* start footer column */}
                    <div className="col-lg-4 col-md-4 col-sm-6 ps-4 last-paragraph-no-margin md-mb-40px xs-mb-30px">
                        <span className="fw-500 fs-18 d-block text-white mb-10px">
                            Popular courses
                        </span>
                        <ul>
                            <li>
                                <Link href="/courses/frontend">
                                    Front-End Developer (Next.js)
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/python-automation">
                                    Python Programming & Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/backend-django">
                                    Backend Developer with Django
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/mobile-react-native">
                                    Mobile App Developer (React Native)
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/ethical-hacking">
                                    Ethical Hacking & Cybersecurity
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/game-dev-unity">
                                    Game Developer (Unity)
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* end footer column */}
                    {/* start footer column */}
                    <div className="col-lg-4 col-md-4 col-sm-6 last-paragraph-no-margin xs-mb-30px">
                        <span className="fw-500 fs-18 d-block text-white mb-10px">
                            Need help?
                        </span>
                        <span className="lh-26 d-block">Call us directly?</span>
                        <span className="text-white d-block mb-10px">
                            <a href="tel:12065501543">+1 206 550 1543 </a>
                            <span className="bg-base-color fw-700 text-dark-gray lh-22 text-uppercase border-radius-30px ps-10px pe-10px fs-11 ms-5px d-inline-block align-middle">
                                Free
                            </span>
                        </span>
                        <span className="lh-26 d-block">Need support?</span>
                        <a
                            href="mailto:help@domain.com"
                            className="text-white text-decoration-line-bottom"
                        >
                            sales@razvita.com
                        </a>
                    </div>
                    {/* end footer column */}
                    {/* start footer column */}
                    {/* <div className="col-lg-3 col-md-12 col-sm-6 text-md-center text-lg-start">
                            <span className="fs-18 fw-500 d-block text-white mb-20px">
                                Subscribe our newsletter
                            </span>
                            <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-15px">
                                <form
                                    action="/email-templates/subscribe-newsletter.php"
                                    method="post"
                                    className="position-relative w-100"
                                >
                                    <input
                                        className="input-small bg-dark-gray border-color-transparent-white-light w-100 form-control required"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                    />
                                    <input
                                        type="hidden"
                                        name="redirect"
                                        value=""
                                    />
                                    <button
                                        type="submit"
                                        aria-label="submit"
                                        className="btn pe-20px text-white fs-13 fw-500 lg-ps-15px lg-pe-15px submit"
                                    >
                                        Submit{" "}
                                        <i className="feather icon-feather-arrow-right submit"></i>
                                    </button>
                                    <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"></div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-sm-start justify-content-lg-start fs-14">
                                <div className="d-inline-block">
                                    <i className="line-icon-Handshake me-10px align-middle icon-very-medium"></i>
                                    Protecting your privacy
                                </div>
                            </div>
                        </div> */}
                    {/* end footer column */}
                </div>
                <div className="row align-items-center footer-bottom border-top border-color-transparent-white-light pt-30px g-0">
                    {/* start footer menu */}
                    {/* <div className="col-xl-7 ps-0 text-center text-xl-start lg-mb-10px">
                            <ul className="footer-navbar fs-16 lh-normal">
                                <li className="nav-item active">
                                    <a
                                        href="/demo-elearning"
                                        className="nav-link ps-0"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/demo-elearning-about"
                                        className="nav-link"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/demo-elearning-courses"
                                        className="nav-link"
                                    >
                                        Courses
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/demo-elearning-instructors"
                                        className="nav-link"
                                    >
                                        Instructors
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/demo-elearning-testimonial"
                                        className="nav-link"
                                    >
                                        Testimonial
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/demo-elearning-blog"
                                        className="nav-link"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/demo-elearning-contact"
                                        className="nav-link"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    {/* end footer menu */}
                    {/* start copyright */}
                    <div className=" last-paragraph-no-margin text-center text-xl-end">
                        <p className="fs-16">&copy; 2024 Razvita.com </p>
                    </div>
                    {/* start copyright */}
                </div>
            </div>

            <div className="scroll-progress d-none d-xxl-block">
                <a href="#" className="scroll-top" aria-label="scroll">
                    <span className="scroll-text">Scroll</span>
                    <span className="scroll-line">
                        <span className="scroll-point"></span>
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
