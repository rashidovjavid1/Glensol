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
                      <form>
                        <div className="inputContainer">
                          <label for="fullName">Full name</label>
                          <input className="customInput" name="fullName" />
                        </div>
                        <div className="inputContainer">
                          <label for="email">Email</label>
                          <input className="customInput" name="email" />
                        </div>
                        <div className="inputContainerMobile">
                          <label for="number">Mobile number</label>
                          <input className="customInput" name="number" />
                          <div className="items">
                            <div className="phoneCountry">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M0 5.66699H24V12.3337H0V5.66699Z"
                                  fill="#E00034"
                                />
                                <path
                                  d="M21.3333 0.333008H2.66667C1.95942 0.333008 1.28115 0.613959 0.781049 1.11406C0.280952 1.61415 0 2.29243 0 2.99967L0 5.66634H24V2.99967C24 2.29243 23.719 1.61415 23.219 1.11406C22.7189 0.613959 22.0406 0.333008 21.3333 0.333008Z"
                                  fill="#0098C3"
                                />
                                <path
                                  d="M11.8972 11.2222C11.5269 11.2222 11.1625 11.1297 10.8371 10.9531C10.5117 10.7764 10.2355 10.5213 10.0338 10.2108C9.83205 9.90031 9.71109 9.54433 9.68192 9.17521C9.65275 8.80609 9.71629 8.43553 9.86675 8.09721C10.0172 7.75889 10.2498 7.46353 10.5435 7.23798C10.8371 7.01243 11.1825 6.86384 11.5482 6.80571C11.9139 6.74758 12.2883 6.78175 12.6374 6.90513C12.9865 7.02851 13.2993 7.23717 13.5472 7.51216C13.2282 7.03803 12.7654 6.67891 12.2269 6.4877C11.6884 6.2965 11.1028 6.28332 10.5562 6.45012C10.0097 6.61692 9.53119 6.95487 9.19123 7.41417C8.85127 7.87347 8.66784 8.42982 8.66797 9.00125C8.6681 9.57268 8.85178 10.1289 9.19194 10.5881C9.53211 11.0472 10.0108 11.385 10.5574 11.5515C11.104 11.7181 11.6897 11.7046 12.2281 11.5132C12.7665 11.3218 13.2291 10.9624 13.5479 10.4882C13.3397 10.7195 13.0851 10.9045 12.8007 11.0309C12.5163 11.1574 12.2085 11.2226 11.8972 11.2222Z"
                                  fill="white"
                                />
                                <path
                                  d="M15.7797 8.99855L14.9824 8.71589L15.3451 7.95189L14.5811 8.31522L14.2971 7.51855L14.0144 8.31589L14.0124 8.31455L13.2497 7.95322L13.6137 8.71722L12.8164 9.00122L13.6137 9.28389L13.2511 10.0479L14.0117 9.68589L14.0151 9.68455L14.2991 10.4812L14.5817 9.68389L15.3464 10.0466L14.9824 9.28255L15.7797 8.99855Z"
                                  fill="white"
                                />
                                <path
                                  d="M2.66667 17.6663H21.3333C22.0406 17.6663 22.7189 17.3854 23.219 16.8853C23.719 16.3852 24 15.7069 24 14.9997V12.333H0V14.9997C0 15.7069 0.280952 16.3852 0.781049 16.8853C1.28115 17.3854 1.95942 17.6663 2.66667 17.6663Z"
                                  fill="#00AE65"
                                />
                              </svg>
                            </div>
                            <span>+994</span>
                            <div className="dropDownIcon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="5"
                                viewBox="0 0 12 5"
                                fill="none"
                              >
                                <path
                                  d="M12 0H0.705882H0L6 5L12 0Z"
                                  fill="#3E4847"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="inputContainer">
                          <label for="message">Message</label>
                          <textarea
                            className="customInput"
                            name="message"
                          ></textarea>
                        </div>
                        <div className="formButtons">
                          <button type="submit" className="submitButton">
                            Send to us
                            <div className="arrowIcon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="7"
                                viewBox="0 0 14 7"
                                fill="none"
                              >
                                <path
                                  d="M13.8396 3.00352C13.8394 3.00335 13.8398 3.00368 13.8396 3.00352L10.9816 0.159248C10.7675 -0.0537869 10.4213 -0.0529942 10.2082 0.161107C9.9951 0.375182 9.99592 0.721436 10.21 0.934498L12.1285 2.84375H0.546875C0.244836 2.84375 0 3.08858 0 3.39062C0 3.69266 0.244836 3.9375 0.546875 3.9375H12.1285L10.21 5.84675C9.99594 6.05981 9.99512 6.40607 10.2082 6.62014C10.4213 6.83427 10.7676 6.83501 10.9816 6.622L13.8391 3.77825C13.8389 3.77841 13.8393 3.77808 13.8391 3.77825C14.0533 3.56448 14.0531 3.21658 13.8396 3.00352Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="contactMap">
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
    </div>
  );
};

export default Contact;
