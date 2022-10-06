import React from "react";
import media from "styles/media";
import styled from "styled-components";

interface SpaceProps {
  height?: number;
}
const Spacing = ({ height }: SpaceProps) => {
  return <StyledSpacing height={height} />;
};

export const StyledSpacing = styled.div<SpaceProps>`
  margin-bottom: ${({ height }) => height + 20}px;
  ${media.mobile} {
    margin-bottom: ${({ height }) => height}px;
  }
`;

export default Spacing;
