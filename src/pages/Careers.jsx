import React from "react";
import FormCard from "../components/FormCard";

import CareersImage from "../assets/Images/careers.png";
import BottomCareers from "../assets/Images/bottomCareers.png";
import OfficeImage from "../assets/Images/office.jpg";

import ArrowRight from "../assets/icons/arrowRight.svg";
import DownloadIcon from "../assets/icons/Downlaod.svg";

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
          <FormCard />
        </section>
      </div>
    </div>
  );
};

export default Careers;
