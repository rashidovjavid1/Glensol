import React from "react";

import PartnersImage from "../assets/Images/partners.jpg";

import Customer1 from "../assets/Images/partner1.png";
import Customer2 from "../assets/Images/partner2.png";
import Customer3 from "../assets/Images/partner3.jpeg";
import Customer4 from "../assets/Images/partner4.png";
import Customer5 from "../assets/Images/partner5.jpeg";
import Customer6 from "../assets/Images/partner6.png";
import Customer7 from "../assets/Images/partner7.png";
import Customer8 from "../assets/Images/partner8.png";
import Customer9 from "../assets/Images/partner9.png";
import Customer10 from "../assets/Images/partner10.png";

const partnersCustomers = [
  { image: Customer1, link: "https://www.bp.com/en_az/azerbaijan/home.html" },
  { image: Customer2, link: null },
  { image: Customer3, link: "https://www.pdms-group.com/" },
  { image: Customer4, link: "https://socar.az/socar/en/home" },
  { image: Customer5, link: null },
  { image: Customer6, link: "https://www.ncoc.kz/en" },
  { image: Customer7, link: "https://caspiandrilling.com/" },
  { image: Customer8, link: "https://norm.az/" },
  { image: Customer9, link: "https://www.stp.az/en" },
  { image: Customer10, link: "https://www.holcim.az/az" },
];

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
          <div className="partnersCards">
            {partnersCustomers.map((item, index) => (
              <div key={index} className="partnersCard">
                <a href={item.link}>
                  <img src={item.image} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
