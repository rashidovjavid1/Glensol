import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slider1 from "../assets/slider1.jpeg";
import Slider2 from "../assets/slider2.jpeg";

export default function HeroSwiper() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="hero-swiper"
      style={{ backgroundColor: "transparent" }}
    >
      <SwiperSlide>
        <img src={Slider1} alt="Industrial Services" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider2} alt="Turbomachinery" />
      </SwiperSlide>
    </Swiper>
  );
}
