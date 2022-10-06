import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "components/common/Image";
import media from "styles/media";

interface CardProps {
  data: {
    title: string;
    description: string;
    date: string;
    image: string;
  };
  className?: string;
}

const Card = ({ data, className }: CardProps): ReactElement => {
  const { title, description, date, image } = data;

  return (
    <StyledCard className={className}>
      <span>
        <Image width={286} height={180} src={image} alt={image} />
      </span>
      <CardDescWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>
        <StyledHr />
        <CardDesc>{date}</CardDesc>
      </CardDescWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 372px;
  border-radius: 12px;
  margin: 20px 18px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);
  ~ div:nth-child(2) {
    margin-top: 110px;
  }
  ~ div:nth-child(4) {
    margin-top: 110px;
  }

  ${media.mobile} {
    transform: translateX(-1.2rem);
    ~ div:nth-child(2) {
      display: none;
    }
    ~ div:nth-child(3) {
      display: none;
    }
    ~ div:nth-child(4) {
      display: none;
    }
    ~ div:nth-child(5) {
      margin-top: 10px;
      transform: translateX(1.2rem);
    }
  }
`;

const CardDescWrapper = styled.div`
  padding: 20px;
`;

const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mmallText};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 14px;
`;
const CardDesc = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  color: ${({ theme }) => theme.colors.descText};
  line-height: 1.3rem;
`;

const StyledHr = styled.hr`
  height: 0.2px;
  border-bottom: 0px solid;
  color: ${({ theme }) => theme.colors.brighterBg};
`;

export default Card;
