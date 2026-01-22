import React from "react";
import CoverImage from "../assets/Images/valuesimg.jpg";

import Circle from "../assets/icons/circle.svg";
import Safety from "../assets/icons/safety.svg";
import Reward from "../assets/icons/reward.svg";
import Puzzle from "../assets/icons/puzzle.svg";
import Lamp from "../assets/icons/lamp.svg";
import Increase from "../assets/icons/increase.svg";

const Values = () => {
  const valueItems = [
    {
      label: "Safety",
      text: "We conduct our business according to the highest standards of social, environmental and safety practices. We are committed to being good corporate citizens. We place a high priority on the health, safety and security of our workforce and everyone we work with, and the protection of our assets and the environment.",
    },
    {
      label: "People-oriented",
      text: "We treat people – the driving force behind all our success stories – as our most valuable asset. With great focus on well-being and growth of our people, we are committed to creating an inclusive workplace that embraces a diversity of cultures, ideas, talents and experiences. We ensure a healthy environment where everyone has equal rights and opportunities, and a greater sense of value and satisfaction",
    },
    {
      label: "Integrity",
      text: "We are honest with others and ourselves. We meet the highest ethical standards in all business dealings. We do what we say we will do. We accept responsibility and hold ourselves accountable for our actions and inactions.",
    },
    {
      label: "Innovation",
      text: "We regard innovation-led growth as critical. We leverage the benefits of advanced technology and agile ways of working to invest in rational, risk-balanced initiatives, valued by all stakeholders. We apply innovative solutions to ensure scalable profit sources and maintain environmental sustainability. ",
    },
    {
      label: "Excellence",
      text: "We strive for excellence in what we do, delivering a high level of performance and operational excellence, underpinned by continuous improvement of our systems and ways of working.",
    },
  ];
  return (
    <div className="valuesLayout">
      <div className="pageBanner">
        <img src={CoverImage} alt="Values Image" />
        <div className="pageBannerBottom">
          <div className="container">
            <div className="pageTitle">
              <span>Who we are</span>
              <h3>Our values</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="valueMain">
          <div className="valueIcons">
            <a href="#values-text">
              <img src={Circle} alt="" className="circle" />
              <img src={Safety} alt="Safety" />
              <span>Safety</span>
            </a>
            <a href="">
              <img src={Circle} alt="" className="circle" />
              <img src={Increase} alt="" />
              <span>People-oriented</span>
            </a>
            <a href="">
              <img src={Circle} alt="" className="circle" />
              <img src={Puzzle} alt="" />
              <span>Integrity</span>
            </a>
            <a href="">
              <img src={Circle} alt="" className="circle" />
              <img src={Reward} alt="" />
              <span>Excellence</span>
            </a>
            <a href="">
              <img src={Circle} alt="" className="circle" />
              <img src={Lamp} alt="" />
              <span>Innovation</span>
            </a>
          </div>
          <div className="valueCards">
            {valueItems.map((item, index) => (
              <div key={index} className="valueCard">
                <h3>{item.label}</h3>
                <div className="valueCardText" id="values-text">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
