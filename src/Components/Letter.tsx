import { ButtonHTMLAttributes } from "react";
import { LetterButton } from "../Styles/ButtonStyles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  letter: string;
}

function Letter({letter, disabled, onClick}: IProps) {
  return (
    <LetterButton
      disabled={disabled}
      onClick={onClick}
    >
      {letter}
    </LetterButton>
  )
}

export default Letter