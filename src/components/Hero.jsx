import React from "react";
import HeroSwiper from "./HeroSwiper";
import { useState } from "react";

import oneStop from "../assets/photo-182148f2-377e-4e0b-95a6-cf1292f4dd52.webp";
import turboMachinary from "../assets/photo-ee67c5ba-cc70-4712-8da5-88e5e27e79a7.webp";
import pumpMaintenance from "../assets/photo-e1ae0303-23eb-49ba-ae10-4fac52be7fb1.webp";
import valveMaintenance from "../assets/photo-5a7b0813-33da-4913-96fe-996fceb93928.webp";
import electricalMaintenance from "../assets/photo-878d8610-72ab-4175-8628-c736f646c719.webp";
import electricalEquipment from "../assets/photo-ace72798-d0a8-4457-a93d-5de7c3c52bc0.webp";

const Hero = () => {
  const servicesItemTab = [
    {
      tabTitle: "Your One Stop Shop",
      contentTitle: "Your One Stop",
      description:
        "Glensol provides comprehensive warehouse management and vendor-managed inventory solutions.",
      image: oneStop,
    },
    {
      tabTitle: "Turbomachinary maintenance",
      contentTitle: "Turbomachinary maintenance",
      description:
        "Glensol enhances operational efficiency by offering expert turbomachinery services that reduce downtime and extend equipment life.",
      image: turboMachinary,
    },
    {
      tabTitle: "Pump maintenance",
      contentTitle: "Pump maintenance",
      description:
        "We deliver unmatched value through expert maintenance, advanced monitoring, and tailored solutions that enhance system reliability and performance.",
      image: pumpMaintenance,
    },
    {
      tabTitle: "Valve maintenance",
      contentTitle: "Valve maintenance",
      description:
        "Our seasoned expert teams provide onsite support, valve repairs, and high-pressure testing (up to 1,600 barG).",
      image: valveMaintenance,
    },
    {
      tabTitle: "Electrical motors and generators maintenance",
      contentTitle: "Electrical motors and generators maintenance",
      description:
        "Glensol's Electromotor Maintenance Division enhances the durability and performance of your electrical motors and generators.",
      image: electricalMaintenance,
    },
    {
      tabTitle: "Electrical equipment maintenance",
      contentTitle: "Electrical equipment maintenance",
      description:
        "Glensol drives performance with expert electrical and instrumentation services that power onshore and offshore operations across the Caspian region.",
      image: electricalEquipment,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <main>
      <section className="heroSection">
        <div className="heroSectionMain">
          <div className="heroSwiper">
            <div className="swiperContainer">
              <div className="swiper">
                <HeroSwiper />
                <div className="containerStatusBar">
                  <div className="statusBar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="279"
                      height="4"
                      viewBox="0 0 279 4"
                      fill="none"
                    >
                      <path d="M0 0H279V4H0V0Z" fill="#BAD5E5" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="279"
                      height="4"
                      viewBox="0 0 279 4"
                      fill="none"
                    >
                      <path d="M0 0H279V4H0V0Z" fill="#DAE8F0" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="279"
                      height="4"
                      viewBox="0 0 279 4"
                      fill="none"
                    >
                      <path d="M0 0H279V4H0V0Z" fill="#DAE8F0" />
                    </svg>
                  </div>
                </div>

                <div className="container">
                  <div className="heroContent">
                    <h2>
                      From every task to every project, safety guides our
                      actions and ensures results. We make it happen.
                    </h2>
                    <a href="#">
                      <p className="learnMoreButton">
                        Learn more
                        <svg
                          className="arrowIcon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="7"
                          viewBox="0 0 14 7"
                          fill="none"
                        >
                          <path
                            d="M13.8396 3.00352C13.8394 3.00335 13.8398 3.00368 13.8396 3.00352L10.9816 0.159248C10.7675 -0.0537869 10.4213 -0.0529942 10.2082 0.161107C9.9951 0.375182 9.99592 0.721436 10.21 0.934498L12.1285 2.84375H0.546875C0.244836 2.84375 0 3.08858 0 3.39062C0 3.69266 0.244836 3.9375 0.546875 3.9375H12.1285L10.21 5.84675C9.99594 6.05981 9.99512 6.40607 10.2082 6.62014C10.4213 6.83427 10.7676 6.83501 10.9816 6.622L13.8391 3.77825C13.8389 3.77841 13.8393 3.77808 13.8391 3.77825C14.0533 3.56448 14.0531 3.21658 13.8396 3.00352Z"
                            fill="white"
                          />
                        </svg>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whoWeAreSection">
        <div className="container">
          <div className="whoWeAreMain">
            <div className="whoWeAreLeft">
              <span>Who We Are</span>
              <h1>
                Glensol delivers precise, agile value at every stage of your
                energy project.
              </h1>
              <div className="aboutUs">
                <p>
                  Glensol, a subsidiary of Nobel Energy Group, has been a
                  trusted services provider in the Oil & Gas, Power and Water
                  industries since 2012. Glensol offers a comprehensive range of
                  services that optimize the performance and reliability of
                  critical assets.
                </p>
              </div>
              <a href="#" className="learnMoreBttn">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                >
                  <path
                    d="M13.8396 3.00352C13.8394 3.00335 13.8398 3.00368 13.8396 3.00352L10.9816 0.159248C10.7675 -0.0537869 10.4213 -0.0529942 10.2082 0.161107C9.9951 0.375182 9.99592 0.721436 10.21 0.934498L12.1285 2.84375H0.546875C0.244836 2.84375 0 3.08858 0 3.39062C0 3.69266 0.244836 3.9375 0.546875 3.9375H12.1285L10.21 5.84675C9.99594 6.05981 9.99512 6.40607 10.2082 6.62014C10.4213 6.83427 10.7676 6.83501 10.9816 6.622L13.8391 3.77825C13.8389 3.77841 13.8393 3.77808 13.8391 3.77825C14.0533 3.56448 14.0531 3.21658 13.8396 3.00352Z"
                    fill="#059FF8"
                  />
                </svg>
              </a>
            </div>
            <div className="whoWeAreRight">
              <div className="videoWrapper">
                <iframe
                  src="https://www.youtube.com/embed/m0ivT117ImM"
                  title="Glensol Video"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourServices">
        <div className="container">
          <div className="ourServicesMain">
            <div className="ourServicesTitle">
              <span>What We Do</span>
              <h3>Our Services</h3>
            </div>
            <div className="ourServicesTab">
              <div className="ourServicesLeft">
                {servicesItemTab.map((item, index) => (
                  <div
                    key={index}
                    className={
                      activeIndex === index
                        ? "ourServicesTabItem active"
                        : "ourServicesTabItem"
                    }
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.tabTitle}
                  </div>
                ))}
              </div>

              <div className="ourServicesRight">
                <div className="activeTabDescription">
                  <div className="top">
                    <h3>{servicesItemTab[activeIndex].contentTitle}</h3>
                    <p>{servicesItemTab[activeIndex].description}</p>
                  </div>
                  <div className="bottom">
                    <a href="#">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="7"
                        viewBox="0 0 14 7"
                        fill="none"
                      >
                        <path
                          d="M13.8396 2.97368C13.8394 2.97352 13.8398 2.97384 13.8396 2.97368L10.9816 0.157666C10.7675 -0.0532527 10.4213 -0.0524677 10.2082 0.159507C9.9951 0.371455 9.99592 0.714269 10.21 0.925215L12.1285 2.8155H0.546875C0.244836 2.8155 0 3.0579 0 3.35694C0 3.65598 0.244836 3.89839 0.546875 3.89839H12.1285L10.21 5.78867C9.99594 5.99962 9.99512 6.34243 10.2082 6.55438C10.4213 6.76638 10.7676 6.76711 10.9816 6.55622L13.8391 3.74072C13.8389 3.74088 13.8393 3.74055 13.8391 3.74072C14.0533 3.52907 14.0531 3.18463 13.8396 2.97368Z"
                          fill="#059FF8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bottom">
                  <div className="activeTabImage">
                    <img src={servicesItemTab[activeIndex].image} alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="newsMain">
            <div className="newsTop">
              <span>Media</span>
              <div className="sectionTitle">
                <h3>Latest news</h3>
                <a href="#" className="learnMoreButton">
                  Learn more
                </a>
              </div>
            </div>
            <div className="newsCards"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
