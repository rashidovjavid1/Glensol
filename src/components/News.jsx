import React from "react";

import news1 from "../assets/images/image1.webp";
import news2 from "../assets/images/image2.webp";
import news3 from "../assets/images/image3.webp";

const News = () => {
  const newsList = [
    {
      date: "December 11, 2025",
      title: "Glensol Supports AICC Caspian 2025 as Gold Sponsor",
      image: news1,
    },
    {
      date: "January 16, 2025",
      title: "Glensol issues first corporate bonds",
      image: news2,
    },
    {
      date: "December 23, 2024",
      title:
        "Breaking barriers: Glensol takes on turbine inspection traditionally handled by manufacturers",
      image: news3,
    },
  ];
  return (
    <section className="newsSection">
      <div className="container">
        <div className="newsSectionMain">
          <div className="newsTop">
            <span>Media</span>
            <div className="title">
              <h3>Latest news</h3>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className="newsCard">
            {newsList.map((item, index) => (
              <div key={index} className="newsCardItem">
                <div className="newsCardTop">
                  <div className="newCardsImage">
                    <img src={item.image} alt="#" />
                  </div>
                </div>
                <div className="newCardsBottom">
                  <span className="newsDate">{item.date}</span>
                  <h4 className="newsTitle">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
