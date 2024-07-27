import "./Download.css";

const Download = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
            <div className="image-wrapper">
              <div className="circle"></div>
              <img
                src="https://ezitech.org/wp-content/uploads/2022/11/phone-copy.webp"
                alt="PhoneImage"
                className="phone-image"
              />
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5 content">
            <h2 className="heading" style={{color:"black", fontSize:"5cap"}}>
              Learning <span>anytime</span> from anywhere
            </h2>
            <p>
              Increase the mobility level with Eziline Technologies LMS App.
              Take your courses in your pocket and access them whenever you want
              without any limits. Make your learning more engaging and
              productive using modern LMS App.
            </p>
            <div className="row store">
              <div className="col-6">
                <button className="btn">
                  <img src="https://ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp" />
                </button>
              </div>
              <div className="col-6">
                <button className="btn">
                  <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_22.png" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Download;
