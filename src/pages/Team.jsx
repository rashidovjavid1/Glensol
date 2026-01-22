import React from "react";

import TeamBanner from "../assets/Images/team.jpeg";
import Member1 from "../assets/Images/member1.webp";
import Member2 from "../assets/Images/member2.webp";
import Member3 from "../assets/Images/member3.webp";
import Member4 from "../assets/Images/member4.webp";
import Member5 from "../assets/Images/member5.webp";
import Member6 from "../assets/Images/member6.webp";
import Member7 from "../assets/Images/member7.webp";
import Member8 from "../assets/Images/member8.webp";
import Member9 from "../assets/Images/member9.webp";
import Member10 from "../assets/Images/member10.webp";
import Member11 from "../assets/Images/member11.webp";
import Member12 from "../assets/Images/member12.webp";

const Team = () => {
  const teamMembers = [
    {
      photo: Member1,
      name: "Tamerlan Aliyev",
      role: "General Director",
    },
    {
      photo: Member2,
      name: "Anar Orujov",
      role: "Deputy General Director",
    },
    {
      photo: Member3,
      name: "Valentina Baghirova",
      role: "Head of Finance & Accounting Department",
    },
    {
      photo: Member4,
      name: "Narmin Mammadova",
      role: "Head of HR & Administrative Department",
    },
    {
      photo: Member5,
      name: "Rashad Mahmudov",
      role: "Leadership Team / Senior Role",
    },
    {
      photo: Member6,
      name: "Rzagulu Aghaverdiyev",
      role: "Leadership Team / Senior Role",
    },
    {
      photo: Member7,
      name: "Huseyn Aliyev",
      role: "Leadership Team / Senior Role",
    },
    {
      photo: Member8,
      name: "Warren Dowse",
      role: "Leadership Team / Senior Role",
    },
    {
      photo: Member9,
      name: "Additional Member 9",
      role: "Team Member",
    },
    {
      photo: Member10,
      name: "Additional Member 10",
      role: "Team Member",
    },
    {
      photo: Member11,
      name: "Additional Member 11",
      role: "Team Member",
    },
    {
      photo: Member12,
      name: "Additional Member 12",
      role: "Team Member",
    },
  ];

  return (
    <div className="teamPage">
      <div className="teamBanner">
        <div className="bannerImg">
          <img src={TeamBanner} alt="Team Banner" />
        </div>

        <div className="container">
          <div className="topTitle">
            <span>Team</span>
            <h1>Leadership team</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pageMain">
          <div className="memberCards">
            {teamMembers.map((item, index) => (
              <div key={index} className="memberCard">
                <div className="memberImage">
                  <img src={item.photo} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
