import { ButtonHTMLAttributes, useState } from "react";
import { LetterButton } from "../Styles/ButtonStyles";
import gameState from "../enums/gameState";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  letter: string;
  handleGuesses: (guess: string) => void;
  currGameState: gameState;
}

function Letter({letter, handleGuesses, currGameState}: IProps) {
  const [disabled, setDisabled] = useState<boolean>(false)

  function handleClick(): void {
    if (currGameState === gameState.inGame) {
      setDisabled(true)
      handleGuesses(letter)
    }
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