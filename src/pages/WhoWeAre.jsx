import React from "react";
import BannerImage from "../assets/Images/whoWeAreImg.jpg";

const aboutTextFieldItems = [
  {
    text: "Glensol, a subsidiary of Nobel Energy Group, has been a trusted services provider in the Oil & Gas, Power and Water industries since 2012. Glensol offers a comprehensive range of services that optimize the performance and reliability of critical assets. Its expertise includes, but is not limited to, asset integrity management; maintenance and repair of static and rotating equipment, drilling rig equipment, and HVAC systems; electrical and instrumentation services; as well as the installation, commissioning, start-up, operation, overhaul, and maintenance of gas turbines and compressors. Since its foundation, Glensol has earned a reputation for its customer-focused approach and commitment to delivering high-quality services.",
  },
  {
    text: "Glensol offers tailored solutions to meet the unique needs of each client, supported by a team of highly skilled professionals with deep industry knowledge. Glensol’s commitment to safety, quality, professionalism, agility, and continuous improvement ensures it consistently delivers exceptional value for all stakeholders. Expanding its presence in the energy market, Glensol has become a leading services provider in the Caspian region and beyond, offering One-Stop-Shop approach, proven technical expertise and value-driven solutions.",
  },
];

const aboutServeItem = [
  {
    title: "Oil & gas industry",
    text: "Glensol provides comprehensive maintenance solutions for turbomachinery, pumps, valves, electrical motors, and generators, ensuring optimal performance in offshore and onshore oil and gas assets. Along with equipment maintenance, it also offers top drive overhauls, inventory management, and training services to minimize downtime and enhance operational efficiency.",
  },
  {
    title: "Water industry",
    text: "For the water sector, Glensol provides maintenance for pumps, valves, and electrical systems to ensure continuous water treatment and distribution. These services support smooth and reliable operations in water plants.",
  },
  {
    title: "Power generation stations",
    text: "In power generation, Glensol focuses on the maintenance of steam turbines, gas turbines, electric motors, pumps, valves, and electrical systems to maximize performance and minimize downtime. Its services are designed to ensure power plants operate efficiently and safely.",
  },
  {
    title: "Alternative energy",
    text: "Glensol supports alternative energy projects with end-to-end EPC services and asset management, optimizing the performance and lifespan of renewable energy systems to drive sustainable energy initiatives forward.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="whoWeAreLayout">
      <div className="aboutPage">
        <div className="pageBanner">
          <div className="pageBannerImg">
            <img src={BannerImage} alt="Who We Are Image" />
            <div className="container">
              <div className="pageBannerBottom">
                <span>Who we are</span>
                <h1>About us</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="aboutMain">
              <div className="aboutTop">
                <div className="aboutTopTextfield">
                  {aboutTextFieldItems.map((item, index) => (
                    <div key={index} className="aboutTextFieldItem">
                      {item.text}
                    </div>
                  ))}
                </div>

                <div className="videoPlayer">
                  <div className="video"></div>
                </div>
              </div>

              <div className="aboutServe">
                <div className="aboutServeTitle">
                  <span>Who we are</span>
                  <h3>Industries we serve</h3>
                </div>

                <div className="aboutServeCard">
                  {aboutServeItem.map((item, index) => (
                    <div key={index} className="aboutServeItemCard">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
