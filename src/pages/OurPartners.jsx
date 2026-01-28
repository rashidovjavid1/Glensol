import React from "react";

import PartnersImage from "../assets/Images/partners.jpg";

const OurPartners = () => {
  return (
    <div className="ourPartnersMainPage">
      <div className="ourPartnersBanner">
        <div className="bannerImage">
          <img src={PartnersImage} alt="PartnersImage" />
        </div>
        <div className="container">
          <div className="ourPartnersBannerTitle">
            <span>Who we are</span>
            <h1>Our customers & partners</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="partnersMain">
          <div className="partnersCard"></div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
