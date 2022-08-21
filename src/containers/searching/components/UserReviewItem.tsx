import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "components/common/Text";

const UserReviewItem = ({ review }) => {
  return (
    <>
      <Container>
        <ImageWrapper>
          <Image
            src={review.image}
            alt={review.name}
            width={56}
            height={56}
            layout="fixed"
          />
        </ImageWrapper>
        <TextWrapper>
          <UserInfo>
            <div>
              <StyledText size="base" color="gray900" weight="medium">
                {review.name}
              </StyledText>
              <RateIconWrapper>
                <Image
                  layout="fill"
                  src={"/images/section/star.png"}
                  alt={review.rate.toString()}
                />
              </RateIconWrapper>
              <StyledTextRate size="base" color="gray700" weight="regular">
                {review.rate}
              </StyledTextRate>
            </div>
            <div>
              <Text size="xs" color="gray900" weight="regular" lineHeight={1.4}>
                {review.date}
              </Text>
            </div>
          </UserInfo>
          <CommetCard>
            <Text size="xs" color="gray900" weight="regular" lineHeight={1.6}>
              {review.commnet}
            </Text>
          </CommetCard>
        </TextWrapper>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const ImageWrapper = styled.div`
  margin-right: 1rem;
`;
const StyledText = styled(Text)`
  margin-right: 0.4rem;
`;
const StyledTextRate = styled(Text)`
  margin-left: 0.2rem;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  justify-content: space-between;
  div:nth-child(1) {
    display: flex;
    align-items: self-end;
  }
`;

const TextWrapper = styled.div``;

const RateIconWrapper = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  display: inline-block;
  img {
    width: inherit;
    object-fit: cover;
    object-position: center;
  }
`;

const CommetCard = styled.div`
  padding: 0 0.8rem 0 0;
`;

export default UserReviewItem;
