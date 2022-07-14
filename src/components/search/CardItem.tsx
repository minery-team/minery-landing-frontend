import React from "react";
import Image from "next/image";
import styled from "styled-components";
import StarIcon from "src/icons/StarIcon";

interface CardItemProps {
  id: number;
  enName: string;
  country: string;
  type: number;
  rate: number;
  image: string;
}

const CardItem: React.FC<CardItemProps> = ({
  id,
  enName,
  country,
  type,
  rate,
  image,
}) => {
  return (
    <CardItemContainer>
      <CardImgContainer>
        <Image src={image} alt="picture of wine" width={81} height={136} />
      </CardImgContainer>
      <Desc>
        <span>
          {country} | {type}
        </span>
        <RateContainer>
          <StarIcon />
          <RateText>{rate}</RateText>
        </RateContainer>
      </Desc>
      <Ename>{enName}</Ename>
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  width: 180px;
  height: 250px;
  justify-content: center;
  overflow: hidden;
`;
const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Desc = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.descText};
  margin-top: 20px;
  margin-bottom: 15px;
  align-items: center;
`;

const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  margin-right: 4px;
`;

const RateText = styled.span`
  margin-left: 3px;
  margin-top: 2px;
`;

const Ename = styled.div`
  color: ${({ theme }) => theme.colors.defaultText};
  font-weight: 800;
`;

export default CardItem;
