import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Slider1 from "../assets/slider1.jpeg";
import Slider2 from "../assets/slider2.jpeg";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={Slider1} alt="slider 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Slider2} alt="slider 2" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
