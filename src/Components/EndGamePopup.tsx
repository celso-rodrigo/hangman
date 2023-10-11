import { ReplayBtn } from "../Styles/ButtonStyles"
import Text, { TitleOne } from "../Styles/TextStyles"
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
      <TitleOne>{endGameMessage}</TitleOne>
      <Text>The secret word was:</Text>
      <Text>{secretWord.toUpperCase()}</Text>
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