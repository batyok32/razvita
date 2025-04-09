import { posts } from "@/components/courses";
import React from "react";

function Courses() {
    return (
        <div>
            {/* start page title */}
            <section
                className="ipad-top-space-margin bg-dark-gray cover-background page-title-big-typography"
                style={{
                    backgroundImage: "url(/images/custom/image3.webp)",
                }}
            >
                <div
                    className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
                    style={{
                        backgroundImage:
                            " url('images/vertical-line-bg-small.svg')",
                    }}
                ></div>
                <div
                    id="particles-style-01"
                    className="h-100 position-absolute left-0px top-0 w-100"
                    data-particle="true"
                    data-particle-options='{"particles": {"number": {"value": 8,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#d5d52b", "#d5d52b", "#d5d52b", "#d5d52b", "#d5d52b"]},"shape": {"type": "circle","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 1,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":1,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
                ></div>
                <div className="container">
                    <div className="row align-items-center extra-small-screen">
                        <div
                            className="col-xl-6 col-lg-7 col-md-8 col-sm-9 position-relative page-title-extra-small"
                            // data-anime='{ "el": "childs", "translateY": [-15, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <h1 className="mb-20px alt-font text-yellow">
                                Our online courses
                            </h1>
                            <h2 className="fw-500 m-0 ls-minus-2px text-white alt-font">
                                Best eLearning training classes.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* end page title */}
            {/* start section */}
            <section className="bg-tranquil position-relative overlap-height">
                <div
                    className="position-absolute left-minus-200px top-25"
                    data-bottom-top="transform: translateY(-80px)"
                    data-top-bottom="transform: translateY(80px)"
                >
                    <img src="images/demo-elearning-bg-04.png" alt="" />
                </div>
                <div className="container overlap-gap-section">
                    <div className="row align-items-center mb-4">
                        <div className="col-xl-5 lg-mb-30px text-center text-xl-start">
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">
                                Popular courses
                            </h2>
                        </div>
                        {/* <div className="col-xl-7 tab-style-04 text-center text-xl-end">
                            <ul className="portfolio-filter fw-500 nav nav-tabs justify-content-center justify-content-xl-end border-0">
                                <li className="nav active">
                                    <a data-filter="*" href="#">
                                        All
                                    </a>
                                </li>
                                <li className="nav">
                                    <a data-filter=".development" href="#">
                                        Development
                                    </a>
                                </li>
                                <li className="nav">
                                    <a data-filter=".business" href="#">
                                        Business
                                    </a>
                                </li>
                                <li className="nav">
                                    <a data-filter=".design" href="#">
                                        Design
                                    </a>
                                </li>
                                <li className="nav">
                                    <a data-filter=".marketing" href="#">
                                        Marketing
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-12 filter-content p-md-0">
                            <ul className="portfolio-wrapper row row-cols-lg-3 row-cols-md-2 row-cols-1 gutter-extra-large">
                                {/* <li className="grid-sizer"></li> */}
                                {posts.map((post, index) => (
                                    <li
                                        key={index}
                                        className="grid-item design transition-inner-all"
                                    >
                                        <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                            <div className="image">
                                                <a href={post.detailsLink}>
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                    />
                                                </a>
                                            </div>
                                            <div className="bg-white position-relative">
                                                <div className="bg-dark-gray w-80px h-80px md-w-75px md-h-75px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                                                    ${post.price}
                                                </div>
                                                <div className="ps-35px pe-35px pt-30px pb-30px border-bottom border-color-transparent-dark-very-light xl-ps-25px xl-pe-25px">
                                                    <span className="d-block mb-10px">
                                                        <a
                                                            href={
                                                                post.detailsLink
                                                            }
                                                            className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                                                        >
                                                            {post.category}
                                                        </a>
                                                        <span className="fs-16">
                                                            {" "}
                                                            {post.author}
                                                        </span>
                                                    </span>
                                                    <div className="d-flex align-items-center mb-5px">
                                                        <a
                                                            href={
                                                                post.detailsUrl
                                                            }
                                                            className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                                                        >
                                                            {post.title}
                                                        </a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d-inline-block me-auto">
                                                            <div className="review-star-icon float-start">
                                                                {Array.from({
                                                                    length: post.rating,
                                                                }).map(
                                                                    (_, i) => (
                                                                        <i
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="bi bi-star-fill"
                                                                        ></i>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="fs-15 float-start ms-5px position-relative top-2px">
                                                                ({post.reviews}{" "}
                                                                Reviews)
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center ps-35px pe-35px xl-ps-25px xl-pe-25px pt-15px pb-20px">
                                                    <div className="me-auto">
                                                        <i className="feather icon-feather-clipboard text-dark-gray d-inline-block me-5px"></i>
                                                        <span className="fs-16 text-dark-gray fw-500">
                                                            {post.lessons} Weeks
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="row mt-4">
                        <div className="col-12 d-flex justify-content-center">
                            <ul className="pagination pagination-style-01 fs-13 mb-0 fw-500">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="feather icon-feather-arrow-left fs-18 d-xs-none"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        01
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        02
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        03
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        04
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="feather icon-feather-arrow-right fs-18 d-xs-none"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Courses;
