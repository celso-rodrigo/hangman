import { ThemeProvider } from "styled-components";
import Hangman from "./Components/Hangman";
import LetterBtn from "./Components/Letter"
import Wrapper, { LettersWraper } from "./Styles/WrapperStyles";

function App() {

  // Create a LetterButton for each letter on the alphabet
  function createLetterButtons() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const buttons = [];

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    const button = (
      <LetterBtn
        key={letter}
        letter={letter}
        disabled={false}
        onClick={() => console.log("WIP")}
      />
    );

    buttons.push(button);
  }

    return buttons;
  }

  const letterButtons = createLetterButtons();

  return (
    <ThemeProvider theme={{color: 'black'}}>
      <Wrapper>
        <Hangman />
        <LettersWraper>
          {letterButtons}
        </LettersWraper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App
