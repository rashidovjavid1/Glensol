import HeroSwiper from "../components/HeroSwiper";
import React, { useState } from "react";

const Hero = () => {
  const servicesTab = [
    {
      title: "Your One Stop Shop",
      text: "Glensol provides comprehensive warehouse management and vendor-managed inventory (VMI) solutions.",
      image: "/images/service-1.jpg",
    },
    {
      title: "Pump maintenance",
      text: "Professional pump maintenance services.",
      image: "/images/service-2.jpg",
    },
    {
      title: "Valve maintenance",
      text: "Valve maintenance and repair solutions.",
      image: "/images/service-3.jpg",
    },
    {
      title: "Electrical motors and generators maintenance",
      text: "Maintenance of motors and generators.",
      image: "/images/service-4.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <section className="heroSection">
        <div className="heroSectionMain">
          <div className="heroSwiper">
            <HeroSwiper />
            <div className="heroContent">
              <h1>
                From every task to every project, safety guides our actions and
                ensures results. We make it happen
              </h1>
              <a href="#">
                <p>
                  Learn more
                  <svg
                    className="learnMoreIcon"
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
              <div className="heroHover"></div>
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
                Glensol is a trusted provider of technical services and
                maintenance solutions for rotating equipment
              </h1>
              <div>
                <p>
                  Glensol, a subsidiary of Nobel Energy Group, has been a
                  trusted services provider in the Oil & Gas, Power and Water
                  industries since 2012. Glensol offers a comprehensive range of
                  services that optimize the performance and reliability of
                  critical assets
                </p>
                <a href="#" className="learnMoreBtn">
                  <p>
                    Learn More
                    <svg
                      className="learnMoreBtn"
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
                  </p>
                </a>
              </div>
            </div>
            <div className="whoWeAreRight">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m0ivT117ImM?autoplay=1&mute=1&loop=1&playlist=m0ivT117ImM"
                title="Glensol New Identity"
                frameBorder="0"
                allow="fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ourServicesSection">
        <div className="container">
          <div className="ourServicesMain">
            <div className="ourServicesTitle">
              <span>What We Do</span>
              <h3>Our Services</h3>
            </div>
            <div className="ourServicesTab">
              {
                servicesTab.map(())
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
