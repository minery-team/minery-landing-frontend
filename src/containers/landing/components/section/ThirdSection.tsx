import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Title from "@/components/common/Title";
import { useMotion } from "@/hooks/useMotion";
import { THIRD_CONTENTS } from "@/database/main";
import media from "@/styles/media";
import Spacing from "@/components/common/Spacing";
import {
  AOS_DEFAULT_DURATION,
  AOS_BASE_DURATION_DISTANCE,
} from "@/utils/constants/aos";

const ThirdSection = () => {
  const { imgData } = THIRD_CONTENTS;
  const { content, currentYOffset, calcValue } = useMotion();

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
      <Spacing height={4} />
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
                width={+item.width}
                height={+item.height}
                alt={item.img}
              />
            </IcoImg>
          );
        })}
      </ImgWrapper>
      <Spacing height={4} />
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
  div:nth-child(4) {
    margin: 0 3rem;
  }

  ${media.mobile} {
    div:nth-child(4) {
      margin: 0;
      width: 400px;
      display: flex;
      justify-content: center;
    }
  }
`;

const IcoImg = styled.div`
  img {
    object-fit: contain;
  }
`;

// const Title = styled.div`
//   font-size: ${({ theme }) => theme.fontSize.large};
//   font-weight: ${({ theme }) => theme.fontWeight.medium};
//   line-height: 3.3rem;
//   margin-bottom: 52px;
//   text-align: center;
//   ${media.mobile} {
//     font-size: ${({ theme }) => theme.fontSize.title};
//     font-weight: ${({ theme }) => theme.fontWeight.medium};
//   }
// `;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-top: 5rem;
  line-height: 32px;
  text-align: center;
`;

export default ThirdSection;
