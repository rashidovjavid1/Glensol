import React from "react";

import Bottomimg from "../assets/Images/bottom.webp";

const Bottom = () => {
  return (
    <section className="bottomSection">
      <div className="bottomMain">
        <div className="bottomImage">
          <img src={Bottomimg} alt="Pupil" />
        </div>
        <div className="bottomRight">
          <h3>Together, we make it happen</h3>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
