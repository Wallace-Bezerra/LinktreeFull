import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "./Styled";
// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

export default function Slide() {
  return (
    <Container>
      <h2>Links</h2>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1.5}
        width={440}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">
          <img src="/card1.png" alt="" />
          <div className="content">
            <h3>Modelo internacional</h3>
            <p>Musa Fitness</p>
            <a href="#">Adquirir</a>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <img src="/card2.png" alt="" />
          <div className="content">
            <h3>Modelo internacional</h3>
            <p>Musa Fitness</p>
            <a href="#">Adquirir</a>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <img src="/card3.png" alt="" />
          <div className="content">
            <h3>Modelo internacional</h3>
            <p>Musa Fitness</p>
            <a href="#">Adquirir</a>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide> */}
      </Swiper>
    </Container>
  );
}
