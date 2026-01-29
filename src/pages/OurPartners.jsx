import React, { useState } from "react";

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
import Customer11 from "../assets/Images/customer13.webp";
import Customer12 from "../assets/Images/customer14.webp";

import Partner1 from "../assets/Images/partners1.webp";
import Partner2 from "../assets/Images/partners2.webp";
import Partner3 from "../assets/Images/partners3.webp";
import Partner4 from "../assets/Images/partners4.webp";
import Partner5 from "../assets/Images/partners5.webp";
import Partner6 from "../assets/Images/partners6.webp";
import Partner7 from "../assets/Images/partners7.webp";
import Partner8 from "../assets/Images/partners8.webp";
import Partner9 from "../assets/Images/partners9.svg";
import Partner10 from "../assets/Images/partners10.webp";
import Partner11 from "../assets/Images/partners11.webp";
import Partner12 from "../assets/Images/partners12.webp";
import Partner13 from "../assets/Images/partners13.webp";
import Partner14 from "../assets/Images/partners14.webp";
import Partner15 from "../assets/Images/partners15.webp";

const partnersCustomers = [
  {
    image: Customer1,
    link: "https://www.bp.com/en_az/azerbaijan/home.html",
    type: "customer",
  },
  { image: Customer2, link: null, type: "customer" },
  { image: Customer3, link: "https://www.pdms-group.com/", type: "customer" },
  {
    image: Customer4,
    link: "https://socar.az/socar/en/home",
    type: "customer",
  },
  { image: Customer5, link: null, type: "customer" },
  { image: Customer6, link: "https://www.ncoc.kz/en", type: "customer" },
  { image: Customer7, link: "https://caspiandrilling.com/", type: "customer" },
  { image: Customer8, link: "https://norm.az/", type: "customer" },
  { image: Customer9, link: "https://www.stp.az/en", type: "customer" },
  { image: Customer10, link: "https://www.holcim.az/az", type: "customer" },
  { image: Customer11, link: null, type: "customer" },
  { image: Customer12, link: null, type: "customer" },

  { image: Partner1, link: "https://www.shell.com/", type: "partner" },
  { image: Partner2, link: "https://www.totalenergies.com/", type: "partner" },
  { image: Partner3, link: null, type: "partner" },
  { image: Partner4, link: "https://www.bakerhughes.com/", type: "partner" },
  { image: Partner5, link: null, type: "partner" },
  { image: Partner6, link: "https://www.slb.com/", type: "partner" },
  { image: Partner7, link: null, type: "partner" },
  { image: Partner8, link: "https://www.halliburton.com/", type: "partner" },
  { image: Partner9, link: null, type: "partner" },
  { image: Partner10, link: null, type: "partner" },
  { image: Partner11, link: null, type: "partner" },
  { image: Partner12, link: null, type: "partner" },
  { image: Partner13, link: null, type: "partner" },
  { image: Partner14, link: null, type: "partner" },
  { image: Partner15, link: null, type: "partner" },
];

const OurPartners = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = partnersCustomers.filter((item) => {
    if (activeFilter === "all") return true;
    if (item.type === activeFilter) return true;
    return false;
  });

  return (
    <div className="ourPartnersMainPage">
      <div className="ourPartnersBanner">
        <div className="bannerImage">
          <img src={PartnersImage} alt="Partners" />
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
          <div className="filter">
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={activeFilter === "all" ? "active" : ""}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveFilter("customer")}
                  className={activeFilter === "customer" ? "active" : ""}
                >
                  Customers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveFilter("partner")}
                  className={activeFilter === "partner" ? "active" : ""}
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>
          <div className="partnersCards">
            {filteredItems.map((item, index) => (
              <div className="partnersCard" key={index}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.image} alt="" />
                  </a>
                ) : (
                  <img src={item.image} alt="" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
