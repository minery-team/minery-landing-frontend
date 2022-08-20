import React from "react";
import { TextProps } from "constants/text-style";
import styled from "styled-components";

export interface ITextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextProps {
  children?: React.ReactNode;
}
const Text = ({ children, ...rest }: ITextProps) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export const StyledText = styled.div<TextProps>`
  font-size: ${({ theme, size }) =>
    theme.fontSize[size] || theme.fontSize.base};
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.gray900};
  font-weight: ${({ theme, weight }) =>
    theme.fontWeight[weight] || theme.fontWeight.regular};
  line-height: ${({ lineHeight }) => lineHeight};
`;

export default Text;
