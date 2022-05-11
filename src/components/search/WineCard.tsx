import React from "react";
import styled from "styled-components";
import { WineRequest } from "src/types/request";
import CardItem from "./CardItem";

interface WineCardProps {
  wineList: WineRequest[];
}

const WineCard: React.FC<WineCardProps> = ({ wineList }) => {
  return (
    <CardItemContainer>
      {wineList.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          image={item.image}
          enName={item.enName}
          country={item.country}
          type={item.type}
          rate={item.rate}
        />
      ))}
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div``;
const Image = styled.img``;
const cardDesc = styled.div``;
export default WineCard;
