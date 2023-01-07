import React from "react";
import styled from "styled-components";
import { SECOND_CONTENTS } from "@/database/main";
import Title from "@/components/common/Title";
import Image from "next/image";
import media from "@/styles/media";
import Spacing from "@/components/common/Spacing";
import {
  AOS_BASE_DURATION_DISTANCE,
  AOS_DEFAULT_DURATION,
} from "@/utils/constants/aos";
import Button from "@/components/common/Button";
import Link from "next/link";
const SecondSection = () => {
  const { imgs } = SECOND_CONTENTS;
  return (
    <Wrapper>
      <TextWrapper
        data-aos="fade-up"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE
        }
      >
        <Title text="mainText">
          <p>어떤 와인을</p>
          <p>찾고 있나요?</p>
        </Title>
        <Spacing height={2} />
        <Title text="subText">
          <p>다양한 와인 정보와 다른 사람들의</p>
          <p>평가를 볼 수 있어요!</p>
          <p>좋아하는 와인을 찾아 나만의</p>
          <p>와인창고에 담아두는 건 어떤가요?</p>
        </Title>
        <Spacing height={2} />
        <Link href="/wine/search">
          <StyledLink>와인 검색하기</StyledLink>
        </Link>
      </TextWrapper>

      <Spacing height={4} />
      <ImgWrapper
        data-aos="fade-left"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE
        }
      >
        {imgs.map((img, index) => {
          return (
            <span key={index}>
              <Image width={236} height={460} src={img} alt={img} />
            </span>
          );
        })}
      </ImgWrapper>
      <Spacing height={2} />

      <Link href="/wine/search">
        <StyledLinkMb>와인 검색하기</StyledLinkMb>
      </Link>
    </Wrapper>
  );
};

const StyledLinkMb = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: small;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.pointRed};
  width: 130px;
  height: 40px;
  border-radius: 24px;
  display: none;
  ${media.mobile} {
    display: flex;
  }
`;
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: small;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.pointRed};
  width: 120px;
  height: 40px;
  border-radius: 24px;
  ${media.mobile} {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${media.tabletS} {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  div {
    align-items: flex-start;
  }
  ${media.tabletS} {
    div {
      align-items: center;
    }
  }
  ${media.mobile} {
    div {
      align-items: center;
    }
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
