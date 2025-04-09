"use client";
import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    return (
        <div>
            {/* <!-- start page title  --> */}
            <section
                className="ipad-top-space-margin bg-dark-gray cover-background page-title-big-typography"
                style={{
                    backgroundImage: "url(/images/custom/hero-5.jpg)",
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
                                Contact us
                            </h1>
                            <h2 className="fw-500 m-0 ls-minus-2px text-white alt-font">
                                We'd love to hear from your side.{" "}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end page title  --> */}
            {/* <!-- start section  --> */}
            <section className="position-relative overflow-hidden">
                <div className="container position-relative">
                    <div className="row mb-5 align-items-center overflow-hidden">
                        <div className="col-lg-6">
                            <h1 className="alt-font fw-700 text-dark-gray fancy-text-style-4 ls-minus-2px md-mb-20px">
                                Say Hi!
                                {/* <span data-fancy-text='{ "effect": "rotate", "string": ["hello!", "hallå!", "salve!"] }'></span> */}
                                <i className="bi bi-emoji-smile icon-extra-large ms-20px"></i>
                            </h1>
                        </div>
                        <div
                            className="col-lg-6 last-paragraph-no-margin"
                            // data-anime='{ "el": "childs", "opacity": [0, 1], "translateX": [-50, 0], "staggervalue": 100, "easing": "easeOutQuad" }'
                        >
                            <p>
                                We're here to help and answer any question you
                                might have. we look forward to hearing from you.
                                any need help you please contact us or meet to
                                office with coffee.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* <div className="col-12 sm-mb-30px">
                            <div
                                id="map"
                                className="map h-650px md-h-550px sm-h-450px border-radius-6px"
                                data-map-options='{ "lat": -37.817240, "lng": 144.955820, "style": "night", "marker": { "type": "image", "class": "marker01", "src": "images/marker04.png" }, "popup": { "defaultOpen": false, "html": "<div className=infowindow><strong className=\"mb-3 d-inline-block alt-font\">Crafto eLearning</strong><p className=\"alt-font\">16122 Collins street, Melbourne, Australia</p></div><div className=\"google-maps-link alt-font\"> <a className=\"text-white\" aria-label=\"View larger map\" target=\"_blank\" jstcache=\"31\" href=\"https://maps.google.com/maps?ll=-37.805688,144.962312&amp;z=17&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;cid=13153204942596594449\" jsaction=\"mouseup:placeCard.largerMap\">VIEW LARGER MAP</a></div>" } }'
                            ></div>
                        </div> */}
                        <div
                            className="col-lg-5 col-md-6 contact-form-style-03  sm-position-relative right-0px bottom-0"
                            // data-anime='{ "opacity": [0, 1], "translateY": [-20, 0], "translateX": [-20, 0], "staggervalue": 100, "easing": "easeOutQuad" }'
                        >
                            <div
                                className="bg-white p-13 md-p-10 position-relative overflow-hidden background-no-repeat background-position-right-bottom box-shadow-extra-large"
                                style={{
                                    backgroundImage:
                                        "url(images/demo-elearning-contact-bg-01.png)",
                                }}
                            >
                                <div>
                                    <h6 className="alt-font text-dark-gray fw-600 ls-minus-1px mb-5px">
                                        Seattle - Washington
                                    </h6>
                                    <p className="w-100 mb-10px">
                                        12605 NE 187th st
                                        <br />
                                        Bothell, WA 98011
                                    </p>
                                    <div className="w-100 d-block">
                                        <span className="d-block">
                                            <span className="text-dark-gray fw-600">
                                                T:
                                            </span>
                                            <a href="tel:12065501543">
                                                {" "}
                                                206 550 1543
                                            </a>
                                        </span>
                                        <span className="d-block">
                                            <span className="text-dark-gray fw-600">
                                                E:
                                            </span>{" "}
                                            <a
                                                href="mailto:sales@razvita.com"
                                                className="text-dark-gray text-decoration-line-bottom fw-600"
                                            >
                                                sales@razvita.com
                                            </a>
                                        </span>
                                        <a
                                            href="https://maps.app.goo.gl/jWNP9HPft14KSV8M6"
                                            target="_blank"
                                            className="btn btn-large btn-dark-gray btn-box-shadow btn-rounded btn-switch-text mt-35px"
                                        >
                                            <span>
                                                <span
                                                    className="btn-double-text"
                                                    data-text="View on google map"
                                                >
                                                    View on google map
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute bottom-130px z-index-minus-1 w-100 left-0px d-none d-lg-block">
                        <div className="row position-relative mt-50px">
                            <div className="col-12">
                                {/* <!-- start marquees  --> */}
                                <div className="marquees-text fs-200 ls-minus-2px alt-font fw-600 text-nowrap opacity-3">
                                    We'd love to hear from your side
                                </div>
                                {/* <!-- end marquees  --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end page title  --> */}
            {/* <!-- start section  --> */}
            <section className="overflow-hidden position-relative overlap-height pt-0">
                <div className="container overlap-gap-section">
                    <div className="row justify-content-center mb-3">
                        <div
                            className="col-12 text-center"
                            // data-anime='{ "translateY": [15, 0], "opacity": [0,1], "duration": 500, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">
                                How we can help you?
                            </h2>
                        </div>
                    </div>
                    <div className="row row-cols-md-1 justify-content-center mb-10 sm-mb-0">
                        <div className="col-xl-9 col-lg-10">
                            <form
                                method="post"
                                className="contact-form-style-03"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const data = Object.fromEntries(formData);
                                    console.log(data);
                                    // name, email, phone, subject, comment
                                    emailjs
                                        .sendForm(
                                            "service_k5tn6nl",
                                            "template_mtpnn4u",
                                            e.target, // Pass the form element directly
                                            "vvWSZCLTIVZNgkFnM" // Public key as a string
                                        )
                                        .then(
                                            () => {
                                                // Show success message
                                                // Reset the form
                                                e.target.reset();
                                                // Optionally, you can show a success message to the user
                                                // For example, using an alert:
                                                alert(
                                                    "Email sent successfully!"
                                                );

                                                console.log("SUCCESS!");
                                            },
                                            (error) => {
                                                // Show error message
                                                // Optionally, you can show an error message to the user
                                                // For example, using an alert:
                                                alert(
                                                    "Failed to send email. Please try again."
                                                );
                                                // Handle the error
                                                // For example, you can log it to the console
                                                // or display an error message to the user
                                                // console.error("Email sending error:", error);
                                                console.log("FAILED...", error);
                                            }
                                        );
                                    // Handle form submission here
                                }}
                            >
                                <div
                                    className="row"
                                    // data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 500, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                                >
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                                        >
                                            Your good name*
                                        </label>
                                        <div className="position-relative form-group mb-30px">
                                            <span className="form-icon">
                                                <i className="bi bi-emoji-smile text-dark-gray"></i>
                                            </span>
                                            <input
                                                required
                                                className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required"
                                                id="exampleInputEmail1"
                                                type="text"
                                                name="name"
                                                placeholder="What's your good name?"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                                        >
                                            Your email address*
                                        </label>
                                        <div className="position-relative form-group mb-30px">
                                            <span className="form-icon">
                                                <i className="bi bi-envelope text-dark-gray"></i>
                                            </span>
                                            <input
                                                required
                                                className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required"
                                                id="exampleInputEmail2"
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                                        >
                                            Your phone number*
                                        </label>
                                        <div className="position-relative form-group mb-30px">
                                            <span className="form-icon">
                                                <i className="bi bi-telephone text-dark-gray"></i>
                                            </span>
                                            <input
                                                required
                                                className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required"
                                                id="exampleInputEmail3"
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                                        >
                                            Your subject
                                        </label>
                                        <div className="position-relative form-group mb-30px">
                                            <span className="form-icon">
                                                <i className="bi bi-journals text-dark-gray"></i>
                                            </span>
                                            <input
                                                required
                                                className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control"
                                                id="exampleInputEmail4"
                                                type="text"
                                                name="subject"
                                                placeholder="How can we help you?"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-35px">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                                        >
                                            Your message
                                        </label>
                                        <div className="position-relative form-group form-textarea mb-0">
                                            <textarea
                                                required
                                                className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control"
                                                name="comment"
                                                placeholder="Describe about your message"
                                                rows="4"
                                            ></textarea>
                                            <span className="form-icon">
                                                <i className="bi bi-chat-square-dots text-dark-gray"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-8 sm-mb-30px text-center text-md-start">
                                        <p className="mb-0 fs-15 lh-26 w-80 lg-w-100">
                                            We are committed to protecting your
                                            privacy. We will never collect
                                            information about you without your
                                            explicit consent.
                                        </p>
                                    </div>
                                    <div className="col-md-4 text-center text-md-end">
                                        <input
                                            id="exampleInputEmail5"
                                            type="hidden"
                                            name="redirect"
                                            value=""
                                        />
                                        <button
                                            className="btn btn-large btn-dark-gray btn-rounded btn-box-shadow btn-switch-text left-icon submit"
                                            type="submit"
                                        >
                                            <span>
                                                <span>
                                                    <i className="fa-regular fa-paper-plane"></i>
                                                </span>
                                                <span
                                                    className="btn-double-text"
                                                    data-text="Send message"
                                                >
                                                    Send message
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col-12 md-mb-20px">
                                        <div className="form-results mt-20px d-none"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
