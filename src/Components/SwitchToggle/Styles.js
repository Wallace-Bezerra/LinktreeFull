import styled from "styled-components";

export const StyledContainer = styled.div`
width: 49px;
height: 24px;
background: #FFFFFF;
border-radius: 14px;
/* position: relative; */
display: flex;
align-items: center;
position: absolute;
top: -70px;
right: 0px;
cursor: pointer;
`
export const StyledToggle = styled.span`
width: 21px;
height: 20px;
display: block;
background: ${({ theme }) => theme.bg};
border-radius: 14px;
position: absolute;
left: 2px;
transition: all .4s cubic-bezier(0.23, 1, 0.320, 1);
/* transform: translateX(24px) */
transform: translateX(${({ isChecked }) => isChecked ? "24px" : "0px"});
`