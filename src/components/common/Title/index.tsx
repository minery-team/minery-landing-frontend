import React, { ReactNode } from "react";

import styled from "styled-components";
import media from "styles/media";

interface TextProps {
  children?: ReactNode;
  text?: "mainText" | "subText";
}
const Title = ({ text, children }: TextProps) => {
  return (
    <TextWrapper>
      {text === "mainText" && <Text>{children}</Text>}
      {text === "subText" && <SubText>{children}</SubText>}
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 3rem;
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const SubText = styled.div`
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.8rem;
`;

export default Title;
