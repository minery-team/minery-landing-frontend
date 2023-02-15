import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useMotion } from "@/hooks/useMotion";
import { THIRD_CONTENTS } from "@/database/main";
import media from "@/styles/media";
import Spacing from "@/components/common/Spacing";
import {
  AOS_BASE_DURATION_DISTANCE,
  AOS_DEFAULT_DURATION,
} from "@/utils/constants/aos";
import { Title } from "@/components/common/Title";
import useWindowWidth from "@/hooks/useWindowWidth";
import Breakpoints from "@/styles/breakpoints";

const ThirdSection = () => {
  const { imgData } = THIRD_CONTENTS();
  const { content, currentYOffset, calcValue } = useMotion();
  const width = useWindowWidth();

  const getSpacingPerWidth = () => {
    if (width < Breakpoints.mobile) return 36;
    else if (width < Breakpoints.tablet) return 50;
    return 60;
  }

  return (
    <Wrapper
      ref={content}
      data-aos="fade-up"
      data-aos-duration={AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE}
    >
      <Spacing height={4} />
      <div
        data-aos="fade-up"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 4 * AOS_BASE_DURATION_DISTANCE
        }
      >
        <Title text="mainText">
          <p>와인을 기록하는 순간,</p>
          <p>어떤 뱃지를 받게 될까요? </p>
        </Title>
      </div>
      <Spacing height={getSpacingPerWidth()} />
      <ImgWrapper
        data-aos="fade-up"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 3 * AOS_BASE_DURATION_DISTANCE
        }
      >
        {imgData.map((item, index) => {
          return (
            <IcoImg
              style={{ opacity: calcValue(item.info, currentYOffset) }}
              key={index}
            >
              <Image
                src={item.img}
                width={item.width}
                height={item.height}
                alt={item.img}
              />
            </IcoImg>
          );
        })}
      </ImgWrapper>
      <Spacing height={getSpacingPerWidth()} />
      <div
        data-aos="fade-up"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 4 * AOS_BASE_DURATION_DISTANCE
        }
      >
        <Title text="subText">
          <p>차곡차곡 쌓이는 와인일기와 함께</p>
          <p>마이뱃지를 수집하는 재미도 느껴보세요. </p>
        </Title>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div:nth-child(n) {
    margin: 0 30px;
  }
  div:nth-child(4) {
    margin: 0 48px;
  }

  ${media.tablet} {
    div:nth-child(n) {
      margin: 0 18px;
    }
    div:nth-child(4) {
      margin: 0 26px;
    }
  }

  ${media.mobile} {
    div:nth-child(n) {
      margin: 0 8px;
    }
    div:nth-child(4) {
      margin: 0 4px;
    }
  }
`;

const IcoImg = styled.div`
  img {
    object-fit: contain;
  }
`;

export default ThirdSection;
