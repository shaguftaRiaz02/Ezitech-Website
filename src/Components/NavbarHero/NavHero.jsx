import "./NavHero.css";

const NavHero = () => {
  return (
    <>
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Navbar */}
      <div className="navbar-container logo">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <img src="images/logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About Us
              </a>
              <a href="services.html" className="nav-item nav-link">
                Certifications
              </a>
              <a href="blog.html" className="nav-item nav-link">
                Internships
              </a>
              <a href="blog.html" className="nav-item nav-link">
                Seminars
              </a>
              <a href="blog.html" className="nav-item nav-link">
                Tech Blogs
              </a>
            </div>

            <a href="#" className="btn btn-light rounded-circle me-2">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#" className="btn btn-light rounded-circle">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content d-flex align-items-center justify-content-center text-center text-white">
          <div className="p-3" style={{ maxWidth: "900px" }}>
            <h1 className="display-2 text-capitalize mb-4 mt-1">
              LEARN THE FUNDAMENTALS WITH OUR EXPERTS IN{" "}
              <span style={{ fontWeight: "bold", color: "#0966f2" }}>
                PROGRAMMING{" "}
              </span>
            </h1>
            <p>Utilize effective learning to reach your potential</p>

            <div className="search-container">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Search More..."
                  className="search-input"
                />
                <i className="fa fa-search search-icon"></i>{" "}
                {/* Font Awesome search icon */}
              </div>
            </div>

            <p>
              Explore more useful product <i className="fa fa-heart"></i>
            </p>

            <h3>
              EZIPOS EZIBLOGS EZIENCODING
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHero;
