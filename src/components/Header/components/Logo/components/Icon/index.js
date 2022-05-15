import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  height: clamp(60px, 50px, 5rem);
  aspect-ratio: 1/ 1;
`;

const Icon = () => {
  return (
    <Svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 0L40.6066 19.3934L60 30L40.6066 40.6066L30 60L19.3934 40.6066L0 30L19.3934 19.3934L30 0Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
