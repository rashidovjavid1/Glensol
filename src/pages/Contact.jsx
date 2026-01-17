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
        <div className="contact__breadcrumb">
          <NavLink to="/">Glensol</NavLink>
          &nbsp; / &nbsp;
          <NavLink to="/contact">Əlaqə</NavLink>
        </div>
      </div>

      <div className="contact__main">
        <div className="contact__top">
          <div className="container">
            <div className="contact__title">
              <span>Əlaqə</span>
              <h1>Bizimlə əlaqə</h1>
              <p>
                Xidmətlərimiz barədə daha ətraflı öyrənmək və ya sual vermək
                istəyirsiniz? Bizimlə əlaqə saxlayın.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="contact__item">
              <img src={PhoneLogo} alt="Phone" />
              <a href="tel:+994123100819">+99412 310 08 19</a>
              <a href="tel:+994123100820">+99412 310 08 20</a>
            </div>

            <div className="contact__item">
              <img src={EmailLogo} alt="Email" />
              <a href="mailto:info@glensol.az">info@glensol.az</a>
            </div>

            <div className="contact__item contact__item--address">
              <img src={LocationLogo} alt="Location" />
              <a
                href="https://www.google.com/maps?q=40.38071071416792,49.87833578160276"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baku Bay Tower, 8 Noyabr avenue 113, Baku, Azerbaijan
              </a>
            </div>

            <div className="contact__social">
              <p>Bizi izləyin</p>

              <div className="contact__social-icons">
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

      <div className="contact__bottom">
        <div className="container">
          <div className="contact__form">
            <div className="contact__form-title">
              <h3>Sualınız var?</h3>
            </div>

            <form className="contact__fields">
              <div className="contact__field">
                <label htmlFor="fullname">Ad Soyad</label>
                <input id="fullname" className="contact__input" />
              </div>

              <div className="contact__field">
                <label htmlFor="email">E-poçt</label>
                <input id="email" className="contact__input" />
              </div>

              <div className="contact__field contact__field--phone">
                <label htmlFor="mobile">Mobil nömrə</label>
                <input
                  id="mobile"
                  className="contact__phone-input"
                  defaultValue="+994"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" className="contact__input"></textarea>
              </div>

              <div className="contact__actions">
                <button className="contact__submit">
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
