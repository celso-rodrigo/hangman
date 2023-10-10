import styled from "styled-components";
import colors from "./colors";
import { breakpoints } from "./WrapperStyles";

export const LetterButton = styled.button`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color === colors.white ? colors.white : colors.black};
  justify-content: center;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.color === colors.white ? colors.white : colors.black};
  border-radius: 5%;
  background-color: ${(props) => props.theme.color === colors.white ? colors.black : colors.white};
  font-size: 2rem;
  font-weight: 300;
  width: 4rem;
  height: 4rem;

  &:disabled {
    opacity: 0.3;
  }
`;

export const ReplayBtn = styled.button`
  background-color: transparent;
  font-size: 2em;
  padding: .5rem 1rem;
  color: ${(props) => props.theme.color === colors.white ? colors.black : colors.white};
  border: 2px solid ${(props) => props.theme.color === colors.white ? colors.black : colors.white};
  border-radius: 1rem;
  margin-top: auto;
`;

export const DarkModeBtn = styled.button`
  margin: 0 auto 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.color === colors.white ? colors.white : colors.black};
  border-radius: 50%;
  background-color: transparent;
  width: 50px;
  height: 50px;

  /* md */
  @media (min-width: ${breakpoints.md}) {
    position: absolute;
    right: 5rem;
    top: 5rem;
  }
`;