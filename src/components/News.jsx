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
        <div className="newsMain">
          <div className="newsTop">
            <span>Media</span>
            <div className="sectionTitle">
              <h3>Latest news</h3>
              <a href="#" className="learnMoreButton">
                Learn more
              </a>
            </div>
          </div>
          <div className="newsCards">
            {/* <div className="newsCards">
                <div className="newsCardsTop">
                  <div className="newsCardImage">
                    <div className="newsCardBottom">
                      {
                        newsList.map((item,index) =>(
                          
                        ) )
                      }
                    </div>
                  </div>
                </div>
              </div> */}
            {newsList.map((item, index) => {
              console.log(item);
              return (
                <div className="newsCard" key={index}>
                  <p>{item?.title}</p>
                </div>
              );
            })}
            {/* {newsList.map((item, index) => (
                <div className="newsCard" key={index}>
                  <div className="newsCardImage">
                    <img src={item.image} alt="#" />
                  </div>

                  <div className="newsCardContent">
                    <span>{item.date}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
