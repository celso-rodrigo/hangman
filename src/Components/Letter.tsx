import { ButtonHTMLAttributes, useState } from "react";
import { LetterButton } from "../Styles/ButtonStyles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  letter: string;
  handleGuesses: (guess: string) => void;
}

function Letter({letter, handleGuesses}: IProps) {
  const [disabled, setDisabled] = useState<boolean>(false)

  function handleClick(): void {
    setDisabled(true)
    handleGuesses(letter)
  }

  return (
    <LetterButton
      disabled={disabled}
      onClick={handleClick}
    >
      {letter}
    </LetterButton>
  )
}

export default Letter