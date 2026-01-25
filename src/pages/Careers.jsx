import React from "react";

import CareersImage from "../assets/Images/careers.jpg";
import BottomCareers from "../assets/Images/bottomcareers.png";
const Careers = () => {
  return (
    <div className="careersPage">
      <div className="pageMain">
        <div className="pageBanner">
          <div className="bannerImage">
            <img src={CareersImage} alt="Career Banner Image" />
          </div>
          <div className="container">
            <div className="pageBannerTitle">
              <span>Work with our company</span>
              <h1>Careers</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pageTopTitle">
            <span>Career</span>
            <h3>Work with our company</h3>
          </div>
          <div className="bottomPage"></div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
