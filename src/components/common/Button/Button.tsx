import React from "react";
import styled from "styled-components";
import media from "@/styles/media";

export interface IButtonProps {
  width?: number;
  height?: number;
  borderRadius?: number;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, className, onClick, ...rest }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<IButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  font-size: ${({ theme }) => theme.fontSize.mmallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.pointRed};
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
  ${({ borderRadius }) => `border-radius:${borderRadius}px`};

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.smallText};
    line-height: 18px;
  }
`;

export default Button;
