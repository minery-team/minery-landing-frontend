import React from "react";
import styled from "styled-components";
import media from "src/styles/media";
import { FIRST_CONTENTS } from "src/database/main";
import Card from "src/components/common/Card";
import Title from "src/components/common/Title";
import Button from "src/components/common/Button";
const FirstSection = () => {
  const { title, subTitle, reviewData } = FIRST_CONTENTS;

  return (
    <SectionWrapper>
      <DescWrapper>
        <Title title={title} subTitle={subTitle} split={false} />
        <CardList>
          {reviewData.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </CardList>
      </DescWrapper>
      <Button width={150} height={40} borderRadius={28}>
        와인일기 구경하기
      </Button>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.small} {
    padding: 0 auto;
  }
`;
const DescWrapper = styled.span`
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
  ${media.small} {
    justify-content: space-evenly;
  }
`;

export default FirstSection;
