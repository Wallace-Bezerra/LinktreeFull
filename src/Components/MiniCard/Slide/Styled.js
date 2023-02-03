import styled from "styled-components";
export const Container = styled.div`
  margin-top: 80px;
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .swiper {
    width: 100%;
    height: 100%;
    overflow-x: clip;
    overflow-y: visible;
    /* height: 300px; */
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: #fff;
    height: 330px;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
  }
  .swiper-button-next {
    /* background-color:red; */
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 4px solid #ffffff;
    position: absolute;
    top: 380px;
    left: 87px;
    &::after {
      content: "";
      width: 24.02px;
      height: 18.69px;
      /* background-color:blue; */
      display: flex;
      align-items: center;
      background-image: url("/arrowRight.svg");
      background-repeat: no-repeat;
    }
  }

  .swiper-button-prev {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 4px solid #ffffff;
    position: absolute;
    top: 380px;
    &::after {
      content: "";
      width: 24.02px;
      height: 18.69px;
      display: flex;
      align-items: center;
      background-image: url("/arrowLeft.svg");
      background-repeat: no-repeat;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: bottom;
    border-radius: 24px 24px 0 0;
  }
  .content {
    text-align: left;
    padding-left: 18px;
    padding-top: 23px;
    padding-bottom: 18px;
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #ff0054;
      margin-bottom: 7px;
    }
    p {
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: #ff0054;
      margin-bottom: 30px;
    }
    a {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #ff0054;
    }
  }

  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    background-color: #feb3b3;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #ffffff;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    width: 100%;
    height: 20px;
    top: -50px;
    left: 260px;
  }
`;
