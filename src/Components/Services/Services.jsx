import "./Services.css";
import Work1 from "/images/workImages/1.svg";
import Work2 from "/images/workImages/2.svg";
import Work3 from "/images/workImages/3.svg";
import AI from "../../../public/images/TechImages/artificial-intelligence-3-69x69-1.png";
import BlockChain from "../../../public/images/TechImages/blockchain-69x69-1.png";
import Amazon from "../../../public/images/TechImages/amazon.png";
import CyberSecuirty from "../../../public/images/TechImages/cybersecurity.png";
import Designing from "../../../public/images/TechImages/designing.png";
import Development from "../../../public/images/TechImages/development.png";
import Gaming from "../../../public/images/TechImages/gaming.png";
import Architecture from "../../../public/images/TechImages/architecture.png";
import IOS from "../../../public/images/TechImages/ios android.png";
import Marketing from "../../../public/images/TechImages/marketing.png";
import threeD from "../../../public/images/TechImages/3D.png";
import Animation from "../../../public/images/TechImages/animation.png";

const cardData = [
  { id: 1, imgSrc: AI, title: "ML & AI" },
  { id: 2, imgSrc: BlockChain, title: "Block Chain" },
  { id: 3, imgSrc: Amazon, title: "Amazon" },
  { id: 4, imgSrc: CyberSecuirty, title: "Cyber Security" },
  { id: 5, imgSrc: Designing, title: "Designing" },
  { id: 6, imgSrc: Development, title: "Development" },
  { id: 7, imgSrc: Gaming, title: "Gaming" },
  { id: 8, imgSrc: Architecture, title: "Architecture" },
  { id: 9, imgSrc: IOS, title: "IOS AND" },
  { id: 10, imgSrc: Marketing, title: "Marketing" },
  { id: 11, imgSrc: threeD, title: "3D" },
  { id: 12, imgSrc: Animation, title: "Animation" }
];

const Services = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="section1">
        <div className="heading">
          <h1>How it works?</h1>
        </div>
        <div className="working">
          <div className="work1"><img src={Work1} alt="Work 1" /></div>
          <div className="work1"><img src={Work2} alt="Work 2" /></div>
          <div className="work1"><img src={Work3} alt="Work 3" /></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mt-5">
        <div className="row">
          {cardData.map(card => (
            <div className="col-md-2 mb-4" key={card.id}>
              <div className="card card-custom">
                <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
