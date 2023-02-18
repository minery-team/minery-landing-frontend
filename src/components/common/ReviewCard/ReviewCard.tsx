import React, { useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import media from "@/styles/media";
import useWindowWidth from "@/hooks/useWindowWidth";
import Breakpoints from "@/styles/breakpoints";

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
  const width = useWindowWidth();
  const isMobile = useMemo(() => {
    if (width <= Breakpoints.mobile) {
      return true;
    }
    return false;
  }, [width]);

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
                  width={isMobile ? 6 : 16}
                  height={isMobile ? 6 : 16}
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
  width: 384px;
  height: 256px;
  padding: 38px 42px;
  border-radius: 12px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);

  ${media.tablet} {
    width: 370px;
    height: 247px;
    padding: 37px 40px;
  }

  ${media.mobile} {
    width: 164px;
    height: 108px;
    padding: 15px 18px;
  }
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  line-height: 40px;

  ${media.tablet} {
    line-height: 38px;
  }
   
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxsmallText};
    line-height: 17px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const IamgeWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;



const UserIdTxt = styled.p`
  margin-left: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.sectionDescText};

  ${media.mobile} {
    margin-left: 8px;
    font-size: 6px;
  }
`;

const ReviewTxt = styled.p`
  margin-top: 25px;
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 30px;
  color: ${({ theme }) => theme.colors.sectionDescText};

  ${media.tablet} {
    line-height: 28.91px;
  }

  ${media.mobile} {
    margin-top: 6px;
    font-size: ${({ theme }) => theme.fontSize.xxxsmallText};
    line-height: 13px;
  }
`;
export default ReviewCard;
