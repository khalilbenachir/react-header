import styled from "styled-components";

import { colors } from "../../../../../../styles/colors";

export default styled.a`
  color: ${colors.black};
  font-size: 0.875rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    -webkit-text-stroke: 1px ${colors.black};
  }
`;
