import React from "react";
import { NavLink } from "react-router-dom";

import PhoneLogo from "../assets/icons/phone.svg";
import EmailLogo from "../assets/icons/email.svg";
import LocationLogo from "../assets/icons/location.svg";
import LinkedinLogo from "../assets/icons/in.svg";
import FacebookLogo from "../assets/icons/fb.svg";
import ArrowRight from "../assets/icons/arrowright.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactBreadcrumb">
          <NavLink to="/">Glensol</NavLink>
          &nbsp; / &nbsp;
          <NavLink to="/contact">Əlaqə</NavLink>
        </div>
      </div>

      <div className="contactMain">
        <div className="contactTop">
          <div className="container">
            <div className="contactTitle">
              <span>Əlaqə</span>
              <h1>Bizimlə əlaqə</h1>
              <p>
                Xidmətlərimiz barədə daha ətraflı öyrənmək və ya sual vermək
                istəyirsiniz? Bizimlə əlaqə saxlayın.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="contactItem">
              <img src={PhoneLogo} alt="Phone" />
              <a href="tel:+994123100819">+99412 310 08 19</a>
              <a href="tel:+994123100820">+99412 310 08 20</a>
            </div>

            <div className="contactItem">
              <img src={EmailLogo} alt="Email" />
              <a href="mailto:info@glensol.az">info@glensol.az</a>
            </div>

            <div className="contactItem contactAddress">
              <img src={LocationLogo} alt="Location" />
              <a
                href="https://www.google.com/maps?q=40.38071071416792,49.87833578160276"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baku Bay Tower, 8 Noyabr avenue 113, Baku, Azerbaijan
              </a>
            </div>

            <div className="contactSocial">
              <p>Bizi izləyin</p>

              <div className="contactSocialIcons">
                <a
                  href="https://www.facebook.com/Global.Energy.Solutions.GLENSOL/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={FacebookLogo} alt="Facebook" />
                </a>

                <a
                  href="https://ru.linkedin.com/company/global-energy-solutions-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinLogo} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactBottom">
        <div className="container">
          <div className="contactForm">
            <div className="contactFormTitle">
              <h3>Sualınız var?</h3>
            </div>

            <form className="contactFields">
              <div className="contactField">
                <label htmlFor="fullname">Ad Soyad</label>
                <input id="fullname" className="contactInput" />
              </div>

              <div className="contactField">
                <label htmlFor="email">E-poçt</label>
                <input id="email" className="contactInput" />
              </div>

              <div className="contactField contactPhoneField">
                <label htmlFor="mobile">Mobil nömrə</label>
                <input
                  id="mobile"
                  className="contactPhoneInput"
                  defaultValue="+994"
                />
              </div>

              <div className="contactField">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" className="contactInput"></textarea>
              </div>

              <div className="contactActions">
                <button className="contactSubmit">
                  Göndər
                  <img src={ArrowRight} alt="Arrow" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
