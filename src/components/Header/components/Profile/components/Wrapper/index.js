import styled from "styled-components";

import { colors } from "../../../../../../styles/colors";

export default styled.div`
  grid-column: 7/ -1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & svg {
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${colors.mainLight};
    }
  }
`;
