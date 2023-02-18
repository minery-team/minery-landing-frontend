import React from "react";
import styled from "styled-components";
import media from "@/styles/media";

interface SpaceProps {
  height?: number;
}
const Spacing = ({ height }: SpaceProps) => {
  return <StyledSpacing height={height} />;
};

const StyledSpacing = styled.div<SpaceProps>`
  margin-bottom: ${({ height }) => height}px;
`;
export default Spacing;
