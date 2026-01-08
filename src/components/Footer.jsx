import React from "react";

const Footer = () => {
  const footerItems = [
    "Who we are",
    "What we do",
    "Our projects",
    "Newsroom",
    "Contact us",
  ];
  return (
    <footer>
      <div className="footerTop">
        <div className="container">
          <div className="footerTopMain">
            <div className="footerLogo"></div>
            <nav>
              <ul>
                {footerItems.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="footerBottomMain">
            <div className="copyRight">
              2026
              <span>GLENSOL</span>
              All rights reserved.
            </div>
            <div className="bottomLinks">
              <a href="#">Privacy policy</a>
              <a href="#">User agreement</a>
            </div>
            <div className="footerRight">
              <div className="footerSocials"></div>
              <div className="footerLanguageChanger">
                <a href="#">AZ</a>
                <a href="#">EN</a>
              </div>
              <button>TOP</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
