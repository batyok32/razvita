import { posts } from "./courses";

const Header = () => {
    return (
        <header>
            {/* start navigation */}
            <nav
                className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse"
                data-header-hover="light"
            >
                <div
                    className="container-fluid"
                    style={{ alignItems: "center" }}
                >
                    <div className="col-auto col-lg-2 me-lg-0 me-auto">
                        <a
                            className="navbar-brand"
                            style={{ display: "flex" }}
                            href="/"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {/* <img
                                    src="images/logo.png"
                                    data-at2x="images/demo-elearning-logo-white@2x.png"
                                    alt=""
                                    className="default-logo"
                                /> */}
                                <div
                                    className="default-logo"
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: "bold",
                                        color: "white",
                                        marginLeft: "10px",
                                    }}
                                >
                                    Razvita
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingRight: "10px",
                                }}
                            >
                                {/* <img
                                    src="images/logo.png"
                                    data-at2x="images/demo-elearning-logo-black@2x.png"
                                    alt=""
                                    className="alt-logo"
                                /> */}
                                <div
                                    className="alt-logo"
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: "bold",
                                        color: "black",
                                        marginLeft: "10px",
                                    }}
                                >
                                    Razvita
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingRight: "10px",
                                }}
                            >
                                {/* <img
                                    src="images/logo.png"
                                    data-at2x="images/demo-elearning-logo-black@2x.png"
                                    alt=""
                                    className="mobile-logo"
                                /> */}
                                <div
                                    className="mobile-logo"
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: "bold",
                                        color: "black",
                                        marginLeft: "10px",
                                    }}
                                >
                                    Razvita
                                </div>
                            </div>

                            {/* <img
                                src="images/demo-elearning-logo-black.png"
                                data-at2x="images/demo-elearning-logo-black@2x.png"
                                alt=""
                                className="alt-logo"
                            />
                            <img
                                src="images/demo-elearning-logo-black.png"
                                data-at2x="images/demo-elearning-logo-black@2x.png"
                                alt=""
                                className="mobile-logo"
                            /> */}
                        </a>
                    </div>
                    <div className="col-auto menu-order position-static">
                        <button
                            className="navbar-toggler float-start"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav alt-font">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item dropdown dropdown-with-icon">
                                    <a href="/courses" className="nav-link">
                                        Courses
                                    </a>
                                    <i
                                        className="fa-solid fa-angle-down dropdown-toggle"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></i>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        {posts.map((post) => (
                                            <li key={post.categoryLink}>
                                                <a href={post.detailsLink}>
                                                    <i className="bi bi-laptop"></i>
                                                    <div className="submenu-icon-content">
                                                        <span>
                                                            {post.title}
                                                        </span>
                                                        <p>
                                                            {post.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                {/* <li>
                                            <a href="demo-elearning-courses-details.html">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Development</span>
                                                    <p>Develop professional skills</p>
                                                </div>
                                            </a>
                                        <li>
                                            <a href="/courses">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Development</span>
                                                    <p>
                                                        Develop professional
                                                        skills
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demo-elearning-courses-details.html">
                                                <i className="bi bi-briefcase"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Business</span>
                                                    <p>Advance your business</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demo-elearning-courses-details.html">
                                                <i className="bi bi-vector-pen"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Design</span>
                                                    <p>
                                                        Design skills & concepts
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demo-elearning-courses-details.html">
                                                <i className="bi bi-megaphone"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Marketing</span>
                                                    <p>
                                                        New age marketing skills
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a
                                        href="demo-elearning-instructors.html"
                                        className="nav-link"
                                    >
                                        Instructors
                                    </a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a
                                        href="demo-elearning-testimonial.html"
                                        className="nav-link"
                                    >
                                        Testimonial
                                    </a>
                                </li> */}

                                <li className="nav-item">
                                    <a href="/contact" className="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
                        <div className="header-icon">
                            <div>
                                <div className="alt-font fw-500 lg-fs-15">
                                    <a
                                        href="tel:12065501543"
                                        className="widget-text text-white-hover"
                                    >
                                        <i className="feather icon-feather-phone-call me-10px lg-me-5px"></i>
                                        1 206 550 1543
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* end navigation */}
        </header>
    );
};

export default Header;
