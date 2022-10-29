import Image from "next/image";
import React from "react";
import styled from "styled-components";
const WineItemCard = ({ wine }) => {
  const { enName, name, price, image, id } = wine;
  return (
    <ListStyle>
      <Image src={image} alt={name} width={140} height={200} />
      <div>
        <span>{enName}</span>
      </div>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: ${({ theme }) => theme.colors.brighterBg}; */
  /* border: 1px solid ${({ theme }) => theme.colors.gray200}; */
  /* box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 10%); */
`;

export default WineItemCard;
