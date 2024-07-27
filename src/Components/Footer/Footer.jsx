import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="end-footer">
      <div className="container footer-container">
        <div className="row">
          <div className="col-3">
            <h5>About</h5>
            <p>
              <small>
                Ezitech Institute provides a platform for newcomers to launch
                their IT and freelancing careers. Our emphasis on practical
                information technology courses that are career and work oriented
                makes us the top computer institute in Rawalpindi, Islamabad,
                Pakistan.
              </small>
            </p>
          </div>
          <div className="col-4">
            <h5>POPULAR COURSES</h5>
            <div className="row course-item">
              <div className="col-3">
                <img
                  src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-100x100.webp"
                  alt=""
                />
              </div>
              <div className="col-9">
                <p>Online Arbitage MasterMind 2.0</p>
                <small>By Husnain Ali</small>
              </div>
            </div>
            <div className="row course-item">
              <div className="col-3">
                <img
                  src="https://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-_FILEminimizer_-100x100.webp"
                  alt=""
                />
              </div>
              <div className="col-9">
                <p>The Complete Bootcamp 2024 : Node js</p>
                <small>By Ezitech</small>
              </div>
            </div>
          </div>
          <div className="col-1">
            <h5>Pages</h5>
            <ul>
              <li>BLOG</li>
              <li>EZICODING</li>
              <li>INTERNSHIPS</li>
              <li>OUR SERVICES</li>
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <h5>Contact</h5>
            <p>
              <i className="fa-solid fa-location-dot"></i>
              <small> Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</small>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 
              <small> +923455555396</small>
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>
              <small> info@ezitech.org</small>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <p>Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House</p>
      </div>
      <div className="footer-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-instagram"></i>
      </div>
      </div>
    </>
  );
};

export default Footer;
