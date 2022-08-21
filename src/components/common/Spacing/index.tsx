import React from "react";
import styled from "styled-components";

interface SpaceProps {
  height?: number;
}
const Spacing = ({ height }: SpaceProps) => {
  return <StyledSpacing height={height} />;
};

export const StyledSpacing = styled.div<SpaceProps>`
  margin-bottom: ${({ height }) => height}px;
`;

export default Spacing;