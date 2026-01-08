import React from "react";
import HeroSwiper from "./HeroSwiper";
import WhoWeAre from "./WhoWeAre";
import OurServices from "./OurServices";
import News from "./News";
import Partners from "./Partners";
import OurProjects from "./OurProjects";
import Bottom from "./Bottom";

import StatusBar from "../assets/icons/statusBar.svg";
import Footer from "./Footer";

const HomePage = () => {
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
                    <img src={StatusBar} alt="Status Bar" />
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
      <WhoWeAre />
      <OurServices />
      <News />
      <Partners />
      <OurProjects />
      <Bottom />
    </main>
  );
};

export default HomePage;
