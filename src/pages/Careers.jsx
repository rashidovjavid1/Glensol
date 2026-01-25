import React from "react";

import CareersImage from "../assets/Images/careers.jpg";
import BottomCareers from "../assets/Images/bottomcareers.png";
import ArrowRight from "../assets/icons/arrowright.svg";
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
          <div className="bottomPage">
            <div className="bottomPageBanner">
              <img src={BottomCareers} alt="Career" />
            </div>
            <div className="bottomRight">
              <h3>Drive the Future of Energy Services with Us</h3>
              <p>
                At Glensol, we believe our people are our most valuable asset.
                As a leading provider of integrated oilfield services, we are
                committed to attracting, developing, and retaining top talent
                who are passionate about making an impact in the energy sector.
              </p>
              <a href="#">
                Why Join Glensol
                <img src={ArrowRight} alt="ArrowRight" />
              </a>
            </div>
          </div>
          <div className="centerText">
            <div className="text">
              <h3>Internships & Graduate Programs</h3>
              <p>
                Glensol offers internship and graduate opportunities for
                students and young professionals seeking hands-on experience in
                the energy services sector. You’ll gain exposure to real-world
                projects, receive mentoring from industry experts, and build the
                foundation for a successful career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
