import React from "react";
import Footer from "../components/Footer";

const Projects = () => {
  const filterItems = [
    { type: "All" },
    { type: "International" },
    { type: "Azerbaijan" },
  ];
  return (
    <div className="projectsPage">
      <div className="container">
        <div className="breadcrumb">
          <a href="#">Glensol</a> <a href="#">Our projects</a>
        </div>
        <div className="projectsMain">
          <div className="pageTitle">
            <span>Our projects</span>
            <h1>Projects</h1>
          </div>
          <div className="filter">
            <ul>
              {filterItems.map((item, index) => (
                <li key={index}>
                  <button className="filterItemActive">{item.type}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
