import Swiper from "./Swiper";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroBackground">
        <Swiper />
      </div>

      <div className="heroContainer">
        <div className="heroContent">
          <h1>Engineering Solutions</h1>
          <p>Oil & Gas • Energy • Infrastructure</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
