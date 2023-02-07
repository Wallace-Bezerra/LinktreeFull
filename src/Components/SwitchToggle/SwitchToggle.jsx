import { useState } from "react"
import { StyledContainer, StyledToggle } from "./Styles.js"

export const SwitchToggle = ({ toggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    toggle();
    setIsChecked(prev => !prev);
  }
  console.log(isChecked)
  return (
    <StyledContainer onClick={toggleSwitch}>
      <StyledToggle isChecked={isChecked} />
    </StyledContainer>
  )
}
