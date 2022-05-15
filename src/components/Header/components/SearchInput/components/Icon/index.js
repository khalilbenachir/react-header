import styled from "styled-components";

export default styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  & svg {
    font-size: 1rem;
    cursor: pointer;
  }
`;
