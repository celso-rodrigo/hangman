import { HangmanBase, HangmanBody, HangmanHead, HangmanLeftArm, HangmanLeftLeg, HangmanRope, HangmanPilar, HangmanRightArm, HangmanRightLeg, HangmanTop } from "../Styles/HangmanStyles"
import { HangmanWrapper } from "../Styles/WrapperStyles";

function Hangman() {
  return (
    <HangmanWrapper>
      <HangmanHead />
      <HangmanBody />
      <HangmanLeftLeg />
      <HangmanRightLeg />
      <HangmanLeftArm />
      <HangmanRightArm />

      <HangmanRope />

      <HangmanTop />

      <HangmanPilar />

      <HangmanBase />
    </HangmanWrapper>
  )
}

export default Hangman;