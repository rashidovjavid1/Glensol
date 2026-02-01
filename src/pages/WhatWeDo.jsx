import React from "react";
import ServicesPageBanner from "../assets/Images/servicesPageBanner.jpg";
import ActiveTabBar from "../components/ActiveTabBar";
const WhatWeDo = () => {
  const servicesListLeft = [
    { label: "Your One Stop Shop" },
    { label: "Turbomachinery maintenance" },
    { label: "Pump maintenance" },
    { label: "Value maintenance" },
    { label: "Electrical motors and generators maintenance" },
    { label: "Electrical equipment maintenance" },
    { label: "Static equipment maintenance" },
    { label: "Top Drive overhaul and maintenance" },
    { label: "Insturmentation and control system maintenance" },
    { label: "Asset management solution" },
    { label: "Traning services" },
    { label: "EPC" },
  ];

  const servicesDetailMainList = [
    {
      title: "Your One Stop Shop",
      description: [
        "Glensol provides comprehensive warehouse management and vendor-managed inventory (VMI) solutions, ensuring optimal stock availability and serviceability. Our specialized storage facilities cater to diverse needs, minimizing downtime and supporting efficient operations for big clients like BP and SOCAR. We manage 17,000+ line items with advanced risk mitigation and a focus on reliability.",
        "Through meticulous monitoring and the implementation of specialized storage practices and risk mitigation strategies, we address stock discrepancies, minimize downtime, and reduce transportation risks to ensure efficient, reliable operations for our clients.",
      ],
      servicesTitle: "Services",
      services: [
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
        <div className="servicesPagDetailMain">
          <div className="container">
            <div className="servicesDetailLeft">
              <ActiveTabBar />
            </div>
            <div className="servicesDetailContent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
