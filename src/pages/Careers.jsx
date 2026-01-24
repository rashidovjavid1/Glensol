import React from "react";

import CareersImage from "../assets/Images/careers.jpg";
const Careers = () => {
  return (
    <div className="careersPage">
      <div className="pageBanner">
        <div className="bannerImage">
          <img src={CareersImage} alt="Career Banner Image" />
        </div>
        <div className="container">
          <div className="pageBannerTitle">
            <span>Work with us</span>
            <h3>Careers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
