import React from "react";

import SafetyCover from "../assets/Images/safety.jpg";
import SafetyBottom from "../assets/Images/safetyBottom.jpg";
import DownloadButton from "../assets/icons/blankDownload.svg";

const Safety = () => {
  const safetyCardsTop = [
    {
      title: "Safety, sustainability and responsibility",
      text: "At Glensol, safety, environmental care, and ethical business practices are at the heart of everything we do. We operate under the principle of Zero Harm — zero harm to people, zero impact on the environment, and zero non-productive time — supported by a certified QHSE management system (ISO 45001 & ISO 14001).",
    },
    {
      title: "Safety First",
      text: "We protect the health and well-being of our people through proactive hazard prevention, strict compliance, and continuous training. Every employee is empowered with stop-work authority, ensuring safety always comes before deadlines. Our Life-Saving Rules and regular awareness campaigns help embed a strong safety culture across all teams and contractors.",
    },
  ];

  const safetyCardsBottom = [
    {
      title: "Caring for the environment",
      text: "We minimise our environmental footprint through efficient resource use, sustainable technologies, and compliance with international standards. Our climate initiatives include energy-efficient facilities, electric loaders, LED lighting, and water-saving measures — all part of our roadmap toward a lower-carbon future aligned with the Paris Agreement.",
    },
    {
      title: "Local impact & ethics",
      text: "We support local communities by hiring locally, engaging local suppliers, and creating positive economic and social impact. Integrity underpins our business: we oppose corruption, protect human rights, and maintain transparency in every operation.",
    },
    {
      title: "Long-term value",
      text: "Through operational excellence, innovation, and responsible growth, we deliver sustainable value for our clients, partners, and the regions where we operate.",
    },
  ];

  return (
    <div className="safetyPage">
      <div className="pageBanner">
        <img src={SafetyCover} alt="Safety Banner" />
        <div className="container">
          <div className="pageTitle">
            <span>Who we are</span>
            <h3>Safety</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="safetyMain">
          <div className="safetyTitle">
            <div className="top">
              <a href="#">
                Download Safety Guidelines
                <img src={DownloadButton} alt="Download" />
              </a>
            </div>
          </div>
          <div className="safetyCards">
            <div className="safetyCardsTop">
              {safetyCardsTop.map((item, index) => (
                <div key={index} className="safetyCard">
                  <h3>{item.title}</h3>
                  <div className="safetyCardText">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="imageBottom">
              <img src={SafetyBottom} alt="Safety" />
            </div>
            <div className="safetyCardsBottom">
              {safetyCardsBottom.map((item, index) => (
                <div key={index} className="safetyCard">
                  <h3>{item.title}</h3>
                  <div className="safetyCardText">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
