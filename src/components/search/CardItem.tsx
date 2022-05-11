import React from "react";
import Image from "next/image";

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
    <div>
      <Image src={image} alt="picture of wine" width={45} height={90} />
      <div>{enName}</div>
      <div>{country}</div>
      <div>type:{type}</div>
      <div>rate:{rate}</div>
    </div>
  );
};

export default CardItem;
