import React from "react";
import ServicesPageBanner from "../assets/Images/servicesPageBanner.jpg";
const WhatWeDo = () => {
  return (
    <div>
      <div className="servicesMainPage">
        <div className="servicesMainPageBanner">
          <img src={ServicesPageBanner} alt="ServicesPageBanner" />
          <div className="container">
            <div className="servicesPageTitle">
              <span>Services</span>
              <h1>Your One Stop Shop</h1>
            </div>
          </div>
        </div>
        <div className="servicesPagDetail">
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
