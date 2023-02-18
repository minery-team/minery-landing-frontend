import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { SECOND_CONTENTS } from "@/database/main";
import media from "@/styles/media";
import Spacing from "@/components/common/Spacing";
import { Title } from "@/components/common/Title";
import {
  AOS_BASE_DURATION_DISTANCE,
  AOS_DEFAULT_DURATION,
} from "@/utils/constants/aos";
import useWindowWidth from "@/hooks/useWindowWidth";
import Breakpoints from "@/styles/breakpoints";

const SecondSection = () => {
  const { imgs } = SECOND_CONTENTS;
  const width = useWindowWidth();

  const imageSizePerWidth = useMemo(() => {
    if (width < Breakpoints.mobile) return { width: 153, height: 306 };
    else if (width < Breakpoints.tablet) return { width: 270, height: 540 };
    return { width: 339, height: 678 };
  }, [width]);

  return (
    <Wrapper>
      <TextWrapper
        data-aos="fade-up"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE
        }
      >
        <Title text="mainText">
          {'어떤 와인을\n찾고 있나요?'}
        </Title>
        <Spacing height={16} />
        <Title text="subText">
          <p>다양한 와인 정보와 다른 사람들의</p>
          <p>평가를 볼 수 있어요!</p>
          <p>좋아하는 와인을 찾아 나만의</p>
          <p>와인창고에 담아두는 건 어떤가요?</p>
        </Title>
        <Link href="/wine/search">
          <SearchLinkForWeb>와인 검색하기</SearchLinkForWeb>
        </Link>
      </TextWrapper>
      <ImgWrapper
        data-aos="fade-left"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE
        }
      >
        {imgs.map((img, index) => {
          return (
            <span key={index}>
              <Image width={imageSizePerWidth.width} height={imageSizePerWidth.height} src={img} alt={img} />
            </span>
          );
        })}
      </ImgWrapper>
      <Link href="/wine/search">
        <SearchLinkForPortable>와인 검색하기</SearchLinkForPortable>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    flex-direction: column;

  }
`;

const TextWrapper = styled.div`
  div {
    align-items: flex-start;
  }

  ${media.tablet} {
    div {
      align-items: center;
    }
  }
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  color: ${({ theme }) => theme.colors.pointRed};
`;

const SearchLinkForWeb = styled(StyledLink)`
  font-size: ${({ theme }) => theme.fontSize.mmallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 20px;
  width: 196px;
  height: 60px;
  border-radius: 71.5px;
  margin-top: 60px;

  ${media.tablet} {
    display: none
  }
`;

const SearchLinkForPortable = styled(StyledLink)`
  display: none;
  
  ${media.tablet} {
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.smallText};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 18px;
    width: 162px;
    height: 48px;
    border-radius: 71.5px;
    margin-top: 30px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span:nth-child(2) {
    margin-top: 67px;
    margin-left: 20px;
  }
`;

export default SecondSection;
