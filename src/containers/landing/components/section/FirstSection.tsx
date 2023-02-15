import React from "react";
import styled from "styled-components";
import media from "@/styles/media";
import { FIRST_CONTENTS } from "@/database/main";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Spacing from "@/components/common/Spacing";
import { Title } from "@/components/common/Title";
import useWindowWidth from "@/hooks/useWindowWidth";

const FirstSection = () => {
  const { reviewData } = FIRST_CONTENTS;
  const width = useWindowWidth();
  const instaLink =
    "https://www.instagram.com/minery_app/?igshid=YmMyMTA2M2Y%3D";

  const getButtonSize = () => {
    if (width < 1199) return { width: 190, height: 48 };
    return { width: 196, height: 60 };
  }
  
  return (
    <SectionWrapper>
      <DescWrapper>
        <StyledTitle text="mainText">
          {width > 767 ? <div>와인으로 쓰는 그 날의 일기</div> : <><div>와인으로 쓰는</div><div>그 날의 일기</div></>}
        </StyledTitle>
        <Spacing height={16} />
        <Title text="subText">
          {'와인이 있어 더 특별했던 하루 !\n내 마음대로 기록하고 공유해 보세요'}
        </Title>
        <CardList>
          {reviewData.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </CardList>
      </DescWrapper>
      <Spacing height={60} />
      <Button
        width={getButtonSize().width}
        height={getButtonSize().height}
        borderRadius={71.5}
        onClick={() => window.open(instaLink)}
      >
        와인일기 구경하기
      </Button>
    </SectionWrapper>
  );
};

const StyledTitle = styled(Title)`
  border: 2px solid red;
  font-size: 50px;
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
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${media.mobile} {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  ${media.tablet} {
    div:nth-child(1) {
      display: none;
    }
    div:nth-child(4) {
      display: none;
    }
    div:nth-child(5) {
      display: none;
    }
  }
`;

export default FirstSection;
