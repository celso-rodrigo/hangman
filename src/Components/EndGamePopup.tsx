import { ReplayBtn } from "../Styles/ButtonStyles"
import { EndGameWrapper } from "../Styles/WrapperStyles"
import gameState from "../enums/gameState"

interface IProps {
  gameResult: gameState
  restartGame: () => void
  secretWord: string
}

function EndGamePopup({gameResult, secretWord, restartGame}: IProps) {
  const endGameMessage = gameResult === gameState.gameLost ? "Game Over" : "Congrats!"

  return (
    <EndGameWrapper>
      <h1>{endGameMessage}</h1>
      <h2>The secret word was</h2>
      <h2>{secretWord.toUpperCase()}</h2>
      <ReplayBtn 
        type="button"
        value=""
        onClick={restartGame}
      >
        Play Again
      </ReplayBtn>
    </EndGameWrapper>
  )
}

export default EndGamePopup