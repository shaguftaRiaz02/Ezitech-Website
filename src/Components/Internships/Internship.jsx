import './Internship.css';
import Pic1 from "../../../public/images/internship/1.png";
import Pic2 from "../../../public/images/internship/2.png";
import Pic3 from "../../../public/images/internship/3.png";
import Pic4 from "../../../public/images/internship/4.png";
import Pic5 from "../../../public/images/internship/5.png";
import Pic6 from "../../../public/images/internship/6.png";

const internshipData = [
  { title: "HTML/CSS Javascript", image: Pic1 },
  { title: "React Development", image: Pic2 },
  { title: "Backend Development", image: Pic3 },
  { title: "Data Science", image: Pic4 },
  { title: "Machine Learning", image: Pic5 },
  { title: "Cyber Security", image: Pic6 },
];
const Internship = () => {
    return (
        <div className="internship">
            <h1>Perfect Internships For You</h1>
      <div className="cards-container">
        {internshipData.map((internship, index) => (
          <div className="card" key={index}>
            <div className="title-section">
              <div className="heading">
                <h3>{internship.title}</h3>
                <hr />
                <p><small>Ezitech Institute</small></p>
              </div>
              <div className="img-container">
                <img src={internship.image} alt="Title Image" />
              </div>
            </div>
            <div className="text-section">
              <p>
                <span className="icon">
                  <i className="fa-solid fa-user text-dark"></i>
                </span>
                Employment Type - 
                <span style={{ backgroundColor: "#80808033" }}>
                  <small> Hybrid</small>
                </span>
              </p>
              <p>
                <span className="icon">
                  <i className="fa-solid fa-location-arrow text-dark"></i>
                </span>
                Location - 
                <span style={{ backgroundColor: "#80808033" }}>
                  <small> Rawalpindi</small>
                </span>
              </p>
              <p>
                <span className="icon">
                  <i className="fa-solid fa-bag-shopping text-dark"></i>
                </span>
                Job Type - 
                <span style={{ backgroundColor: "#80808033" }}>
                  <small> FullTime - PartTime</small>
                </span>
              </p>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
      <button className="read-more-btn load-more">Load More</button>
      </div>
    );
  };
  
  export default Internship;
  