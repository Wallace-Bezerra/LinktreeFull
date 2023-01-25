import { MiniCardStyled } from "./MiniCard.styled";

export const MiniCard = ({ text, image }) => {
  return (
    <MiniCardStyled>
      <p>{text}</p>
      <img src={image} alt="minicard" />
    </MiniCardStyled>
  );
};
