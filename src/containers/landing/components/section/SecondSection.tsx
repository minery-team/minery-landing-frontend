import React from "react";
import styled from "styled-components";
import { SECOND_CONTENTS } from "database/main";
import Title from "components/common/Title";
import Image from "components/common/Image";
import media from "styles/media";
import Spacing from "components/common/Spacing";

const SecondSection = () => {
  const { title, subTitle, imgs } = SECOND_CONTENTS;
  return (
    <Wrapper>
      <Spacing height={40} />
      <Title text="mainText">
        <p>어떤 와인을</p>
        <p>찾고 있나요?</p>
      </Title>
      <Spacing height={20} />
      <Title text="subText">
        <p>다양한 와인 정보와 다른 사람들의</p>
        <p>평가를 볼 수 있어요!</p>
        <p>좋아하는 와인을 찾아 나만의</p>
        <p>와인창고에 담아두는 건 어떤가요?</p>
      </Title>
      <Spacing height={40} />
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
  display: flex;
  width: 100%;
  padding: 44px;
  justify-content: space-evenly;
  ${media.mobile} {
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
  ${media.mobile} {
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
  ${media.mobile} {
    span:nth-child(2) {
      margin-left: 20px;
    }
    span:nth-child(1) {
      margin-bottom: 40px;
    }
  }
`;

export default SecondSection;
