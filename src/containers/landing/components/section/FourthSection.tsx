import React from "react";
import styled from "styled-components";
import { FOURTH_CONTENTS } from "@/database/main";
import ReviewCard from "@/components/common/ReviewCard";
import Title from "@/components/common/Title";
import Spacing from "@/components/common/Spacing";
import media from "@/styles/media";
import {
  AOS_DEFAULT_DURATION,
  AOS_BASE_DURATION_DISTANCE,
} from "@/utils/constants/aos";

const FourthSection = () => {
  const { reviewData } = FOURTH_CONTENTS;

  return (
    <>
      <Wrapper
        data-aos="fade-up"
        data-aos-duration={
          AOS_DEFAULT_DURATION + 6 * AOS_BASE_DURATION_DISTANCE
        }
      >
        <Spacing height={4} />
        <Title text="mainText">
          <p>마이너리 사용자들의</p>
          <p>후기를 확인해보세요</p>
        </Title>
        <Spacing height={4} />
        <CardWrapper>
          {reviewData.map((review, index) => {
            return <ReviewCard key={index} reviewData={review} />;
          })}
        </CardWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile} {
    margin-bottom: 7rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  ${media.mobile} {
    width: inherit;
    div:nth-child(1) {
      display: none;
    }
  }
`;

export default FourthSection;
