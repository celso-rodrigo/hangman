import styled from "styled-components";

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

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