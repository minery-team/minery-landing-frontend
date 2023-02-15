import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import media from "@/styles/media";
import {
  AOS_BASE_DURATION_DISTANCE,
  AOS_DEFAULT_DURATION,
} from "@/utils/constants/aos";
import useWindowWidth from "@/hooks/useWindowWidth";

interface CardProps {
  data: {
    title: string;
    description: string;
    date: string;
    image: string;
  };
}

const Card = ({ data }: CardProps): ReactElement => {
  const { title, description, date, image } = data;
  const width = useWindowWidth();

  const getImageWidthPerWidth = () => {
    if (width < 768) return 280;
    else if (width < 1199) return 370;
    return 384;
  };

  const getImageHeightPerWidth = () => {
    if (width < 768) return 196;
    else if (width < 1199) return 205;
    return 212;
  };

  return (
    <StyledCard
      data-aos="fade-up"
      data-aos-duration={AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE * 10}
    >
      <span>
        <Image width={getImageWidthPerWidth()} height={getImageHeightPerWidth()} src={image} alt={image} />
      </span>
      <CardDescWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>
        <StyledHr />
        <CardDate>{date}</CardDate>
      </CardDescWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 456px;
  border-radius: 12px;
  margin: 20px 12px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);
  
  ~ div:nth-child(2) {
    margin-top: 110px;
  }
  ~ div:nth-child(4) {
    margin-top: 110px;
  }

  ${media.mobile} {
    width: 280px;
    height: 342px;
    transform: translateX(-1.2rem);

    ~ div:nth-child(2) {
      margin-top: 26px;
    }
  }
`;

const CardDescWrapper = styled.div`
  padding: 30px;

  ${media.mobile} {
    padding: 20px;
  }
`;

const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lmallText};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  line-height: 26px;
  margin-bottom: 20px;

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.mmallText};
    margin-bottom: 10px;
  }
`;

const CardDesc = styled.p`
  width: 324px;
  height: 74px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.descText};

  ${media.tablet} {
    height: 71px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 25px;
  }

  ${media.mobile} {
    Width: 240px;
    height: 66px;
    font-size: ${({ theme }) => theme.fontSize.xsmallText};
    line-height: 22px;
  }
`;

const StyledHr = styled.div`
  height: 0.2px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.gray300};
  background-color: ${({ theme }) => theme.colors.gray300};

  ${media.mobile} {
    display: none;
  }
`;

const CardDate = styled.p`
  width: 324px;
  height: 74px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.descText};

  ${media.tablet} {
    height: 71px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 25px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export default Card;
