import "./Bundles.css";
import Javascript from "../../../public/images/bundle1Images/javascript-736400_1280.png";
import ReactImg from "../../../public/images/bundle1Images/coding-7224945_1280.png";
import NodeJs from "../../../public/images/bundle1Images/node-js-736399_1280.png";
import Fiver from "../../../public/images/bundle1Images/fiver.png";

import Trip from "../../../public/images/bundle2Images/tripadvisor.png";
import GoogleAds from "../../../public/images/bundle2Images/google ads.png";
import SEO from "../../../public/images/bundle2Images/seo.png";
import DigitalMarketing from "../../../public/images/bundle2Images/digital marketing.jpg";
import LinkedIn from "../../../public/images/bundle2Images/linked in.png";

const Bundles = () => {
  return (
    <>
    <div className="section">
      <div className="title">
        <h1>Limited-Time Summer Course Bundles!</h1>
        <p>
          <small>Note: All these bundles have recorded lectures</small>
        </p>
      </div>

      <div className="bundles">
        <div className="bundle1">
          <div className="list-group">
            <div className="list-group-item active" aria-current="true">
              <h5>Web Development Course With Industrial Projects</h5>
              <br />
              <small>4 Courses</small>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={Javascript} alt="Js" />
                <div>
                  <p>From Novice to Expert, Complete Javascript Course</p>
                </div>
                <div className="price">
                  <small>PKR7,860</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={ReactImg} alt="React" />
                <div>
                  <p>Mastering React: Building Dynamic UIs</p>
                </div>
                <div className="price">
                  <small>PKR8,500</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={NodeJs} alt="NodeJs" />
                <div>
                  <p>Node.js Backend Development</p>
                </div>
                <div className="price">
                  <small>PKR9,000</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={Fiver} alt="Fiver" />
                <div>
                  <p>Freelancing on Fiverr: Tips and Tricks</p>
                </div>
                <div className="price">
                  <small>PKR5,000</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
                
            </div>
            <div className="list-group-item total">
                <p>PKR10,000 <small><del>PKR16,876</del></small></p>
            </div>
          </div>
        </div>

        <div className="bundle2">
          <div className="list-group">
            <div className="list-group-item active" aria-current="true">
              <h5>Digital Marketing Mastery: Learn From The Best</h5>
              <br />
              <small>6 Courses</small>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={Trip} alt="TripAdvisor" />
                <div>
                  <p>Effective TripAdvisor Marketing Strategies</p>
                </div>
                <div className="price">
                  <small>PKR6,000</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={GoogleAds} alt="Google Ads" />
                <div>
                  <p>Mastering Google Ads for Maximum Reach</p>
                </div>
                <div className="price">
                  <small>PKR6,500</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={SEO} alt="SEO" />
                <div>
                  <p>Advanced SEO Techniques</p>
                </div>
                <div className="price">
                  <small>PKR7,000</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={DigitalMarketing} alt="Digital Marketing" />
                <div>
                  <p>Digital Marketing Essentials</p>
                </div>
                <div className="price">
                  <small>PKR6,800</small>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="item-content">
                <img src={LinkedIn} alt="LinkedIn" />
                <div>
                  <p>LinkedIn for Professionals</p>
                </div>
                <div className="price">
                  <small>PKR6,200</small>
                </div>
              </div>
            </div>
            <div className="list-group-item total">
                <p>PKR10,000  <small><del>PKR16,876</del></small></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Bundles;
