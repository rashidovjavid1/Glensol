import React, { useState } from "react";

import Project1 from "../assets/Images/Project1.webp";
import Project2 from "../assets/Images/Project2.webp";
import Project3 from "../assets/Images/Project3.webp";
import Project4 from "../assets/Images/Project4.webp";
import Project5 from "../assets/Images/Project5.webp";
import Project6 from "../assets/Images/Project6.webp";

const Projects = () => {
  const filterItems = ["All", "International", "Azerbaijan"];
  const cardItems = [
    {
      label: "SCPx Pipeline & Gas Stations",
      image: Project1,
      type: "International",
    },
    {
      label: "Beineu-Bozoy-Shymkent Gas Pipeline",
      image: Project2,
      type: "International",
    },
    {
      label: "Central Asia–China Gas Pipeline",
      image: Project3,
      type: "International",
    },
    {
      label: "Hajigabul Gas Compressor Station Modernization",
      image: Project4,
      type: "Azerbaijan",
    },
    {
      label: "Gas Turbine Cogeneration Power Plant Expansion Project",
      image: Project5,
      type: "Azerbaijan",
    },
    {
      label:
        "Gas Conditioning Units for Galmaz Underground Gas Storage Facilities",
      image: Project6,
      type: "Azerbaijan",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="projectsPage">
      <div className="container">
        <div className="breadcrumb">
          <a href="#">Glensol</a>
          <a href="#">Our Projects</a>
        </div>
        <div className="projectsMain">
          <div className="projectsTitle">
            <span>Our Projects</span>
            <h3>Projects</h3>
          </div>
          <div className="filter">
            {filterItems.map((item, index) => (
              <ul key={index}>
                <li type="button">
                  <button type="button" onClick={() => setActiveFilter(item)}>
                    {item}
                  </button>
                </li>
              </ul>
            ))}
          </div>
          <div className="projectsCards">
            {cardItems
              .filter((item) =>
                activeFilter === "All" ? true : item.type === activeFilter,
              )
              .map((item, index) => (
                <div className="projectCard" key={index}>
                  <div className="projectImage">
                    <a href="#">
                      <img src={item.image} alt={item.label} />
                      <h3>{item.label}</h3>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
