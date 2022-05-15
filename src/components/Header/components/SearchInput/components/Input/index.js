import styled from "styled-components";

import { colors } from "../../../../../../styles/colors";

export default styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.gris};
  color: ${colors.black};
  border-radius: 8px;
  padding: 0.5em 0.6em;
  border: none;
  position: relative;

  &::placeholder {
    color: ${colors.black};
    font-size: 0.8125rem;
    font-weight: 700;
  }
`;
