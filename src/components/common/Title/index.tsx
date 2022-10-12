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

//아래  TextDirectionFunc 를 사용해서
// direction에 따라서 flex direction 조건부 스타일 처리를 해주고 싶은데... 잘 안되네요 아이디어 주실분..?
const TextDirectionFunc = (direction: string) => {
  if (direction === "column") {
    return `
      flex-direction: column;
      align-items: center;
    `;
  } else {
    return `
      flex-direction: row;
      align-items: center;
    `;
  }
};

const MainTextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 3rem;
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  & > p {
    margin: 0 0.2rem;
  }
`;

const MainTextRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 3rem;
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  & > p {
    margin: 0 0.2rem;
  }
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.8rem;
`;

export default Title;
