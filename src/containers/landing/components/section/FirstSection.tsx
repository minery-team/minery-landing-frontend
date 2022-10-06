import React from "react";
import styled from "styled-components";
import media from "styles/media";
import { FIRST_CONTENTS } from "database/main";
import Card from "components/common/Card";
import Title from "components/common/Title";
import Button from "components/common/Button";
import Spacing from "components/common/Spacing";
const FirstSection = () => {
  const { reviewData } = FIRST_CONTENTS;

  return (
    <SectionWrapper>
      <DescWrapper>
        <StyledTitle text="mainText" direction="row">
          <p>와인으로 쓰는</p>
          <p>그 날의 일기</p>
        </StyledTitle>
        <Spacing height={2} />
        <Title text="subText">
          <p>와인이 있어 더 특별했던 하루 !</p>
          <p>내 마음대로 기록하고 공유해 보세요</p>
        </Title>
        <Spacing height={2} />
        <CardList>
          {reviewData.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </CardList>
      </DescWrapper>
      <Spacing height={2} />
      <Button width={150} height={40} borderRadius={28}>
        와인일기 구경하기
      </Button>
    </SectionWrapper>
  );
};

const StyledTitle = styled(Title)`
  border: 2px solid red;
  ${media.mobile} {
  }
`;

const SectionWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile} {
    padding: 0 auto;
  }
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  overflow: hidden;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${media.mobile} {
    justify-content: space-evenly;
  }
`;

export default FirstSection;
