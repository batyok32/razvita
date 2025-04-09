"use client";
import { posts } from "@/components/courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Script from "next/script";

// pages/index.js
export default function Home() {
    const articles = [
        {
            author: "Andy Glamer",
            likes: 65,
            avatar: "https://placehold.co/125x125",
            image: "https://placehold.co/600x425",
            title: "How to evaluate the effective of training programs.",
            excerpt:
                "Lorem ipsum has been industry standard dummy text ever...",
        },
        {
            author: "Den Viliamson",
            likes: 35,
            avatar: "https://placehold.co/125x125",
            image: "https://placehold.co/600x425",
            title: "Experience the breathtaking views and perspectives.",
            excerpt:
                "Lorem ipsum has been industry standard dummy text ever...",
        },
        {
            author: "Jones Robbert",
            likes: 58,
            avatar: "https://placehold.co/125x125",
            image: "https://placehold.co/600x425",
            title: "Build up healthy habits and strong peaceful life.",
            excerpt:
                "Lorem ipsum has been industry standard dummy text ever...",
        },
    ];

    //
    // Mobile app developer (Flutter)
    // Backend developer on GO
    // Backend developer on Spring (Java)

    // Java programmer
    // Game developer

    // Frontend developer (Next.js)
    // Python programmer
    // Backend developer on Django (Python)
    // Mobile app developer (React-Native)
    // "White" hacker
    return (
        <>
            {/* <Header /> */}

            <section
                className="p-0 overflow-hidden bg-dark-gray full-screen ipad-top-space-margin md-h-auto position-relative md-pb-70px sm-pb-40px cover-background"
                style={{
                    backgroundImage:
                        "url('/images/demo-elearning-hero-bg.jpg')",
                }}
            >
                <div
                    className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
                    style={{
                        backgroundImage:
                            "url('/images/vertical-line-bg-small.svg')",
                    }}
                ></div>

                <div
                    id="particles-style-01"
                    className="h-100 position-absolute left-0px top-0 w-100"
                    data-particle="true"
                    data-particle-options='{"particles":{"number":{"value":6,"density":{"enable":true,"value_area":2000}},"color":{"value":["#d5d52b"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"}},"opacity":{"value":1,"random":false,"anim":{"enable":false}},"size":{"value":8,"random":true,"anim":{"enable":false}},"line_linked":{"enable":false},"move":{"enable":true,"speed":1,"direction":"right"}},"interactivity":{"events":{"resize":true}},"retina_detect":false}'
                ></div>

                <div
                    className="position-absolute left-minus-80px top-25"
                    data-bottom-top="transform: translateY(-80px)"
                    data-top-bottom="transform: translateY(80px)"
                >
                    <img src="/images/demo-elearning-01.png" alt="" />
                </div>

                <div className="container h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-xl-5 col-lg-6 col-md-12 text-white text-center text-lg-start position-relative z-index-1 d-flex flex-column justify-content-center h-100 md-mt-50px md-mb-20px xs-mb-10px">
                            <span className="alt-font fs-60 lh-65 sm-fs-60 fw-500 mb-25px ls-minus-2px">
                                Learn to code. <br /> Build projects.
                                <br /> Earn a career.
                            </span>
                            <div className="mb-30px w-80 md-w-60 sm-w-100 d-block mx-auto mx-lg-0 overflow-hidden">
                                <span className="fs-18 fw-300 opacity-5 d-inline-block">
                                    Learn coding, design, and security from
                                    industry mentors.
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <a
                                    href="/contact.html"
                                    className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text fw-600 d-inline-block me-25px sm-me-10px align-middle left-icon"
                                >
                                    <span>
                                        <span>
                                            <i className="feather icon-feather-thumbs-up"></i>
                                        </span>
                                        <span
                                            className="btn-double-text ls-minus-05px"
                                            data-text="Get started"
                                        >
                                            Get started
                                        </span>
                                    </span>
                                </a>
                                {/* <a
                                    href="https://www.youtube.com/watch?v=cfXHhfNy7tU"
                                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-white popup-youtube btn-icon-left"
                                >
                                    <span>
                                        <span className="btn-text">
                                            How it works
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather icon-feather-youtube"></i>
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather icon-feather-youtube"></i>
                                        </span>
                                    </span>
                                </a> */}
                            </div>

                            <div style={{ marginTop: "100px !important" }}>
                                <div className="row row-cols-3  justify-content-center counter-style-04 w-100 md-w-auto position-absolute lg-position-relative bottom-80px lg-bottom-0px lg-mt-50px">
                                    {[
                                        {
                                            count: 600,
                                            label: "$ Schoolarships",
                                        },
                                        { count: 100, label: "Students" },
                                        { count: 150, label: "Projects built" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="col text-center text-lg-start"
                                        >
                                            <h5
                                                className="vertical-counter d-inline-flex alt-font text-white fw-600 mb-10px"
                                                data-text="+"
                                                data-to={item.count}
                                            ></h5>
                                            <div className="divider-style-03 divider-style-03-01 border-2 border-color-base-color mb-5px w-80 xs-w-90 md-mx-auto"></div>
                                            <span className="fw-300 text-white opacity-5">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-6 pt-30px lg-pt-0">
                            <div
                                className="position-relative outside-box-right-10 md-outside-box-right-0 atropos"
                                data-atropos
                            >
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner text-center w-100">
                                            <div
                                                data-atropos-offset="-1"
                                                className="position-absolute left-0px right-0px"
                                            >
                                                <img
                                                    // src="https://placehold.co/975x990"
                                                    src="/images/custom/hero-3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <img
                                                data-atropos-offset="1"
                                                className="position-relative z-index-9 animation-float"
                                                src="/images/demo-elearning-hero-banner-02.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="down-section"
                className="background-position-left-top background-no-repeat position-relative"
                style={{
                    backgroundImage: "url('/images/demo-elearning-02.png')",
                }}
            >
                <div
                    className="position-absolute right-0px top-30px"
                    data-bottom-top="transform: translateY(80px)"
                    data-top-bottom="transform: translateY(-80px)"
                >
                    <img src="/images/demo-elearning-04.png" alt="" />
                </div>

                <div className="container">
                    <div
                        className="text-center position-absolute top-minus-40px left-0px right-0px z-index-1 d-none d-md-inline-block"
                        data-anime='{"opacity":[0,1],"translate":[0,0],"staggervalue":100,"easing":"easeOutQuad"}'
                    >
                        <a
                            href="#down-section"
                            className="d-block section-link"
                        >
                            <div className="d-flex justify-content-center align-items-center mx-auto box-shadow-medium-bottom rounded-circle h-70px w-70px text-dark-gray bg-white">
                                <i className="bi bi-mouse icon-very-medium lh-0px"></i>
                            </div>
                        </a>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-10 position-relative md-mb-40px sm-mb-25px">
                            <div className="icon-with-text-style-08 mb-20px">
                                <div className="feature-box feature-box-left-icon-middle">
                                    <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                                        <i className="bi bi-award d-inline-block icon-extra-medium text-dark-gray"></i>
                                    </div>
                                    <div className="feature-box-content last-paragraph-no-margin">
                                        <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">
                                            Guaranteed and certified
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mx-auto">
                                One to one teachers
                            </h2>

                            <Link
                                href="/about"
                                className="btn btn-large btn-dark-gray btn-box-shadow btn-rounded btn-switch-text"
                            >
                                <span>
                                    <span
                                        className="btn-double-text"
                                        data-text="Learn more"
                                    >
                                        Learn more
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>

                            {/* <div className="d-flex align-items-center fw-500 text-dark-gray w-100 position-absolute md-position-relative bottom-0 left-minus-5px md-mt-15px">
                                <img
                                    // src="https://placehold.co/156x113"
                                    src="/images/custom/hero-3.jpg"
                                    alt=""
                                />
                                <span className="d-inline-block position-relative lh-24">
                                    Online courses from{" "}
                                    <Link
                                        href="/demo-elearning-instructors.html"
                                        className="fw-600 text-decoration-line-bottom text-dark-gray"
                                    >
                                        experts.
                                    </Link>
                                </span>
                            </div> */}
                        </div>

                        <div className="col-xl-6 col-lg-7 col-md-10 offset-xl-1 position-relative mt-minus-1">
                            <div
                                className="row row-cols-auto row-cols-sm-2"
                                data-anime='{"el":"childs","translateX":[30,0],"translateY":[30,0],"opacity":[0,1],"duration":600,"delay":100,"staggervalue":300,"easing":"easeOutQuad"}'
                            >
                                {[
                                    {
                                        id: "01",
                                        title: "Guaranteed results",
                                        text: "Get your money back in the first month if you don't like it.",
                                    },
                                    {
                                        id: "02",
                                        title: "Student-friendly pricing: $600/month.",
                                        text: "Education should reward you — not drain you. ",
                                    },
                                    {
                                        id: "03",
                                        title: "Real Instructors",
                                        text: "Taught by IT pros, not textbook theorists. Every mentor has real-world experience. Flexible programs made for student life.",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={item.id}
                                        // className={`col align-self-${
                                        //     index % 2 === 0 ? "start" : "end"
                                        // } ${
                                        //     index > 0 ? "mt-25 xs-mt-30px" : ""
                                        // }`}
                                    >
                                        <div className="feature-box text-start ps-30px pe-30px xl-pe-5px sm-pe-0">
                                            <div className="feature-box-icon position-absolute left-0px top-0px">
                                                <h2 className="alt-font fs-100 fw-700 ls-minus-1px opacity-1 mb-0">
                                                    {item.id}
                                                </h2>
                                            </div>
                                            <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-21 sm-pt-40px">
                                                <span className="text-dark-gray fs-20 d-inline-block fw-600 mb-5px">
                                                    {item.title}
                                                </span>
                                                <p>{item.text}</p>
                                                <span className="w-60px h-3px bg-yellow d-inline-block"></span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="bg-tranquil position-relative"
                style={{
                    backgroundImage: "url('/images/demo-elearning-bg-04.png')",
                }}
            >
                <div
                    className="position-absolute left-minus-200px top-25"
                    data-bottom-top="transform: translateY(-80px)"
                    data-top-bottom="transform: translateY(80px)"
                >
                    <img src="/images/demo-elearning-bg-04.png" alt="" />
                </div>

                <div className="container">
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

                    {/* Courses grid would ideally be mapped from a dynamic source. Example below is static. */}
                    <div className="row" style={{ marginBottom: "100px" }}>
                        <div className="col-12">
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {/* <ul className="portfolio-wrapper grid-loading grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large"> */}
                                {/* Replace these with mapped components for scalability */}
                                {posts.map((post, index) => (
                                    <div
                                        key={index}
                                        className="col-lg-4 col-md-6 col-sm-12 mb-30px"
                                        style={{
                                            paddingRight: "10px",
                                        }}
                                    >
                                        <li className="design transition-inner-all">
                                            <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                                <div className="image">
                                                    <Link
                                                        href={post.detailsLink}
                                                    >
                                                        <img
                                                            src={post.image}
                                                            alt={post.title}
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="bg-white position-relative">
                                                    <div className="bg-dark-gray w-80px h-80px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                                                        <span className="d-flex flex-wrap justify-content-center align-items-center">
                                                            {post.price}
                                                            <span
                                                                style={{
                                                                    fontWeight:
                                                                        "bold",
                                                                    fontSize:
                                                                        "18px",
                                                                }}
                                                            >
                                                                $
                                                            </span>{" "}
                                                            {/* <br></br> */}
                                                            <span
                                                                style={{
                                                                    fontSize:
                                                                        "12px",
                                                                }}
                                                            >
                                                                /month
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="ps-35px pe-35px pt-30px pb-30px border-bottom border-color-transparent-dark-very-light">
                                                        <span className="d-block mb-10px">
                                                            <Link
                                                                href={
                                                                    post.categoryLink
                                                                }
                                                                className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                                                            >
                                                                {post.category}
                                                            </Link>
                                                            <span className="fs-16">
                                                                {" "}
                                                                {post.author}
                                                            </span>
                                                        </span>
                                                        <div className="d-flex align-items-center mb-5px">
                                                            <Link
                                                                href={
                                                                    post.detailsLink
                                                                }
                                                                className="text-dark-gray fw-600 fs-19 lh-28 w-90"
                                                            >
                                                                {post.title}
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            {post.description}
                                                        </div>
                                                        {/* <div className="d-flex align-items-center">
                                                            <div className="d-inline-block me-auto">
                                                                <div className="review-star-icon float-start">
                                                                    {[
                                                                        ...Array(
                                                                            post.rating
                                                                        ),
                                                                    ].map(
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
                                                        </div> */}
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center ps-35px pe-35px pt-15px pb-20px">
                                                        <div className="me-auto">
                                                            <i className="feather icon-feather-clipboard text-dark-gray me-5px"></i>
                                                            <span className="fs-16 text-dark-gray fw-500">
                                                                {post.lessons}{" "}
                                                                weeks
                                                            </span>
                                                        </div>
                                                        {/* <div className="d-flex align-items-center">
                                                            <i className="feather icon-feather-users text-dark-gray me-5px"></i>
                                                            <span className="fs-16 text-dark-gray fw-500">
                                                                {post.students}{" "}
                                                                Students
                                                            </span>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                ))}
                                <div className="row justify-content-center"></div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-12 text-center mt-5">
                                <span className="fs-20 text-dark-gray fw-500 ls-minus-05px">
                                    We help you find the perfect tutor. It's
                                    completely free.{" "}
                                    <Link
                                        href="/courses"
                                        className="fw-600 text-dark-gray"
                                    >
                                        Explore all courses
                                        <i className="fa-solid fa-arrow-right ms-5px icon-very-small"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-7 col-lg-6 text-center md-mb-50px sm-mb-30px">
                            <div className="position-relative pe-50px lg-pe-0 outside-box-left-10 md-outside-box-left-0">
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner text-center w-100 overflow-visible">
                                            <div className="position-absolute left-0px">
                                                <img
                                                    src="/images/custom/demo-elearning-05.png"
                                                    alt=""
                                                />
                                            </div>
                                            <img
                                                className="position-relative z-index-9"
                                                src="/images/demo-elearning-06.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 col-md-11 position-relative">
                            <div className="icon-with-text-style-08 mb-20px">
                                <div className="feature-box feature-box-left-icon-middle">
                                    <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                                        <i className="bi bi-briefcase d-inline-block icon-extra-medium text-dark-gray"></i>
                                    </div>
                                    <div className="feature-box-content last-paragraph-no-margin">
                                        <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">
                                            Premium learning experience
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-40px sm-mb-25px mx-auto">
                                Providing amazing online courses.
                            </h2>

                            <div
                                className="accordion accordion-style-06 text-start"
                                id="accordion-style-07"
                            >
                                {[
                                    {
                                        id: "01",
                                        title: "Learn in small groups or one-on-one",
                                        description:
                                            "Get personalized attention with a maximum of 3 students per group — or choose 1:1 sessions for faster growth.",
                                        icon: "line-icon-MaleFemale",
                                    },
                                    {
                                        id: "02",
                                        title: "Flexible pricing and student discounts",
                                        description:
                                            "Affordable plans starting at $600/month, with scholarships and rewards for motivated learners.",
                                        icon: "line-icon-Money-Bag",
                                    },
                                    {
                                        id: "03",
                                        title: "Build real projects from day one",
                                        description:
                                            "No filler content — you’ll create websites, apps, and tools that you can showcase in your portfolio or use professionally.",
                                        icon: "line-icon-Laptop-Phone",
                                    },
                                    {
                                        id: "04",
                                        title: "Mentorship from industry experts",
                                        description:
                                            "Learn directly from developers with real-world experience — not just theory, but how things work in the job market.",
                                        icon: "line-icon-Business-Mens",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`accordion-item${
                                            index === 0
                                                ? " active-accordion"
                                                : ""
                                        }`}
                                    >
                                        <div className="accordion-header">
                                            <a
                                                href="#"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#accordion-style-07-${item.id}`}
                                                aria-expanded={
                                                    index === 0
                                                        ? "true"
                                                        : "false"
                                                }
                                                data-bs-parent="#accordion-style-07"
                                            >
                                                <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">
                                                    {item.title}
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            id={`accordion-style-07-${item.id}`}
                                            className={`accordion-collapse collapse${
                                                index === 0 ? " show" : ""
                                            }`}
                                            data-bs-parent="#accordion-style-07"
                                        >
                                            <div className="accordion-body last-paragraph-no-margin">
                                                <p>{item.description}</p>
                                                <i
                                                    className={`${item.icon} icon-extra-double-large opacity-2`}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/courses"
                                className="btn btn-extra-large btn-dark-gray btn-box-shadow btn-rounded btn-switch-text mt-30px"
                            >
                                <span>
                                    <span
                                        className="btn-double-text"
                                        data-text="Explore courses"
                                    >
                                        Explore courses
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row position-relative mt-40px xs-mt-20px">
                        <div className="col swiper swiper-width-auto feather-shadow text-center">
                            <div className="swiper-wrapper marquee-slide">
                                {[
                                    "providing amazing online",
                                    "courses bringing you",
                                    "outstanding online learning",
                                ].map((text, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-1">
                                            {text}
                                        </div>
                                    </div>
                                ))}
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
            {/* <section className="position-relative bg-gradient-aztec-green overflow-hidden">
                <div className="position-absolute left-minus-100px top-40px">
                    <img src="/images/demo-elearning-bg-05.png" alt="" />
                </div>
                <div
                    className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
                    style={{
                        backgroundImage:
                            "url('/images/vertical-line-bg-small.svg')",
                    }}
                ></div>
                <div
                    className="background-position-center-top h-8px w-100 position-absolute left-0px bottom-0"
                    style={{
                        backgroundImage:
                            "url('/images/demo-elearning-border.jpg')",
                    }}
                ></div>

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 position-relative md-mb-50px sm-mb-25px">
                            <div className="icon-with-text-style-08 mb-20px">
                                <div className="feature-box feature-box-left-icon-middle">
                                    <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                                        <i className="bi bi-chat-quote d-inline-block icon-extra-medium text-dark-gray"></i>
                                    </div>
                                    <div className="feature-box-content last-paragraph-no-margin">
                                        <span className="d-inline-block alt-font fs-19 ls-minus-05px text-white">
                                            Students feedback
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="alt-font text-white fw-600 ls-minus-3px w-85 lg-w-100">
                                Trusted by genius people.
                            </h2>
                            <p className="w-80 lg-w-100 text-white opacity-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit venenatis dictum nec.
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="col-auto text-center border-end border-color-transparent-white-very-light border-1 me-25px pe-25px">
                                    <h2 className="alt-font lh-44 fw-600 text-white mb-0">
                                        99%
                                    </h2>
                                </div>
                                <div className="col">
                                    <span className="d-block w-55 lh-26 text-white xl-w-60 lg-w-100">
                                        Student's complete course successfully.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 position-relative testimonials-style-12">
                            <div className="swiper magic-cursor">
                                <div className="swiper-wrapper pt-20px pb-20px">
                                    {[
                                        {
                                            name: "Charlotte Smith",
                                            title: "Business owner",
                                            img: "https://placehold.co/305x380",
                                            text: "Course materials were good, the mentoring approach was good and working with other people via the internet was good.",
                                        },
                                        {
                                            name: "Herman Miller",
                                            title: "Behavioral science",
                                            img: "https://placehold.co/305x380",
                                            text: "Course materials were good, the mentoring approach was good and working with other people via the internet was good.",
                                        },
                                        {
                                            name: "Matthew Taylor",
                                            title: "Network security",
                                            img: "https://placehold.co/305x380",
                                            text: "Course materials were good, the mentoring approach was good and working with other people via the internet was good.",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="swiper-slide">
                                            <div className="row g-0 border-radius-6px overflow-hidden">
                                                <div className="col-sm-5 services-box-img xs-h-350px">
                                                    <div
                                                        className="h-100 cover-background"
                                                        style={{
                                                            backgroundImage: `url(${item.img})`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="col-sm-7 testimonials-box bg-white p-9 sm-p-7 box-shadow-extra-large">
                                                    <div className="d-inline-block bg-orange text-white border-radius-50px ps-20px pe-20px fs-15 lh-34 sm-lh-30 ls-minus-1px mb-25px align-middle">
                                                        {[...Array(5)].map(
                                                            (_, idx) => (
                                                                <i
                                                                    key={idx}
                                                                    className="bi bi-star-fill"
                                                                ></i>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="testimonials-box-content">
                                                        <p className="mb-20px">
                                                            {item.text}
                                                        </p>
                                                        <div className="fs-18 lh-20 fw-600 text-dark-gray">
                                                            {item.name}
                                                        </div>
                                                        <span className="fs-16 lh-20">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="swiper-slide">
                                        <div className="row g-0 border-radius-6px overflow-hidden">
                                            <div className="col-sm-5 services-box-img xs-h-350px">
                                                <div
                                                    className="h-100 cover-background"
                                                    style={{
                                                        backgroundImage: `url(https://placehold.co/305x380)`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="col-sm-7 testimonials-box bg-white p-9 sm-p-7 box-shadow-extra-large">
                                                <div className="d-inline-block bg-orange text-white border-radius-50px ps-20px pe-20px fs-15 lh-34 sm-lh-30 ls-minus-1px mb-25px align-middle">
                                                    {[...Array(5)].map(
                                                        (_, idx) => (
                                                            <i
                                                                key={idx}
                                                                className="bi bi-star-fill"
                                                            ></i>
                                                        )
                                                    )}
                                                </div>
                                                <div className="testimonials-box-content">
                                                    <p className="mb-20px">
                                                        Course materials were
                                                        good, the mentoring
                                                        approach was good and
                                                        working with other
                                                        people via the internet
                                                        was good.
                                                    </p>
                                                    <div className="fs-18 lh-20 fw-600 text-dark-gray">
                                                        Charlotte Smith
                                                    </div>
                                                    <span className="fs-16 lh-20">
                                                        Business owner
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-button-next-nav border-radius-100px swiper-button-next bg-white box-shadow-small">
                                <i className="feather icon-feather-chevron-right icon-extra-medium"></i>
                            </div>
                            <div className="swiper-button-previous-nav border-radius-100px swiper-button-prev bg-white box-shadow-small">
                                <i className="feather icon-feather-chevron-left icon-extra-medium"></i>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 text-center justify-content-center clients-style-05 mt-6">
                        {[
                            "logo-walmart-white.svg",
                            "logo-logitech-white.svg",
                            "logo-invision-white.svg",
                            "logo-yahoo-white.svg",
                            "logo-monday-white.svg",
                        ].map((logo, i) => (
                            <div key={i} className="col md-mb-40px">
                                <div className="client-box">
                                    <a href="#">
                                        <img
                                            src={`/images/${logo}`}
                                            className="h-40px"
                                            alt="client-logo"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            {/* <section className="bg-gradient-tranquil-white overflow-hidden position-relative overlap-height pb-5 md-pb-7 xs-pb-50px">
                <div className="container overlap-gap-section">
                    <div className="row justify-content-center align-items-center mb-4 text-center text-md-start">
                        <div className="col-xxl-8 col-md-7 sm-mb-10px">
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">
                                Latest articles
                            </h2>
                        </div>
                        <div className="col-xxl-4 col-md-5 text-center text-md-end">
                            <Link
                                href="/demo-elearning-blog.html"
                                className="btn btn-link btn-hover-animation-switch btn-extra-large text-dark-gray fw-600"
                            >
                                <span>
                                    <span className="btn-text">
                                        Explore all articles
                                    </span>
                                    <span className="btn-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <span className="btn-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {/* <ul className="portfolio-wrapper grid-loading grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large"> 
                                {articles.map((article, i) => (
                                    <div
                                        key={i}
                                        className="col-lg-4 col-md-6 col-sm-12 mb-30px"
                                        style={{
                                            paddingRight: "10px",
                                        }}
                                    >
                                        {/* <ul className="blog-wrapper grid grid-3col gutter-extra-large"> 
                                        {/* {articles.map((article, i) => (
                                        <li key={i} className="grid-item">
                                            <div className="card border-0 border-radius-4px overflow-hidden box-shadow-large box-shadow-extra-large-hover">
                                                <div className="card-top d-flex align-items-center">
                                                    <Link href="/demo-elearning-blog.html">
                                                        <img
                                                            src={article.avatar}
                                                            className="avtar"
                                                            alt="avatar"
                                                        />
                                                    </Link>
                                                    <span className="fs-16">
                                                        By{" "}
                                                        <Link
                                                            href="/demo-elearning-blog.html"
                                                            className="text-dark-gray fw-600"
                                                        >
                                                            {article.author}
                                                        </Link>
                                                    </span>
                                                    <div className="like-count ms-auto fs-14">
                                                        <Link href="#">
                                                            <i className="fa-regular fa-heart text-red d-inline-block"></i>
                                                            <span className="text-dark-gray fw-600">
                                                                {article.likes}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="blog-image position-relative overflow-hidden">
                                                    <Link href="/demo-elearning-blog-single-simple.html">
                                                        <img
                                                            src={article.image}
                                                            alt="article"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="post-content p-11 md-p-9">
                                                        <Link
                                                            href="/demo-elearning-blog-single-simple.html"
                                                            className="card-title mb-10px fw-600 fs-19 lh-28 text-dark-gray d-inline-block"
                                                        >
                                                            {article.title}
                                                        </Link>
                                                        <p className="mb-0">
                                                            {article.excerpt}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                ))}
                            </div>
                            {/* </ul>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-auto icon-with-text-style-08 md-mb-10px xs-mb-15px pe-25px md-pe-15px">
                            <div className="feature-box feature-box-left-icon-middle xs-lh-28">
                                <div className="feature-box-icon me-10px">
                                    <i className="feather icon-feather-mail fs-20 text-dark-gray"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="text-dark-gray fw-500 fs-20 xs-fs-18 ls-minus-05px">
                                        Looking for help?{" "}
                                        <Link
                                            href="/demo-elearning-contact.html"
                                            className="text-decoration-line-bottom-medium text-dark-gray fw-600"
                                        >
                                            Contact us today
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto icon-with-text-style-08 ps-25px md-ps-15px md-pe-15px">
                            <div className="feature-box feature-box-left-icon-middle xs-lh-28">
                                <div className="feature-box-icon me-10px">
                                    <i className="feather icon-feather-thumbs-up fs-20 text-dark-gray"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="text-dark-gray fw-500 fs-20 xs-fs-18 ls-minus-05px">
                                        Keep in Touch.{" "}
                                        <Link
                                            href="#"
                                            className="text-decoration-line-bottom-medium text-dark-gray fw-600"
                                        >
                                            Like us on Facebook
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <Footer /> */}
            {/* end footer */}
            {/* start scroll progress */}
            <div className="scroll-progress d-none d-xxl-block">
                <a href="#" className="scroll-top" aria-label="scroll">
                    <span className="scroll-text">Scroll</span>
                    <span className="scroll-line">
                        <span className="scroll-point"></span>
                    </span>
                </a>
            </div>
            {/* end scroll progress */}

            <Script src="/js/jquery.js" strategy="beforeInteractive" />
            <Script src="/js/vendors.min.js" strategy="beforeInteractive" />
            <Script src="/js/main.js" strategy="afterInteractive" />
        </>
    );
}
