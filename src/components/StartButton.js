import { StyledStartButton } from "./styles/StyledStartButton"

const StartButton = ({callback}) => {
  return (
    <StyledStartButton onClick={callback}>Começar</StyledStartButton>
  )
}
export default StartButton