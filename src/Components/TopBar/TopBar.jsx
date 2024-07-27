import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-12 text-center">
            <div className="topbar-container d-inline-flex align-items-center">
              <a className="topbar-icon" href="tel:+923455555396">
                <i className="fa-solid fa-phone"></i>
              </a>
              <span className="text-light">+92 3455555396</span>

              <a className="topbar-icon" href="#">
                <i className="fa-solid fa-location-dot"></i>
              </a>
              <span className="text-light">Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan</span>

              <a className="topbar-icon" href="#">
                <i className="fa-solid fa-clock"></i>
              </a>
              <span className="text-light">Mon - Fri 8.00 - 20.00</span>

              <a className="topbar-icon" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="topbar-icon" href="https://www.facebook.com/shagufta.riaz.5011?mibextid=ZbWKwL">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="topbar-icon" href="https://www.linkedin.com/in/shagufta-riaz-907a15238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="topbar-icon" href="https://www.instagram.com/invites/contact/?igsh=lyuce4u3ivi4&utm_content=hlu3ui7">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="topbar-icon" href="https://youtube.com/@shaguftakhanswati7351?si=xJrqdRUBSoTBAORW">
                <i className="fab fa-youtube"></i>
              </a>

              <a className="topbar-icon login" href="#"><small className="text-light"><i className="fa-solid fa-user me-2"></i>Login | Register</small></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
