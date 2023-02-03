import styled from "styled-components";

export const AppStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 655px;
  height: 800px;
  margin-top: 100px;
  margin-bottom: 130px;
  .profile {
    display: flex;
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
          color: #fee1e1;
        }
      }
      .miniCards {
        display: flex;
        flex-direction: column;
        gap: 23px;
      }
    }
    .profileImage {
      img {
        border: 6px solid #ffeaea;
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
        color: #fee1e1;
      }
    }
  }
`;
