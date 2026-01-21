import React from "react";

import BuildingsBanner from "../assets/Images/buldings.jpg";
import Certificate1 from "../assets/Images/certificate1.png";
import Certificate2 from "../assets/Images/certificate2.png";
import Certificate3 from "../assets/Images/certificate3.png";
import Certificate4 from "../assets/Images/certificate4.png";

const Certificates = () => {
  const certificates = [
    { title: "AEMT Membership", img: Certificate1 },
    { title: "EASA Membership", img: Certificate2 },
    { title: "EASA Membership", img: Certificate3 },
    { title: "EASA Membership", img: Certificate4 },
  ];
  return (
    <div className="certificatesLayout">
      <div className="certificatesPage">
        <div className="pageBanner">
          <img src={BuildingsBanner} alt="Buildings Cover Image" />
          <div className="pageTitle">
            <div className="container">
              <span>Who we are</span>
              <h3>Certificates</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="certificatesMain">
            <div className="certificatesBottom">
              {certificates.map((item, index) => (
                <div key={index} className="certificateCard">
                  <div className="cardImage">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="certificatesBottom">
              {certificates.map((item, index) => (
                <div key={index} className="certificateCard">
                  <div className="cardImage">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
