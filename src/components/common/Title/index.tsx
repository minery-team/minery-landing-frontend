import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface TitleProps {
  title: string;
  subTitle?: string;
  split?: boolean;
}

const Title = ({ title, subTitle, split }: TitleProps) => {
  const [subTitles, setSubTitles] = useState("");
  useEffect(() => setSubTitles(subTitle));

  let editSubTitle: string[];
  if (subTitles?.includes("!")) {
    editSubTitle = subTitles.split("!");
    editSubTitle[0] += " !";
  }

  if (subTitles?.length === 0) return;

  const editSubTitleList = editSubTitle?.map((text) => {
    return <p key={text}>{text}</p>;
  });

  let editTitle;
  if (split === true) {
    editTitle = chunkString(title, title.length);
  }

  function chunkString(str: string, length: number) {
    return str.match(new RegExp(".{1," + Math.ceil(length / 2) + "}", "g"));
  }

  const editTitleList = editTitle?.map((text: string) => {
    return <TitleSplitText key={text}>{text}</TitleSplitText>;
  });

  return (
    <TitleWrapper>
      <TitleText>{editTitle ? editTitleList : title}</TitleText>
      <SubTitleText>{subTitle ? editSubTitleList : ""}</SubTitleText>
    </TitleWrapper>
  );
};

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const TitleText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  text-align: center;
  line-height: 2rem;
`;

export const SubTitleText = styled.p`
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 2rem;
  line-height: 32px;
`;

export const TitleSplitText = styled.p`
  margin-top: 1rem;
  text-align: start;
`;
export default Title;
