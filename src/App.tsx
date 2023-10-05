import { ThemeProvider } from "styled-components";
import Hangman from "./Components/Hangman";
import LetterBtn from "./Components/Letter"
import Wrapper, { LettersWraper, SecretWordWrapper } from "./Styles/WrapperStyles";
import nounList from "./data/noounList";
import { useEffect, useState } from "react";
import SecretWordLetter from "./Components/SecretWordLetter";
import gameState from "./enums/gameState";

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const INITIAL_LIVES = 6;

function App() {
  const [secretWord, setSecretWord] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([])
  const [playerLives, setPlayerLives] = useState<number>(INITIAL_LIVES)
  const [currGameState, setCurrGameState] = useState<gameState>(gameState.loading)

  // Get a random noun for the game
  function getRandomNoun():string {
    const index = Math.floor(Math.random() * nounList.length);
    return nounList[index];
  }

  // Trigger game won when there's no correct guess left
  function handleCorrectGuess(guessArray: string[]):void {
    const correctGuesses = secretWord.split("")
    const gameWon = correctGuesses.every((letter) => guessArray.indexOf(letter) !== -1)
    if (gameWon) setCurrGameState(gameState.gameWon)
  }

  // Update player guesses and lives
  function handleGuesses(guess: string):void {
    const lowerCaseGuess = guess.toLowerCase()
    const updatedGuesses = [...guesses, lowerCaseGuess]
    setGuesses(updatedGuesses)
    
    const wrongGuess = secretWord.indexOf(lowerCaseGuess) === -1
    // if (wrongGuess) setPlayerLives((prev) => prev - 1)
    wrongGuess ? setPlayerLives((prev) => prev - 1) : handleCorrectGuess(updatedGuesses)
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
  const buttons = []

  for (let i = 0; i < ALPHABET.length; i++) {
    const letter = ALPHABET[i];
    const button = (
      <LetterBtn
        key={letter}
        currGameState={currGameState}
        letter={letter}
        handleGuesses={handleGuesses}
      />
    );

    buttons.push(button)
  }

    return buttons
  }

  useEffect(() => {
    const randomSecretWord = getRandomNoun()
    setSecretWord(randomSecretWord)
    setCurrGameState(gameState.inGame)
  }, [])

  useEffect(() => {
    if (playerLives <= 0) setCurrGameState(gameState.gameLost)
  }, [playerLives])

  const letterButtons = createLetterButtons()
  const secretWordLetters = createSecreteLetters()

  return (
    <ThemeProvider theme={{color: 'black'}}>
      <Wrapper>
        <Hangman playerLives={playerLives} />

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
