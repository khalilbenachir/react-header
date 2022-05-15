import styled from "styled-components";

import { colors } from "../../../../../../styles/colors";

export default styled.a`
  grid-column: 1/ 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  background-color: ${colors.main};
  color: ${colors.white};
  padding: 10px 20px;
`;
