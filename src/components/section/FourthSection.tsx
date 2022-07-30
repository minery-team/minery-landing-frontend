import React from "react";
import styled from "styled-components";
import { FOURTH_CONTENTS } from "database/main";
import ReviewCard from "../common/ReviewCard";
import Title from "../common/Title";
import media from "styles/media";

const FourthSection = () => {
  const { title, reviewData } = FOURTH_CONTENTS;

  return (
    <>
      <Wrapper>
        <Title title={title} split={true} />
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
  margin-top: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.small} {
    margin-bottom: 7rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  ${media.small} {
    div:nth-child(1) {
      display: none;
    }
  }
`;

export default FourthSection;
