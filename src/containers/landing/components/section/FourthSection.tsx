import React from "react";
import styled from "styled-components";
import { FOURTH_CONTENTS } from "database/main";
import ReviewCard from "components/common/ReviewCard";
import Title from "components/common/Title";
import Spacing from "components/common/Spacing";
import media from "styles/media";

const FourthSection = () => {
  const { title, reviewData } = FOURTH_CONTENTS;

  return (
    <>
      <Wrapper>
        <Spacing height={40} />
        <Title text="mainText">
          <p>마이너리 사용자들의</p>
          <p>후기를 확인해보세요</p>
        </Title>
        <Spacing height={40} />
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
