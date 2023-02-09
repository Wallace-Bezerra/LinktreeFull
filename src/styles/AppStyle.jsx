import styled from "styled-components";

export const AppStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 655px;
  position: relative;
  margin-top: 100px;
  margin-bottom: 130px;
  .profile {
    display: grid;
    justify-content: space-between;
    .profileInfo {
      max-width: 333px;
      width: 100%;
      .text {
        margin-bottom: 45px;
        h1 {
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
          color: white;
          margin-bottom: 7px;
        }
        p {
          max-width: 226px;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          /* color: #fee1e1; */
          color: ${({ theme }) => theme.textColor};
        }
      }
    }
    .miniCards {
      display: flex;
      flex-direction: column;
      gap: 23px;
    }
    .profileImage {
      grid-row: 1/3;
      grid-column: 2;
      justify-self: end;
      img {
        border: 6px solid ${({ theme }) => theme.textColor};
        border-radius: 30px;
        max-width: 240px;
        width: 100%;
      }
      p {
        margin-top: 18px;
        max-width: 226px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
  @media (max-width: 700px) {
    max-width: 680px;
    padding-left: 30px;
    .profile {
      .profileImage {
        grid-row: 2/3;
        grid-column: 1;
        justify-self: start;
        margin-bottom: 40px;
      }
    }
  }
`;
