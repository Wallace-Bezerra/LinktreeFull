import styled from "styled-components";
export const Container = styled.div`
.swiper {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    overflow-x: clip;
    overflow-y: visible;
    /* height: 300px; */
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: #e1e1e1;
    height: 320px;
    border-radius:22px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-button-next{
    /* background-color:red; */
    width: 55px;
    height: 55px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    border: 4px solid #FFFFFF;
    position: absolute;
    top: 360px;
    left: 87px;
    &::after{
        content:"";
        width: 24.02px;
        height: 18.69px;
        /* background-color:blue; */
        display:flex;
        align-items:center;
        background-image: url("/arrowRight.svg");
        background-repeat: no-repeat;
    }
}


.swiper-button-prev{
    width: 55px;
    height: 55px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    border: 4px solid #FFFFFF;
    position: absolute;
    top: 359px;
    &::after{
        content:"";
        width: 24.02px;
        height: 18.69px;
        display:flex;
        align-items:center;
        background-image: url("/arrowLeft.svg");
        background-repeat: no-repeat;
    }
}
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper-pagination{
    top: -35px;
    left: 240px;
}
.swiper-pagination-bullet{
    width:13px;
    height:13px;
    background-color: #FEB3B3;
    opacity: 1;
}
.swiper-pagination-bullet-active{
    background-color:#FFFFFF;
}
`
