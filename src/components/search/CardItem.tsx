import React from "react";
import Image from "next/image";
import styled from "styled-components";

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
        <span>{rate}</span>
      </Desc>

      <div>{enName}</div>
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.brighterBg};
  width: 100px;
  height: 220px;
  padding: 20px;
  margin: 10px;
  flex: 1 1 20%;
  flex-grow: 0;
  justify-content: center;
`;
const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Desc = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  justify-content: space-between;
  padding: 5px;
`;

export default CardItem;
