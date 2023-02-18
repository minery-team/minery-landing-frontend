import React, { useMemo } from "react";
import styled from "styled-components";
import { FOURTH_CONTENTS } from "@/database/main";
import ReviewCard from "@/components/common/ReviewCard";
import Spacing from "@/components/common/Spacing";
import media from "@/styles/media";
import {
  AOS_BASE_DURATION_DISTANCE,
  AOS_DEFAULT_DURATION,
} from "@/utils/constants/aos";
import { Title } from "@/components/common/Title";
import useWindowWidth from "@/hooks/useWindowWidth";
import Breakpoints from "@/styles/breakpoints";

const FourthSection = () => {
  const { reviewData } = FOURTH_CONTENTS;

  const width = useWindowWidth();
  const reviewCards = useMemo(() => {
    if (width <= Breakpoints.tablet) {
      return reviewData.slice(1);
    }
    return reviewData;
  }, [width]);

  const spacingPerWidth = useMemo(() => {
    if (width < Breakpoints.mobile) return 30;
    else if (width < Breakpoints.tablet) return 50;
    return 60;
  }, [width]);

  return (
    <Wrapper
      data-aos="fade-up"
      data-aos-duration={AOS_DEFAULT_DURATION + 6 * AOS_BASE_DURATION_DISTANCE}
    >
      <Title text="mainText">
        <p>마이너리 사용자들의</p>
        <p>후기를 확인해보세요</p>
      </Title>
      <Spacing height={spacingPerWidth} />
      <div>
        <CardWrapper>
          {reviewCards.map((review, index) => (
            <ReviewCard key={index} reviewData={review} />
          ))}
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 164px;

  ${media.tablet} {
    margin-bottom: 120px;
  }

  ${media.mobile} {
    margin-bottom: 90px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  gap: 24px;

  ${media.tablet} {
    width: 764px;
  }

  ${media.mobile} {
    width: 342px;
    gap: 14px;
  }
`;

export default FourthSection;
