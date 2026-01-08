import React, { useState } from "react";
import Arrow from "../assets/icons/arrowright.svg";

const OurProjects = () => {
  const filters = ["All", "International", "Azerbaijan"];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="ourProjectsSection">
      <div className="container">
        <div className="ourProjectsMain">
          <div className="ourProjectsTop">
            <span>Our projects</span>
            <div className="ourProjectsTitle">
              <h3>What we deliver</h3>
              <a href="#">
                What we deliver <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          </div>

          <div className="projectsFilter">
            {filters.map((item) => (
              <a
                key={item}
                className={activeFilter === item ? "active" : ""}
                onClick={() => setActiveFilter(item)}
              >
                <li>{item}</li>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
