import styled from "styled-components";
import colors from "./colors";

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color === colors.white ? colors.black : colors.white};
  padding: 2rem 1rem;

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    padding: 5rem;
  }
`;

export const HangmanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 320px;
  scale: 0.5;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    scale: 0.7;
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    scale: 1;
  }
`;

export const LettersWraper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 40rem;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

export const SecretWordWrapper = styled.div`
  display: flex;
  gap: .5rem;
`;

export const EndGameWrapper = styled.div`
  color: ${(props) => props.theme.color === colors.white ? colors.black : colors.white};
  background-color: ${(props) => props.theme.color === colors.white ? colors.white : colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 25vw;
  height: 28rem;
  padding: 2rem 5rem;
  text-align: center;
  border: 2px solid black;
  border-radius: 1rem;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    height: 25rem;
    padding: 2rem 5rem;
  }

  /* MD */
  @media (min-width: ${breakpoints.md}) {
    height: 20rem;
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  /* MD */
  @media (min-width: ${breakpoints.md}) {
    flex-direction: column;
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    gap: 5rem;
  }
`;

export const SecretWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    justify-content: space-around;
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    gap: 4rem;
  }
`;

export default Wrapper;