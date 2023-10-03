import { SecretText } from "../Styles/TextStyles";

interface IProps {
  letter: string;
  hidden: boolean;
  capitalized: boolean;
}

function SecretWordLetter({letter, hidden, capitalized} : IProps) {
  const formatedLetter = capitalized ? letter.toUpperCase() : letter 

  return (
      <SecretText>{hidden ? "" : formatedLetter}</SecretText>
  )
}

export default SecretWordLetter