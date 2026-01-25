import React from "react";

import CareersImage from "../assets/Images/careers.png";
import BottomCareers from "../assets/Images/bottomCareers.png";
import ArrowRight from "../assets/icons/arrowRight.svg";
const Careers = () => {
  const openVacancies = [
    {
      role: "Sales Manager",
      date: "9 September 2025",
      employment: "Full-time/Part-time/Contract",
      location: "Baku, Azerbaijan",
    },
    {
      role: "Product Manager",
      date: "9 September 2025",
      employment: "Full-time/Part-time/Contract",
      location: "Baku, Azerbaijan",
    },
    {
      role: "Supply Chain Manager",
      date: "9 September 2025",
      employment: "Full-time/Part-time/Contract",
      location: "Baku, Azerbaijan",
    },
  ];
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
        <div className="pageTopTitle">
          <div className="container">
            <span>Career</span>
            <h3>Work with our company</h3>
          </div>
        </div>
        <div className="bottomPage">
          <div className="bottomPageBanner">
            <img src={BottomCareers} alt="Career" />
          </div>
          <div className="bottomRight">
            <h3>Drive the Future of Energy Services with Us</h3>
            <p>
              At Glensol, we believe our people are our most valuable asset. As
              a leading provider of integrated oilfield services, we are
              committed to attracting, developing, and retaining top talent who
              are passionate about making an impact in the energy sector.
            </p>
            <a href="#">
              Why Join Glensol
              <img src={ArrowRight} alt="ArrowRight" />
            </a>
          </div>
        </div>
        <div className="centerText">
          <div className="container">
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
        <div className="vacanciesBanner">
          <div className="container">
            <div className="vacanciesBannerTop">
              <h3>Open Vacancies</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
