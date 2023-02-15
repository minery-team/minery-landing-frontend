import React, { ReactNode } from "react";

import styled from "styled-components";
import media from "@/styles/media";

interface TextProps {
  children?: ReactNode;
  text?: "mainText" | "subText";
  direction?: "column" | "row";
}

const Title = ({ text, children, direction = "column" }: TextProps) => {
  return (
    <TextWrapper>
      {text === "mainText" &&
        (direction === "column" ? (
          <MainTextCol>{children}</MainTextCol>
        ) : (
          <MainTextRow>{children}</MainTextRow>
        ))}
      {text === "subText" && <SubText>{children}</SubText>}
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;
  }
`;

const MainText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 72px;

  & > p {
    margin: 0 0.2rem;
  }

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.logo};
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    line-height: 46px;
  }

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.x3l};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 42px;
  }
`;

const MainTextCol = styled(MainText)`
  flex-direction: column;
  white-space: pre-line;
`;

const MainTextRow = styled(MainText)`
  flex-direction: row;
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.subText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 35px;
  white-space: pre-line;
  text-align: center;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.smallText};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xsmallText};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 22px;
  }
`;

export default Title;
