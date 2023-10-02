import styled from "styled-components";

export const LetterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 2px solid black;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 300;
  width: 4rem;
  height: 4rem;

  &:disabled {
    border-color: lightgray;
  }
`;