import React from "react";
import styled from "styled-components";
import Text from "components/common/Text";
import { MOCK_REVIEW_LIST } from "constants/mock";
import UserReviewItem from "./UserReviewItem";
import Spacing from "components/common/Spacing";

const UserReview = () => {
  const ReviewCount = MOCK_REVIEW_LIST.length;
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
      <Spacing height={48} />
      {MOCK_REVIEW_LIST.map((review) => (
        <div key={review.id}>{<UserReviewItem review={review} />}</div>
      ))}
    </Container>
  );
};

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
