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
    <div className="contactPage">
      <div className="container">
        <div className="breadcrumb">
          <NavLink to="/">Glensol</NavLink> /{" "}
          <NavLink to="/contact">Əlaqə</NavLink>
        </div>
      </div>

      <div className="contactPageMain">
        <div className="contactPageTop">
          <div className="container">
            <div className="pageTitle">
              <span>Əlaqə</span>
              <h1>Bizimlə əlaqə</h1>
              <p>
                Xidmətlərimiz barədə daha ətraflı öyrənmək və ya sual vermək
                istəyirsiniz? Bizimlə əlaqə saxlayın, qısa zamanda sizə cavab
                verəcəyik.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="contactItem">
              <img src={PhoneLogo} alt="Phone" />
              <a href="tel:+994123100819">+99412 310 08 19</a>
              <a href="mailto:+994123100820">+99412 310 08 20</a>
            </div>

            <div className="contactItem">
              <img src={EmailLogo} alt="Email" />
              <a href="mailto:info@glensol.az">info@glensol.az</a>
            </div>

            <div className="contactAddress">
              <img src={LocationLogo} alt="Location" />
              <a
                href="https://www.google.com/maps?q=40.38071071416792,49.87833578160276"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baku Bay Tower, 8 Noyabr avenue 113, Baku, Azerbaijan
              </a>
            </div>

            <div className="contactItemSocials">
              <p>Bizi izləyin</p>
              <div className="item">
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

      <div className="contactPageBottom">
        <div className="container">
          <div className="contactForm">
            <div className="contactFormContainer">
              <div className="contactFormLeft">
                <div className="contactFormTitle">
                  <h3>Sualınız var?</h3>
                </div>

                <form>
                  <div className="formInputs">
                    <div className="customInputContainer">
                      <label htmlFor="fullname">Ad Soyad</label>
                      <input
                        id="fullname"
                        className="customInput"
                        name="fullName"
                        type="text"
                      />
                    </div>

                    <div className="customInputContainer">
                      <label htmlFor="email">E-poçt</label>
                      <input
                        id="email"
                        className="customInput"
                        name="email"
                        type="email"
                      />
                    </div>

                    <div className="customInputContainer mobile">
                      <label htmlFor="mobileNumber">Mobil nömrə</label>
                      <div className="mobileInput">
                        <input
                          id="mobileNumber"
                          autoComplete="tel"
                          placeholder="Enter phone number"
                          className="phoneInput"
                          type="tel"
                          defaultValue="+994"
                        />
                      </div>
                    </div>

                    <div className="customInputContainer">
                      <label htmlFor="message">Mesajınız</label>
                      <textarea
                        id="message"
                        className="customInput"
                        name="message"
                      ></textarea>
                    </div>
                  </div>

                  <div className="formButton">
                    <button className="button-submit" type="submit">
                      Göndər
                      <img src={ArrowRight} alt="Arrow Right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
