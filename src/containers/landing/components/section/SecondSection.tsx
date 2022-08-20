import React from "react";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import { SECOND_CONTENTS } from "database/main";
import Title from "components/common/Title";
import Image from "components/common/Image";
import media from "styles/media";

const SecondSection = () => {
  const { title, subTitle, imgs } = SECOND_CONTENTS;
  return (
    <Wrapper>
      <TextWrapper>
        <Title title={title} split={true} />
        <Desc
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitle) }}
        />
      </TextWrapper>

      <ImgWrapper>
        {imgs.map((img, index) => {
          return (
            <span key={index}>
              <Image width={236} height={460} src={img} alt={img} />
            </span>
          );
        })}
      </ImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12rem;
  display: flex;
  width: 100%;
  padding: 44px;
  justify-content: space-evenly;
  ${media.small} {
    flex-direction: column;
  }
`;

const Desc = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 28px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 104px;
  ${media.small} {
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span:nth-child(2) {
    margin-top: 84px;
    margin-left: 20px;
  }
  ${media.small} {
    span:nth-child(2) {
      margin-top: 220px;
      margin-left: 20px;
    }
    span:nth-child(1) {
      margin-bottom: 40px;
    }
  }
`;

export default SecondSection;
