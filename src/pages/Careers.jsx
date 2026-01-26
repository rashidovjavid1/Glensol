import React from "react";

import CareersImage from "../assets/Images/careers.png";
import BottomCareers from "../assets/Images/bottomCareers.png";
import OfficeImage from "../assets/Images/office.jpg";

import ArrowRight from "../assets/icons/arrowRight.svg";

const Careers = () => {
  const openVacancies = [
    {
      role: "Sales Manager",
      date: "9 September 2025",
      employment: "Full-time/Part-time/Contract",
      location: "Baku, Azerbaijan",
    },
    {
      role: "Product Manager",
      date: "9 September 2025",
      employment: "Full-time/Part-time/Contract",
      location: "Baku, Azerbaijan",
    },
    {
      role: "Supply Chain Manager",
      date: "9 September 2025",
      employment: "Full-time/Part-time/Contract",
      location: "Baku, Azerbaijan",
    },
  ];
  return (
    <div className="careers">
      <div className="careersLayout">
        <section className="careersHero">
          <div className="careersHeroImage">
            <img src={CareersImage} alt="Career Banner Image" />
          </div>

          <div className="container">
            <div className="careersHeroContent">
              <span className="careersHeroLabel">Work with our company</span>
              <h1 className="careersHeroTitle">Careers</h1>
            </div>
          </div>
        </section>

        <section className="careersIntro">
          <div className="container">
            <span className="careersIntroLabel">Career</span>
            <h3 className="careersIntroTitle">Work with our company</h3>
          </div>
        </section>

        <section className="careersFeature">
          <div className="careersFeatureImage">
            <img src={BottomCareers} alt="Career" />
          </div>

          <div className="careersFeatureContent">
            <h3 className="careersFeatureTitle">
              Drive the Future of Energy Services with Us
            </h3>
            <p className="careersFeatureText">
              At Glensol, we believe our people are our most valuable asset.
            </p>
            <a href="#" className="careersFeatureLink">
              Why Join Glensol
              <img src={ArrowRight} alt="ArrowRight" />
            </a>
          </div>
        </section>

        <section className="careersPrograms">
          <div className="container">
            <div className="careersProgramsContent">
              <h3 className="careersProgramsTitle">
                Internships & Graduate Programs
              </h3>
              <p className="careersProgramsText">
                Glensol offers internship and graduate opportunities for
                students and young professionals seeking hands-on experience in
                the energy services sector. You’ll gain exposure to real-world
                projects, receive mentoring from industry experts, and build the
                foundation for a successful career.
              </p>
            </div>
          </div>
        </section>

        <section className="careersVacancies">
          <div className="container">
            <div className="careersVacanciesHeader">
              <h3 className="careersVacanciesTitle">Open Vacancies</h3>
            </div>

            <div className="careersVacanciesCard">
              <div className="container">
                {openVacancies.map((item, index) => (
                  <div key={index} className="vacanciesList">
                    <div className="vacanciesHeader">
                      <h4>{item.role}</h4>
                      <div className="careersVacanciesIcon">
                        <img src={ArrowRight} alt="Arrow" />
                      </div>
                    </div>

                    <div className="vacanciesMeta">
                      <div className="vacanciesMetaRow">
                        <span>Application Date:</span>
                        <p>{item.date}</p>
                      </div>

                      <div className="vacanciesMetaRow">
                        <span>Employment Type:</span>
                        <p>{item.employment}</p>
                      </div>

                      <div className="vacanciesMetaRow">
                        <span>Location:</span>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="formCard">
            <div className="formCardLeft">
              <div className="formTitle">
                <h3>Lets grow together</h3>
                <p>
                  Be part of a company where expertise meets purpose. Shape your
                  future with Glensol.
                </p>
              </div>

              <div className="formMain">
                <div className="formRow">
                  <span>Name and Surname</span>
                  <input type="text" placeholder="Exmp:Glensol" />
                </div>
                <div className="formRow">
                  <span>Email</span>
                  <input type="mail" placeholder="Exmp: info@Glensol.az" />
                </div>
                <div className="contactTelephone">
                  <div className="countryFlag">
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
                  <div className="arrowIconDown">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="5"
                        viewBox="0 0 12 5"
                        fill="none"
                      >
                        <path d="M12 0H0.705882H0L6 5L12 0Z" fill="#3E4847" />
                      </svg>
                    </a>
                  </div>
                  <input type="tel" placeholder="(55) 555-55-55" />
                </div>
                <div className="formRow">
                  <span>Your Message</span>
                  <input type="textarea" placeholder="Type here your message" />
                </div>
                <div className="bottomForm">
                  <button className="fileDownloadButton">File Download</button>
                  <button className="enterButton">
                    Enter{" "}
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
                  </button>
                </div>
              </div>
            </div>

            <div className="formCardRight">
              <div className="formImage">
                <img src={OfficeImage} alt="Office" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
