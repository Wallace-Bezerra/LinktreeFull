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
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                width={265}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
                <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
                <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
                <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
            </Swiper>
        </Container>
    );
}
