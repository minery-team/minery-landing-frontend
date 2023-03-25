import React from "react";
import styled from "styled-components";
import media from "@/styles/media";
import { TextProps } from "@/utils/constants/text-style";

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
  // min-width: fit-content;
  overflow: hidden;
  word-break: break-word;

  // ${media.mobile} {
  //   font-size: ${({ theme }) => theme.fontSize.sm};
  //   word-break: break-all;
  //   line-height: 23px;
  // }
`;

export default Text;
