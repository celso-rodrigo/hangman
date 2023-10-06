import styled from "styled-components";

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HangmanWrapper = styled.div`
  position: relative;
  width: 320px;
  scale: 0.5;

    /* SM */
  @media (min-width: ${breakpoints.sm}) {
    scale: 0.75;
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    scale: 1;
  }
`;

export const LettersWraper = styled.div`
  display: flex;
  align-content: start;
  max-width: 40rem;
  flex-wrap: wrap;
  gap: 0.1rem;
`;

export const SecretWordWrapper = styled.div`
  display: flex;
  gap: .5rem;
`;

export const EndGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 25vw;
  height: 20rem;
  padding: 2rem;
  border: 2px solid black;
  border-radius: 1rem;
  background-color: white;
`;

export default Wrapper;