import React from "react";
import Arrow from "../assets/icons/arrowright.svg";
import PartnersSlider from "./PartnersSlider";

const Partners = () => {
  return (
    <section className="partnersSection">
      <div className="container">
        <div className="partnersMain">
          <div className="partnersTop">
            <span>Partners</span>
            <div className="partnersTitle">
              <h3>Who trusts us</h3>
              <a href="#">
                All customers and partners <img src={Arrow} alt="#" />
              </a>
            </div>
          </div>
          <div className="partnersSlider">
            <div className="swiper">
              <PartnersSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
