import { HangmanBase, HangmanBody, HangmanHead, HangmanLeftArm, HangmanLeftLeg, HangmanRope, HangmanPilar, HangmanRightArm, HangmanRightLeg, HangmanTop } from "../Styles/HangmanStyles"
import { HangmanWrapper } from "../Styles/WrapperStyles";

interface IProps {
  playerLives: number
}

function Hangman({playerLives}: IProps) {
  const MAX_LIVES = 6
  const mistakes = MAX_LIVES - playerLives

  const bodyparts = [
    <HangmanHead key="HangmanHead" />,
    <HangmanBody key="HangmanBody" />,
    <HangmanLeftLeg key="HangmanLeftLeg" />,
    <HangmanRightLeg key="HangmanRightLeg" />,
    <HangmanLeftArm key="HangmanLeftArm" />,
    <HangmanRightArm key="HangmanRightArm" />,
  ]

  const bodypartsToDisplay = bodyparts.slice(0, mistakes)

  return (
    <HangmanWrapper>
      <HangmanTop />
      <HangmanRope />

      {bodypartsToDisplay.map((bodyMember) => (bodyMember))}

      <HangmanPilar />
      <HangmanBase />
    </HangmanWrapper>
  )
}

export default Hangman;