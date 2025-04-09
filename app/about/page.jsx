// File: app/about/page.jsx (or /pages/about.jsx depending on structure)

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
    return (
        <>
            {/* Page Title Section */}
            <section
                className="ipad-top-space-margin bg-dark-gray cover-background page-title-big-typography relative"
                style={{
                    backgroundImage: "url(/images/custom/hero-5.jpg)",
                }}
            >
                <div
                    className="background-position-center-top h-100 w-100 absolute left-0 top-0"
                    style={{
                        backgroundImage:
                            "url('/images/vertical-line-bg-small.svg')",
                    }}
                ></div>
                <div
                    id="particles-style-01"
                    className="h-100 absolute left-0 top-0 w-100"
                    data-particle="true"
                    data-particle-options='{"particles": {"number": {"value": 8,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#d5d52b", "#d5d52b", "#d5d52b", "#d5d52b", "#d5d52b"]},"shape": {"type": "circle","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 1,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":1,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
                ></div>
                <div className="container">
                    <div className="row items-center">
                        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9 relative page-title-extra-small">
                            <h1 className="mb-5 alt-font text-yellow">
                                About our classes
                            </h1>
                            <h2 className="fw-500 m-0 ls-minus-2px text-white alt-font">
                                We are providing the best courses.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="position-relative z-index-1 background-position-left-top background-no-repeat overflow-hidden"
                style={{
                    backgroundImage: "url('images/demo-elearning-02.png')",
                }}
            >
                {/* <div
                className="position-absolute right-0px bottom-minus-90px z-index-minus-1 d-none d-md-inline-block"
                data-bottom-top="transform: translateY(-50px)"
                data-top-bottom="transform: translateY(50px)"
            >
                <img src="images/demo-elearning-04.png" alt="" />
            </div> */}
                <div className="container">
                    <div className="row align-items-end justify-content-center mb-8 xs-mb-12">
                        <div
                            className="col-xl-5 col-lg-6 col-md-10 position-relative md-mb-20px text-center text-lg-start"
                            // {/* data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <div className="icon-with-text-style-08 mb-20px d-inline-block">
                                <div className="feature-box feature-box-left-icon-middle">
                                    <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                                        <i className="bi bi-globe d-inline-block icon-extra-medium text-dark-gray"></i>
                                    </div>
                                    <div className="feature-box-content last-paragraph-no-margin">
                                        <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">
                                            Why learn with us?
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">
                                Personalized online IT courses that deliver real
                                results.
                            </h2>
                        </div>
                        <div
                            className="col-xl-6 col-lg-6 col-md-10 offset-xl-1 text-center text-lg-start last-paragraph-no-margin"
                            // {/* data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <span className="fw-600 mb-5px text-dark-gray d-block fs-18">
                                Study 1-on-1 or in small groups, with hands-on
                                learning and real projects.
                            </span>
                            <p className="w-85 xl-w-95 lg-w-100">
                                Our flexible and affordable classes help you
                                build skills that matter — from frontend
                                development to cybersecurity — all taught by
                                experienced mentors.
                            </p>
                        </div>
                    </div>
                    <div
                        className="row g-0 row-cols-1 row-cols-lg-4 row-cols-sm-2 g-0 align-items-center mb-3"
                        // {/* data-anime='{ "el": "childs", "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                    >
                        <div className="col services-box-style-07 text-center last-paragraph-no-margin border-end border-color-transparent-dark-very-light md-mb-50px xs-border-end-0">
                            <div className="pe-50px ps-50px pb-40px xl-ps-30px xl-pe-30px">
                                <div className="position-relative ms-auto me-auto mb-25px">
                                    <img
                                        src="/images/custom/demo-elearning-about-icon-01.png"
                                        className="h-75px position-relative z-index-1 mt-35px"
                                        alt=""
                                    />
                                    <div className="h-100px w-100px rounded-circle bg-very-light-gray position-absolute top-0 start-50 translate-middle-x"></div>
                                </div>
                                <span className="fs-18 fw-600 text-dark-gray d-block mb-5px">
                                    Free trial or money-back guarantee
                                </span>
                                <p className="lh-30">
                                    Best online platform for professional
                                    courses.
                                </p>
                            </div>
                            <div className="d-flex flex-column overflow-hidden w-100 justify-content-center position-relative">
                                <div className="fs-14 fw-700 text-uppercase text-dark-gray border-top border-bottom border-color-transparent-dark-very-light pt-10px pb-10px">
                                    <span className="text-down d-block">
                                        Student enrolled
                                    </span>
                                </div>
                                <div className="btn-hover d-flex align-items-center justify-content-center bg-dark-gray">
                                    <a
                                        href="/contact"
                                        className="inner-link btn btn-link btn-hover-animation-switch btn-extra-large text-white"
                                    >
                                        <span>
                                            <span className="btn-text">
                                                Apply now
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col services-box-style-07 text-center last-paragraph-no-margin border-end border-color-transparent-dark-very-light md-mb-50px md-border-end-0">
                            <div className="pe-50px ps-50px pb-40px xl-ps-30px xl-pe-30px">
                                <div className="position-relative ms-auto me-auto mb-25px">
                                    <img
                                        src="/images/custom/demo-elearning-about-icon-02.png"
                                        className="h-75px position-relative z-index-1 mt-35px"
                                        alt=""
                                    />
                                    <div className="h-100px w-100px rounded-circle bg-very-light-gray position-absolute top-0 start-50 translate-middle-x"></div>
                                </div>
                                <span className="fs-18 fw-600 text-dark-gray d-block mb-5px">
                                    Portfolio Building
                                </span>
                                <p className="lh-30">
                                    Graduate with a GitHub portfolio full of
                                    real apps, not just theory.
                                </p>
                            </div>
                            <div className="d-flex flex-column overflow-hidden w-100 justify-content-center position-relative">
                                <div className="fs-14 fw-700 text-uppercase text-dark-gray border-top border-bottom border-color-transparent-dark-very-light pt-10px pb-10px">
                                    <span className="text-down d-block">
                                        Satisfaction rate
                                    </span>
                                </div>
                                <div className="btn-hover d-flex align-items-center justify-content-center bg-dark-gray">
                                    <a
                                        href="/contact"
                                        className="inner-link btn btn-link btn-hover-animation-switch btn-extra-large text-white"
                                    >
                                        <span>
                                            <span className="btn-text">
                                                Apply now
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col services-box-style-07 text-center last-paragraph-no-margin border-end border-color-transparent-dark-very-light xs-mb-50px xs-border-end-0">
                            <div className="pe-50px ps-50px pb-40px xl-ps-30px xl-pe-30px">
                                <div className="position-relative ms-auto me-auto mb-25px">
                                    <img
                                        src="/images/custom/demo-elearning-about-icon-03.png"
                                        className="h-75px position-relative z-index-1 mt-35px"
                                        alt=""
                                    />
                                    <div className="h-100px w-100px rounded-circle bg-very-light-gray position-absolute top-0 start-50 translate-middle-x"></div>
                                </div>
                                <span className="fs-18 fw-600 text-dark-gray d-block mb-5px">
                                    Flexible Schedule
                                </span>
                                <p className="lh-30">
                                    Learn at your own pace – weekdays, evenings,
                                    or weekends. You pick the time.
                                </p>
                            </div>
                            <div className="d-flex flex-column overflow-hidden w-100 justify-content-center position-relative">
                                <div className="fs-14 fw-700 text-uppercase text-dark-gray border-top border-bottom border-color-transparent-dark-very-light pt-10px pb-10px">
                                    <span className="text-down d-block">
                                        Student enrolled
                                    </span>
                                </div>
                                <div className="btn-hover d-flex align-items-center justify-content-center bg-dark-gray">
                                    <a
                                        href="/contact"
                                        className="inner-link btn btn-link btn-hover-animation-switch btn-extra-large text-white"
                                    >
                                        <span>
                                            <span className="btn-text">
                                                Apply now
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col services-box-style-07 text-center last-paragraph-no-margin">
                            <div className="pe-50px ps-50px pb-40px xl-ps-30px xl-pe-30px">
                                <div className="position-relative ms-auto me-auto mb-25px">
                                    <img
                                        src="/images/custom/demo-elearning-about-icon-04.png"
                                        className="h-75px position-relative z-index-1 mt-35px"
                                        alt=""
                                    />
                                    <div className="h-100px w-100px rounded-circle bg-very-light-gray position-absolute top-0 start-50 translate-middle-x"></div>
                                </div>
                                <span className="fs-18 fw-600 text-dark-gray d-block mb-5px">
                                    Learn 1-on-1 or in Small Groups
                                </span>
                                <p className="lh-30">
                                    Get personalized attention in a focused
                                    learning environment. Maximum 3 students per
                                    group.
                                </p>
                            </div>
                            <div className="d-flex flex-column overflow-hidden w-100 justify-content-center position-relative">
                                <div className="fs-14 fw-700 text-uppercase text-dark-gray border-top border-bottom border-color-transparent-dark-very-light pt-10px pb-10px">
                                    <span className="text-down d-block">
                                        Top instructors
                                    </span>
                                </div>
                                <div className="btn-hover d-flex align-items-center justify-content-center bg-dark-gray">
                                    <a
                                        href="/contact"
                                        className="inner-link btn btn-link btn-hover-animation-switch btn-extra-large text-white"
                                    >
                                        <span>
                                            <span className="btn-text">
                                                Apply now
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather icon-feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row position-relative mt-40px xs-mt-20px">
                        <div className="col swiper swiper-width-auto feather-shadow text-center">
                            <div className="swiper-wrapper marquee-slide">
                                <div className="swiper-slide">
                                    <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-1">
                                        providing amazing online
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-1">
                                        courses bringing you
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-1">
                                        outstanding online learning
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 position-absolute top-0 h-100 d-flex justify-content-center align-items-center left-0px z-index-1 text-center">
                            <h4 className="alt-font text-dark-gray fs-45 fw-600 ls-minus-2px xs-ls-minus-1px mb-0 mt-40px xs-mt-15px">
                                Online learning wherever and whenever.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/*  start section */}
            <section className="bg-gradient-tranquil-white pt-0 position-relative align-items-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-7 col-lg-6 text-center">
                            //{" "}
                            {/* data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'  > */}
                            <div
                                className="position-relative md-mb-50px xs-mb-30px pe-50px outside-box-left-10 md-outside-box-left-0 lg-pe-0 atropos"
                                data-atropos
                            >
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner text-center w-100 overflow-visible">
                                            <div
                                                data-atropos-offset="-1"
                                                className="position-absolute left-0px"
                                            >
                                                <img
                                                    src="/images/custom/orig.jpeg"
                                                    // src="/images/custom/image.webp"
                                                    alt=""
                                                />
                                            </div>
                                            <img
                                                data-atropos-offset="1"
                                                className="position-relative z-index-9"
                                                src="images/demo-elearning-06.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 position-relative z-index-1">
                            <div className="icon-with-text-style-08 mb-20px">
                                <div className="feature-box feature-box-left-icon-middle">
                                    <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                                        <i className="bi bi-award d-inline-block icon-extra-medium text-dark-gray"></i>
                                    </div>
                                    <div className="feature-box-content last-paragraph-no-margin">
                                        <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">
                                            Why you choose us?
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-40px sm-mb-30px">
                                Teaching makes you productive.
                            </h2>
                            <div
                                className="accordion accordion-style-05"
                                id="accordion-style-05"
                            >
                                {/*  start accordion item */}
                                <div className="accordion-item bg-white active-accordion">
                                    <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">
                                        01
                                    </h3>
                                    <div className="accordion-header">
                                        <a
                                            href="#"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-style-05-01"
                                            aria-expanded="true"
                                            data-bs-parent="#accordion-style-05"
                                        >
                                            <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">
                                                Learn with experts instructors
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        id="accordion-style-05-01"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#accordion-style-05"
                                    >
                                        <div className="accordion-body last-paragraph-no-margin">
                                            <p>
                                                Build real-world apps like
                                                e-commerce stores, dashboards,
                                                and automation tools as you
                                                learn.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*  end accordion item */}
                                {/*  start accordion item */}
                                <div className="accordion-item bg-white">
                                    <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">
                                        02
                                    </h3>
                                    <div className="accordion-header">
                                        <a
                                            href="#"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-style-05-02"
                                            aria-expanded="false"
                                            data-bs-parent="#accordion-style-05"
                                        >
                                            <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">
                                                Highly flexible learning time
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        id="accordion-style-05-02"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordion-style-05"
                                    >
                                        <div className="accordion-body last-paragraph-no-margin">
                                            <p>
                                                Lorem ipsum is simply dummy of
                                                the printing and typesetting
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*  end accordion item */}
                                {/*  start accordion item */}
                                <div className="accordion-item bg-white">
                                    <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">
                                        03
                                    </h3>
                                    <div className="accordion-header">
                                        <a
                                            href="#"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-style-05-03"
                                            aria-expanded="false"
                                            data-bs-parent="#accordion-style-05"
                                        >
                                            <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">
                                                Amazing skills for teaching
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        id="accordion-style-05-03"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordion-style-05"
                                    >
                                        <div className="accordion-body last-paragraph-no-margin">
                                            <p>
                                                Lorem ipsum is simply dummy of
                                                the printing and typesetting
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*  end accordion item */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  end section */}
            {/*  start section */}
            <section className="overlap-height">
                <div className="container overlap-gap-section">
                    <div className="row justify-content-center align-items-center mb-3 text-center">
                        <div className="col-12">
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">
                                Great achievements
                            </h2>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center g-0 mb-5 xs-mb-40px">
                        {/*  start features box item */}
                        <div className="col icon-with-text-style-07">
                            <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border-top border-start border-bottom xs-border-end xs-border-bottom-0 border-color-extra-medium-gray">
                                <div className="feature-box-icon">
                                    <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">
                                        2021
                                    </span>
                                    <i className="bi bi-backpack3 icon-double-large text-dark-gray mb-20px"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">
                                        Started teaching
                                    </span>
                                </div>
                                <div className="feature-box-overlay bg-dark-gray"></div>
                            </div>
                        </div>
                        {/*  end features box item */}
                        {/*  start features box item */}
                        <div className="col icon-with-text-style-07">
                            <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border-top md-border-end border-start border-bottom border-color-extra-medium-gray">
                                <div className="feature-box-icon">
                                    <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">
                                        2023
                                    </span>
                                    <i className="bi bi-person-arms-up  icon-double-large text-dark-gray mb-20px"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">
                                        Have 120+ students finished courses
                                    </span>
                                </div>
                                <div className="feature-box-overlay bg-dark-gray"></div>
                            </div>
                        </div>
                        {/*  end features box item */}
                        {/*  start features box item */}
                        <div className="col icon-with-text-style-07">
                            <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border-top border-start border-bottom md-border-top-0 xs-border-end border-color-extra-medium-gray">
                                <div className="feature-box-icon">
                                    <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">
                                        2024
                                    </span>
                                    <i className="fa-brands fa-microblog icon-double-large text-dark-gray mb-20px"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">
                                        100+ Projects Built
                                    </span>
                                </div>
                                <div className="feature-box-overlay bg-dark-gray"></div>
                            </div>
                        </div>
                        {/*  end features box item */}
                        {/*  start features box item */}
                        <div className="col icon-with-text-style-07">
                            <div className="hover-box dark-hover will-change-inherit feature-box pb-10 overflow-hidden border border-color-extra-medium-gray md-border-top-0">
                                <div className="feature-box-icon pt-25 xl-pt-17 md-pt-19">
                                    <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">
                                        2025
                                    </span>
                                    <i className="bi bi-pc-display icon-double-large text-dark-gray mb-20px"></i>
                                </div>
                                <div className="feature-box-content px-2">
                                    <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">
                                        Plans to launch certification,
                                        bootcamp-style learning, and scholarship
                                        opportunities for low-income students.
                                    </span>
                                </div>
                                <div className="feature-box-overlay bg-dark-gray"></div>
                            </div>
                        </div>
                        {/*  end features box item */}
                    </div>
                    <div className="row justify-content-center">
                        {/*  start features box item */}
                        <div className="col-auto icon-with-text-style-08 md-mb-10px pe-25px md-pe-15px">
                            <div className="feature-box feature-box-left-icon-middle xs-lh-28">
                                <div className="feature-box-icon me-10px">
                                    <i className="feather icon-feather-mail fs-20 text-dark-gray"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="text-dark-gray fw-500 fs-20 xs-fs-18 ls-minus-05px">
                                        Looking for help?
                                        <a
                                            href="demo-elearning-contact.html"
                                            className="text-decoration-line-bottom-medium text-dark-gray fw-600 ms-1"
                                        >
                                            Contact us today
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*  end features box item */}
                        {/*  start features box item */}
                        <div className="col-auto icon-with-text-style-08 ps-25px md-ps-15px md-pe-15px">
                            <div className="feature-box feature-box-left-icon-middle xs-lh-28">
                                <div className="feature-box-icon me-10px">
                                    <i className="feather icon-feather-thumbs-up fs-20 text-dark-gray"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="text-dark-gray fw-500 fs-20 xs-fs-18 ls-minus-05px">
                                        Keep in Touch.
                                        <a
                                            href="#"
                                            className="text-decoration-line-bottom-medium text-dark-gray fw-600"
                                        >
                                            Like us on Facebook
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*  end features box item */}
                    </div>
                </div>
            </section>
        </>
    );
}
