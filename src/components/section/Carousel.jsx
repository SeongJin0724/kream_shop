import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import slide1 from "../../assets/img/slide_img1.webp";
import slide2 from "../../assets/img/slide_img2.webp";
import slide3 from "../../assets/img/slide_img3.webp";
import slide4 from "../../assets/img/slide_img4.webp";
import slide5 from "../../assets/img/slide_img5.webp";

export default function Carousel() {
  return (
    <Swiper
      className="mySwiper carousel_wrap"
      autoplay={{
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img src={slide1} alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="slide5" />
      </SwiperSlide>
    </Swiper>
  );
}
