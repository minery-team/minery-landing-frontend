import React from "react";
import styled from "styled-components";
import Image from "next/image";
import media from "@/styles/media";

interface ReviewCardProps {
  reviewData: {
    title: string;
    rate: number;
    userId: string;
    reviewText: string;
  };
}
const ReviewCard = ({ reviewData }: ReviewCardProps) => {
  const { title, rate, userId, reviewText } = reviewData;
  return (
    <StyledReview>
      <Title>{title}</Title>
      <Container>
        {Array(rate)
          .fill(0)
          .map((_, index) => {
            return (
              <IamgeWrapper key={index}>
                <Image
                  width={20}
                  height={20}
                  src={"/images/section/star.png"}
                  alt={rate.toString()}
                />
              </IamgeWrapper>
            );
          })}
        <UserIdTxt>{userId}</UserIdTxt>
      </Container>
      <ReviewTxt>{reviewText}</ReviewTxt>
    </StyledReview>
  );
};

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 296px;
  margin: 0 10px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);
  ${media.mobile} {
    padding: 20px 10px;
    min-width: min-content;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const IamgeWrapper = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  display: inline-block;

  img {
    width: inherit;
    object-fit: cover;
  }
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mmallText};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 16px;
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xsmallText};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const UserIdTxt = styled.p`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxsmallText};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

const ReviewTxt = styled.p`
  margin-top: 1rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxsmallText};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
export default ReviewCard;
