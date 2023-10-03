import { ThemeProvider } from "styled-components";
import Hangman from "./Components/Hangman";
import LetterBtn from "./Components/Letter"
import Wrapper, { LettersWraper, SecretWordWrapper } from "./Styles/WrapperStyles";
import nounList from "./data/noounList";
import { useEffect, useState } from "react";
import SecretWordLetter from "./Components/SecretWordLetter";

function App() {
  const [secretWord, setSecretWord] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([])

  // Get a random noun for the game
  function getRandomNoun():string {
    const index = Math.floor(Math.random() * nounList.length);
    return nounList[index];
  }

  // Update player choosed letters
  function handleGuesses(guess: string):void {
    setGuesses((prev) => [...prev, guess.toLowerCase()])
  }

  // Create a SecretWordLetter for each letter of the secretWord
  function createSecreteLetters(): JSX.Element[] {    
    const word = []
    for (let index = 0; index < secretWord.length; index++) {
      const letter = secretWord[index]
      const letterComponent = (
        <SecretWordLetter
          letter={letter}
          hidden={!guesses.includes(letter)}
          capitalized={index === 0}
          key={`letter${index + 1}`}
        />
      )
      word.push(letterComponent)
    }

    return word
  }

  // Create a LetterButton for each letter on the alphabet
  function createLetterButtons(): JSX.Element[] {
  const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  const buttons = []

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    const button = (
      <LetterBtn
        key={letter}
        letter={letter}
        handleGuesses={handleGuesses}
      />
    );

    buttons.push(button)
  }

    return buttons
  }

  const letterButtons = createLetterButtons()
  const secretWordLetters = createSecreteLetters()

  useEffect(() => {
    setSecretWord(getRandomNoun())
  }, [])

  return (
    <ThemeProvider theme={{color: 'black'}}>
      <Wrapper>
        <Hangman />

        <LettersWraper>
          {letterButtons}
        </LettersWraper>

        <SecretWordWrapper>
          {secretWordLetters}
        </SecretWordWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App
