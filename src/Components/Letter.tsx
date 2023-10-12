import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { LetterButton } from "../Styles/ButtonStyles";
import gameState from "../enums/gameState";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  letter: string;
  handleGuesses: (guess: string) => void;
  currGameState: gameState;
  isDisabled: boolean
}

function Letter({letter, handleGuesses, currGameState, isDisabled}: IProps) {
  const [disabled, setDisabled] = useState<boolean>(isDisabled)

  function handleClick(): void {
    if (currGameState === gameState.inGame) handleGuesses(letter)
  }

  // Enable all buttons every time the curr game state goes back to the in game value
  useEffect(() => {
    if (currGameState === gameState.inGame) setDisabled(false)
  }, [currGameState])

  // Update the button after guesses
  useEffect(() => {
    if (isDisabled) setDisabled(true)
  }, [isDisabled])

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