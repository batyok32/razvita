"use client";
import { posts } from "@/components/courses";

// Ensure posts is not empty for debugging
if (!posts || posts.length === 0) {
    console.error(
        "Error: 'posts' is empty or undefined. Check the data source."
    );
}
import { notFound } from "next/navigation";
import React, { useState } from "react";

// Dummy data or fetch logic

export default function CoursePage({ params }) {
    console.log("params", params);
    const { slug } = React.use(params);
    console.log("slug", slug);
    console.log(
        "slug",
        posts.map((c) => c.detailsLink.replace("/courses/", ""))
    );
    const course = posts.find(
        (c) => c.detailsLink.replace("/courses/", "") === slug
    );
    console.log("course", course);

    if (!course?.title) return notFound();

    const [tabState, setTabState] = useState("tab_five1");
    return (
        <div>
            {/* start page title  */}
            <section
                className="ipad-top-space-margin bg-dark-gray cover-background page-title-big-typography"
                style={{
                    backgroundImage: "url('/images/custom/image2.webp')",
                }}
            >
                <div
                    className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
                    style={{
                        backgroundImage:
                            "url('images/vertical-line-bg-small.svg')",
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
                                Courses detalis
                            </h1>
                            <h2 className="fw-500 m-0 ls-minus-2px text-white alt-font">
                                {course.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* end page title  */}
            {/* start section  */}
            <section className="border-bottom border-color-extra-medium-gray pt-20px pb-20px">
                <div className="container">
                    <div
                        className="row text-center justify-content-center align-items-center"
                        // data-anime='{ "el": "childs", "opacity": [0, 1], "translateX": [30, 0], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
                    >
                        <div className="col-lg-auto d-flex justify-content-center md-mb-10px icon-with-text-style-08 text-center text-sm-start">
                            <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                                <div className="feature-box-icon me-15px">
                                    <img
                                        src={course.image}
                                        className="rounded-circle w-60px"
                                        alt=""
                                    />
                                </div>
                                <div className="feature-box-content">
                                    <span>
                                        <span className="fw-600 text-dark-gray">
                                            Instructor:
                                        </span>{" "}
                                        {course.author}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* start separator  */}
                        <div className="col-auto lg-p-0 d-none d-lg-block">
                            <span className="w-1px h-20px bg-extra-medium-gray d-block "></span>
                        </div>
                        {/* end separator  */}
                        <div className="col-sm-auto">
                            <span>
                                <span className="fw-600 text-dark-gray">
                                    Categories:
                                </span>{" "}
                                {course.category}
                            </span>
                        </div>
                        {/* start separator  */}
                        <div className="col-auto lg-p-0 d-none d-sm-inline-block">
                            <span className="w-1px h-20px bg-extra-medium-gray d-block "></span>
                        </div>
                        {/* end separator  */}
                        <div className="col-sm-auto">
                            <span>
                                <span className="fw-600 text-dark-gray ">
                                    Active Learners:
                                </span>{" "}
                                {course.students} students
                            </span>
                        </div>
                        {/* start separator  */}
                        <div className="col-auto lg-p-0 d-none d-md-inline-block">
                            <span className="w-1px h-20px bg-extra-medium-gray d-block "></span>
                        </div>
                        {/* end separator  */}
                        <div className="col-sm-auto md-mt-0">
                            <div className="review-star-icon d-inline-block">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="fs-15 lh-26 d-inline-block">
                                ({course.reviews} Reviews)
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section  */}
            {/* start section  */}
            <section className="position-relative">
                <div className="container">
                    <div
                        className="row justify-content-center"
                        // data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'
                    >
                        <div className="col-lg-8 md-mb-50px">
                            {/* start details   */}
                            <div className="col-12">
                                <img
                                    src={course.image}
                                    alt=""
                                    className="w-100 border-radius-6px mb-7"
                                />
                                {/* <div
                                    dangerouslySetInnerHTML={{
                                        __html: course.htmlDescription,
                                    }}
                                ></div> */}
                                <div>{course.htmlDescription}</div>
                            </div>
                            {/* end details  */}
                        </div>
                        {/* start sidebar  */}
                        <aside className="col-lg-4 ps-60px lg-ps-30px md-ps-15px">
                            <div className="position-sticky top-150px lg-position-relative lg-top-0px">
                                <div className="border-radius-6px overflow-hidden bg-tranquil">
                                    {/* <div className="position-relative">
                                        <img
                                            src="https://placehold.co/700x465"
                                            className="md-w-100"
                                            alt=""
                                        />
                                        <a
                                            href="https://www.youtube.com/watch?v=cfXHhfNy7tU"
                                            className="absolute-middle-center d-inline-block text-center bg-white box-shadow-extra-large rounded-circle video-icon-box video-icon-large popup-youtube"
                                        >
                                            <span>
                                                <span className="video-icon bg-white">
                                                    <i className="fa-solid fa-play text-dark-gray"></i>
                                                    <span className="video-icon-sonar">
                                                        <span className="video-icon-sonar-bfr bg-white opacity-9"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </a>
                                    </div> */}
                                    <div className="p-35px lg-p-25px">
                                        <ul className="p-0 mb-20px list-style-02">
                                            <li className="border-bottom border-color-extra-medium-gray pb-15px">
                                                <span className="text-dark-gray">
                                                    <span className="me-5px">
                                                        <i className="bi bi-clock-history fs-20"></i>
                                                    </span>
                                                    <span className="fw-600">
                                                        Duration
                                                    </span>
                                                </span>
                                                <span className="ms-auto">
                                                    {course.lessons} weeks
                                                </span>
                                            </li>
                                            <li className="border-bottom border-color-extra-medium-gray pt-15px pb-15px">
                                                <span className="text-dark-gray">
                                                    <span className="me-5px">
                                                        <i className="bi bi-people fs-20"></i>
                                                    </span>
                                                    <span className="fw-600">
                                                        Active Learners
                                                    </span>
                                                </span>
                                                <span className="ms-auto">
                                                    {course.students} students
                                                </span>
                                            </li>
                                            <li className="border-bottom border-color-extra-medium-gray pt-15px pb-15px">
                                                <span className="text-dark-gray">
                                                    <span className="me-5px">
                                                        <i className="bi bi-globe fs-20"></i>
                                                    </span>
                                                    <span className="fw-600">
                                                        Language
                                                    </span>
                                                </span>
                                                <span className="ms-auto">
                                                    English
                                                </span>
                                            </li>

                                            <li className="pt-10px pb-15px">
                                                <span className="text-dark-gray">
                                                    <span className="me-5px">
                                                        <i className="bi bi-award fs-20"></i>
                                                    </span>
                                                    <span className="fw-600">
                                                        Certificate
                                                    </span>
                                                </span>
                                                <span className="ms-auto">
                                                    Yes
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="text-white bg-dark-gray text-center border-radius-50px pt-10px pb-10px fs-18 fw-500 lh-34 w-100 mb-15px">
                                            Price: ${course.price}
                                        </div>
                                        <a
                                            href="/contact"
                                            className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text fw-600 left-icon w-100"
                                        >
                                            <span>
                                                <span>
                                                    <i className="feather icon-feather-thumbs-up"></i>
                                                </span>
                                                <span
                                                    className="btn-double-text"
                                                    data-text="Enroll now"
                                                >
                                                    Enroll now
                                                </span>
                                            </span>
                                        </a>
                                        {/* <div className="elements-social social-icon-style-02 mt-20px">
                                            <ul className="small-icon dark text-center">
                                                <li className="sm-mb-0">
                                                    <a
                                                        className="facebook"
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="sm-mb-0">
                                                    <a
                                                        className="dribbble"
                                                        href="http://www.dribbble.com"
                                                        target="_blank"
                                                    >
                                                        <i className="fa-brands fa-dribbble"></i>
                                                    </a>
                                                </li>
                                                <li className="sm-mb-0">
                                                    <a
                                                        className="twitter"
                                                        href="http://www.twitter.com"
                                                        target="_blank"
                                                    >
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="sm-mb-0">
                                                    <a
                                                        className="instagram"
                                                        href="http://www.instagram.com"
                                                        target="_blank"
                                                    >
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/* end sidebar  */}
                    </div>
                </div>
            </section>
            {/* end section  */}
            {/* start section  */}
            <section className="bg-tranquil overflow-hidden position-relative overlap-height">
                <div className="container overlap-gap-section">
                    <div className="row justify-content-center mb-2">
                        <div className="col-xl-5 col-lg-6 text-center">
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">
                                Related courses
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 px-0 sm-ps-15px sm-pe-15px">
                            <ul
                                className="portfolio-wrapper row row-cols-lg-3 row-cols-md-2 row-cols-1 gutter-extra-large"
                                // data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                            >
                                {posts
                                    // .sort(() => Math.random() - 0.5)
                                    .slice(0, 3)
                                    .map((post, index) => (
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
                                                                    {Array.from(
                                                                        {
                                                                            length: post.rating,
                                                                        }
                                                                    ).map(
                                                                        (
                                                                            _,
                                                                            i
                                                                        ) => (
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
                                                                    (
                                                                    {
                                                                        post.reviews
                                                                    }{" "}
                                                                    Reviews)
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center ps-35px pe-35px xl-ps-25px xl-pe-25px pt-15px pb-20px">
                                                        <div className="me-auto">
                                                            <i className="feather icon-feather-clipboard text-dark-gray d-inline-block me-5px"></i>
                                                            <span className="fs-16 text-dark-gray fw-500">
                                                                {post.lessons}{" "}
                                                                Weeks
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                {/* start portfolio item  */}
                                {/* <li className="grid-item design transition-inner-all">
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="demo-elearning-courses-details.html">
                                                <img
                                                    src="https://placehold.co/600x385"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="bg-white position-relative">
                                            <div className="bg-dark-gray w-80px h-80px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                                                $55
                                            </div>
                                            <div className="ps-40px pe-40px pt-30px pb-30px border-bottom border-color-transparent-dark-very-light xl-ps-25px xl-pe-25px">
                                                <span className="d-block mb-10px">
                                                    <a
                                                        href="demo-elearning-courses.html"
                                                        className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                                                    >
                                                        Design
                                                    </a>
                                                    <span className="fs-16">
                                                        Matthew taylor
                                                    </span>
                                                </span>
                                                <div className="d-flex align-items-center mb-5px">
                                                    <a
                                                        href="demo-elearning-courses-details.html"
                                                        className="text-dark-gray fw-600 fs-19 lh-28 w-90"
                                                    >
                                                        Business accounting and
                                                        taxation fundamental
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-inline-block me-auto">
                                                        <div className="review-star-icon float-start">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                        <div className="fs-15 float-start ms-5px position-relative top-2px">
                                                            (20 Reviews)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center ps-40px pe-40px xl-ps-25px xl-pe-25px pt-15px pb-20px">
                                                <div className="me-auto">
                                                    <i className="feather icon-feather-clipboard text-dark-gray d-inline-block me-5px"></i>
                                                    <span className="fs-16 text-dark-gray fw-500">
                                                        10 Lessons
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="feather icon-feather-users text-dark-gray d-inline-block me-5px"></i>
                                                    <span className="fs-16 text-dark-gray fw-500">
                                                        18 Students
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                {/* end portfolio item  */}
                                {/* start portfolio item  */}
                                {/* <li className="grid-item business marketing transition-inner-all">
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="demo-elearning-courses-details.html">
                                                <img
                                                    src="https://placehold.co/600x385"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="bg-white position-relative">
                                            <div className="bg-dark-gray w-80px h-80px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                                                $65
                                            </div>
                                            <div className="ps-40px pe-40px pt-30px pb-30px border-bottom border-color-transparent-dark-very-light xl-ps-25px xl-pe-25px">
                                                <span className="d-block mb-10px">
                                                    <a
                                                        href="demo-elearning-courses.html"
                                                        className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                                                    >
                                                        Finance
                                                    </a>
                                                    <span className="fs-16">
                                                        Leonel mooney
                                                    </span>
                                                </span>
                                                <div className="d-flex align-items-center mb-5px">
                                                    <a
                                                        href="demo-elearning-courses-details.html"
                                                        className="text-dark-gray fw-600 fs-19 lh-28 w-90"
                                                    >
                                                        Finance fundamentals of
                                                        management and planning
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-inline-block me-auto">
                                                        <div className="review-star-icon float-start">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                        <div className="fs-15 float-start ms-5px position-relative top-2px">
                                                            (39 Reviews)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center xl-ps-25px xl-pe-25px ps-40px pe-40px pt-15px pb-20px">
                                                <div className="me-auto">
                                                    <i className="feather icon-feather-clipboard text-dark-gray d-inline-block me-5px"></i>
                                                    <span className="fs-16 text-dark-gray fw-500">
                                                        22 Lessons
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="feather icon-feather-users text-dark-gray d-inline-block me-5px"></i>
                                                    <span className="fs-16 text-dark-gray fw-500">
                                                        30 Students
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                {/* end portfolio item  */}
                                {/* start portfolio item  */}
                                {/* <li className="grid-item development marketing transition-inner-all">
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="demo-elearning-courses-details.html">
                                                <img
                                                    src="https://placehold.co/600x385"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="bg-white position-relative">
                                            <div className="bg-dark-gray w-80px h-80px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                                                $80
                                            </div>
                                            <div className="ps-40px pe-40px pt-30px pb-30px border-bottom border-color-transparent-dark-very-light xl-ps-25px xl-pe-25px">
                                                <span className="d-block mb-10px">
                                                    <a
                                                        href="demo-elearning-courses.html"
                                                        className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                                                    >
                                                        Design
                                                    </a>
                                                    <span className="fs-16">
                                                        Herman miller
                                                    </span>
                                                </span>
                                                <div className="d-flex align-items-center mb-5px">
                                                    <a
                                                        href="demo-elearning-courses-details.html"
                                                        className="text-dark-gray fw-600 fs-19 lh-28 w-90"
                                                    >
                                                        Introduction to
                                                        application design and
                                                        development
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-inline-block me-auto">
                                                        <div className="review-star-icon float-start">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                        <div className="fs-15 float-start ms-5px position-relative top-2px">
                                                            (55 Reviews)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center ps-40px pe-40px xl-ps-25px xl-pe-25px pt-15px pb-20px">
                                                <div className="me-auto">
                                                    <i className="feather icon-feather-clipboard text-dark-gray d-inline-block me-5px"></i>
                                                    <span className="fs-16 text-dark-gray fw-500">
                                                        15 Lessons
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="feather icon-feather-users text-dark-gray d-inline-block me-5px"></i>
                                                    <span className="fs-16 text-dark-gray fw-500">
                                                        55 Students
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                {/* end portfolio item  */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
