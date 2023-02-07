import styled from "styled-components";

export const MiniCardStyled = styled.div`
  /* background: ${(props) => props.isOpen ? "#222" : "#fff"}; */
  background-color: #fff;
  border-radius: 5px;
  max-width: 333px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  padding-left: 18px;
  cursor: pointer;
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.bg};
  }
  img {
    width: 52px;
    height: 57px;
  }
`;
