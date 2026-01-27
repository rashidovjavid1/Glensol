import React from "react";
import { NavLink } from "react-router-dom";

import MapImage from "../assets/Images/map.png";

import FormCard from "../components/FormCard";

import PhoneLogo from "../assets/icons/phone.svg";
import EmailLogo from "../assets/icons/email.svg";
import LocationLogo from "../assets/icons/location.svg";
import LinkedinLogo from "../assets/icons/in.svg";
import FacebookLogo from "../assets/icons/fb.svg";
import ArrowRight from "../assets/icons/arrowRight.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="breadcrumb">
          <a href="#">Glensol</a>
          <a href="#">Contact</a>
        </div>
        <div className="contactPageMain">
          <div className="contactPageTop">
            <div className="container">
              <div className="pageTitle">
                <span>Contacts</span>
                <h1>Get in touch</h1>
                <p>
                  Have questions or want to learn more about our solutions?
                  We’re here to help—reach out, and we’ll get back to you
                  promptly.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="contactItems">
                <div className="contactItem">
                  <img src={PhoneLogo} alt="Phone" />
                  <div className="item">
                    <a href="callto:+99412 310 08 19">+99412 310 08 19</a>
                    <a href="mailto:+99412 310 08 20">+99412 310 08 20</a>
                  </div>
                </div>
                <div className="contactItem">
                  <img src={EmailLogo} alt="Email" />
                  <div className="item">
                    <a href="#">info@glensol.az</a>
                  </div>
                </div>
                <div className="contactItemAddress">
                  <img src={LocationLogo} alt="Location" />
                  <div className="item">
                    <a href="#">
                      Baku Bay Tower, 8 Noyabr avenue 113 Baku, Azerbaijan{" "}
                    </a>
                  </div>
                </div>
                <div className="contactItemSocial">
                  <p>Follow us</p>
                  <div className="item">
                    <a href="#">
                      <img src={FacebookLogo} alt="Facebook" />
                    </a>
                    <a href="#">
                      <img src={LinkedinLogo} alt="Linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactPageBottom">
              <div className="container">
                <div className="contactForm">
                  <div className="contactFormContainer">
                    <div className="contactFormLeft">
                      <div className="contactFormTitle">
                        <h3>Do you have a question?</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.1606860856432!2d49.87833578160276!3d40.38071071416792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4d849a6095%3A0x46c4ea80480a91b4!2sBaku%20Bay%20Tower!5e0!3m2!1sen!2saz!4v1757165327556!5m2!1sen!2saz"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
