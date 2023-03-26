import MobileOne from "../assets/Group 2263.png";
import coinImage from "../assets/coin-image.png";
import groupImage from "../assets/Group 200165.png";
import AboutImage from "../assets/Group 200166.png";
import deviceImage from "../assets/Group 200149.png";
import MobileTwo from "../assets/Group 2264.png";
import MobileThree from "../assets/Group 200147.png";
import { useState } from "react";
function MidPage() {
    const [image, setImage] = useState(MobileOne);

  const handleClick = (src) => {
    setImage(src);
  };
  return (
    <div className="mid-container">
      <div className="firstContainer">
        <div>
          <h1>Fastest Registration process</h1>
          <ul>
            <li onClick={() => handleClick(MobileOne)}>
              <span>1</span>Enter your Phone number
            </li>
            <span className="vl"></span>
            <li onClick={() => handleClick(MobileTwo)}>
              <span>2</span>Add your Personal Details
            </li>
            <span className="vl"></span>
            <li onClick={() => handleClick(MobileThree)}>
              <span>3</span>Add photos
            </li>
          </ul>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="secondContainer">
        <img src={coinImage} alt="" />
        <div>
          <h1>Fastest Registration process</h1>
          <ul>
            <li>Swipe - Accept, Reject or Wishlist</li>

            <li>Match - Get to know them better</li>

            <li>Connect - Break the ice and start the conversation</li>
          </ul>
        </div>
      </div>
      <div className="thirdContainer">
        <div>
          <h1>50,000+ Member</h1>
          <h2>Explore profile as per your preference</h2>
          <ul>
            <li>Match - Get to know them better</li>

            <li>Match - Get to know them better</li>

            <li>Connect - Break the ice and start the conversation </li>
          </ul>
        </div>
        <img src={groupImage} alt="" />
      </div>
      <div className="secondContainer">
        <img src={AboutImage} alt="" />
        <div>
          <h1>
            Premium Profile with <br /> mutual connections <br /> &Social Links.
          </h1>
          <p>
            Let us make it easier for you to find mutual <br /> connections.
            Take advantage of premium <br /> and connect with people who share
            your <br /> common connection.{" "}
          </p>
          <button>Download App Now</button>
        </div>
      </div>
      <div className="lastContainer">
        <h1>Chat With your Match</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia <br /> consequat duis enim velit mollit.
          Exercitation veniam consequat sunt .
        </p>
        <div className="last-image">
          <img src={deviceImage} alt="" />
        </div>
      </div>
    </div>
  );
}
export default MidPage;
