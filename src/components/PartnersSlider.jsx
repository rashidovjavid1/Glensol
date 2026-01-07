import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Partner1 from "../assets/images/partner1.png";
import Partner2 from "../assets/images/partner2.png";
import Partner3 from "../assets/images/partner3.jpeg";
import Partner4 from "../assets/images/partner4.png";
import Partner5 from "../assets/images/partner5.jpeg";
import Partner6 from "../assets/images/partner6.png";
import Partner7 from "../assets/images/partner7.png";
import Partner8 from "../assets/images/partner8.png";
import Partner9 from "../assets/images/partner9.png";
import Partner10 from "../assets/images/partner10.png";

const partners = [
  { image: Partner1 },
  { image: Partner2 },
  { image: Partner3 },
  { image: Partner4 },
  { image: Partner5 },
  { image: Partner6 },
  { image: Partner7 },
  { image: Partner8 },
  { image: Partner9 },
  { image: Partner10 },
];

const PartnersSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper slidesPerView={6} spaceBetween={40} loop className="partnersSwiper">
      {partners.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="partnerItem">
            <img src={item.image} alt="partner" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnersSlider;
