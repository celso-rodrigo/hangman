import styled from "styled-components";
import colors from "./colors";
import { breakpoints } from "./WrapperStyles";

export const SecretText = styled.p`
  color:  ${(props) => props.theme.color === colors.white ? colors.white : colors.black};
  border-bottom: 2px solid ${(props) => props.theme.color === colors.white ? colors.white : colors.black};
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  height: 4rem;
  width: 2rem;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    width: 3rem;
  }
`;