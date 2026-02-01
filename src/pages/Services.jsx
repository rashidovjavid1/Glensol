import React from "react";
import ServicesPageBanner from "../assets/Images/servicesPageBanner.jpg";
import ActiveTabBar from "../components/ActiveTabBar";
import ServicesInfo from "../assets/icons/servicesIcon.svg";

const Services = () => {
  const yourOneStopShopService = [
    {
      pageTitle: "Warehouse and vendor managed inventory",
      description: [
        "Glensol provides comprehensive warehouse management and vendor-managed inventory (VMI) solutions, ensuring optimal stock availability and serviceability. Our specialized storage facilities cater to diverse needs, minimizing downtime and supporting efficient operations for big clients like BP and SOCAR.",
        "Through meticulous monitoring and the implementation of specialized storage practices and risk mitigation strategies, we address stock discrepancies, minimize downtime, and reduce transportation risks to ensure efficient, reliable operations for our clients.",
      ],
      bottomTitle: "Services:",
      servicesList: [
        "Chemical Storage – 350 sq.m",
        "Regular Condition Storage – 7,500+ sq.m., with expansion options and an unlimited racking system",
        "Specialized Condition Storage – 700 sq.m. dust-free environment with humidity and temperature control",
        "Open Space Storage – 70,000 sq.m. with expansion options",
        "VMI Solutions – management of spare parts and machines, including regular monitoring and timely dispatch",
        "Risk Mitigation Systems – emergency backup generator, UPS battery backup for air conditioners, and lightning protection",
        "Stock Reconciliation & Issue Resolution – expertise in reconciling discrepancies",
      ],
    },
  ];

  return (
    <div>
      <div className="servicesMainPage">
        <div className="servicesMainPageBanner">
          <img src={ServicesPageBanner} alt="ServicesPageBanner" />
          <div className="container">
            <div className="servicesPageTitle">
              <span>Services</span>
              <h1>Your One Stop Shop</h1>
            </div>
          </div>
        </div>
        <div className="servicesPageDetailMain">
          <div className="container">
            <div className="servicesDetailLeft">
              <div className="servicesPageDetailMainLeft">
                <ActiveTabBar />
              </div>
            </div>
            {yourOneStopShopService.map((item, index) => (
              <div key={index} className="servicesMainPageContent">
                <h2>{item.pageTitle}</h2>
                {item.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
                <h3>{item.bottomTitle}</h3>

                <ul>
                  {item.servicesList.map((service, i) => (
                    <li key={i}>
                      <div className="serviceIcon">
                        <img src={ServicesInfo} alt="#" />
                      </div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
