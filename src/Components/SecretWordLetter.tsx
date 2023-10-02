import { SecretText } from "../Styles/TextStyles";

interface IProps {
  letter: string;
  hidden: boolean;
}

function SecretWordLetter({letter, hidden} : IProps) {
  return (
      <SecretText>{hidden ? "" : letter}</SecretText>
  )
}

export default SecretWordLetter