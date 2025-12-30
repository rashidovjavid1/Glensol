import React from "react";
import HeroSwiper from "../components/HeroSwiper";

const Hero = () => {
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
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
