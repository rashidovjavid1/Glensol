import React from "react";
import SearchIcon from "../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="searchPage">
      <div className="container">
        <div className="searchMain">
          <div className="searchTop">
            <div className="searchContainer">
              <img src={SearchIcon} alt="Search Icon" />
              <input placeholder="Search" type="text" />
            </div>
            <p className="searchDescription">Type Keyword to search</p>
          </div>
          <div className="searchItems"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
