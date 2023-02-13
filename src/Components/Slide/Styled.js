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
      width: 25px;
      height: 18.69px;
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
    border-radius: 21px 21px 0 0;
    cursor: pointer;
  }
  .content {
    text-align: left;
    padding-left: 18px;
    padding-top: 23px;
    padding-bottom: 18px;
    color: ${({ theme }) => theme.bg};

    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 10px;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 20px;
      opacity: 65%;
    }
    .follow {
      display: flex;
      align-items: center;
      gap: 20px;
      a:first-child {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        padding: 4px 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.follow};
      }
      svg {
        cursor: pointer;
        path {
          fill: ${({ theme }) => theme.bg};
        }
      }
    }
  }

  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    background-color: ${({ theme }) => theme.auxiliar};
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #ffffff;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    width: fit-content;
    height: 20px;
    top: -50px;
    right: 20px;
    left: initial;
  }
`;
