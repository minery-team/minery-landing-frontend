import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/common/Text";
import { MOCK_REVIEW_LIST } from "@/utils/constants/mock";
import UserReviewItem from "./UserReviewItem";
import Spacing from "@/components/common/Spacing";
import { aosDefaultConfig } from "@/utils/constants/aos";
import AOS from "aos";
import "aos/dist/aos.css";
import media from "@/styles/media";

const UserReview = () => {
  const ReviewCount = MOCK_REVIEW_LIST.length;
  const useAOS = () => {
    useEffect(() => {
      AOS.init(aosDefaultConfig);
    }, []);
  };

  useAOS();

  return (
    <Container>
      <TextWrapper>
        <Text size="lg" color="gray900" weight="medium">
          마이너리 사용자들의 평가
        </Text>
        <StyledText size="lg" color="gray400" weight="regular">
          {ReviewCount}
        </StyledText>
      </TextWrapper>
      <Spacing height={4} />
      {MOCK_REVIEW_LIST.map((review) => (
        <div key={review.id}>{<UserReviewItem review={review} />}</div>
      ))}
      <ReviewBack>
        <BackDrop>
          <div data-aos="fade-up">
            <Image
              src={"/images/downImg.png"}
              width={720}
              height={320}
              alt="download app"
            />
          </div>
        </BackDrop>
      </ReviewBack>
    </Container>
  );
};

const ReviewBack = styled.div`
  position: relative;
  ${media.mobile} {
    bottom: 50px;
  }
`;
const BackDrop = styled.div`
  backdrop-filter: blur(2px);
  height: 240px;
  position: absolute;
  top: 80;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    height: 60vh;
  }
`;

const Container = styled.div`
  min-height: 70vh;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  margin-left: 0.5rem;
`;

export default UserReview;
