import React, { useState } from "react";
import styled from "styled-components";
import { WineRequest } from "src/types/request";
import CardItem from "./CardItem";
import SearchBar from "src/components/search/SearchBar";

interface WineCardProps {
  wineList: WineRequest[];
}

const WineCard: React.FC<WineCardProps> = ({ wineList }) => {
  const [search, setSearch] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    let filterData = wineList.filter((it) => it.name.includes(searchInput));
    //setSearch(filterData);
  };

  return (
    <>
      <SearchBar wineList={wineList} />

      <div>
        검색 결과 <span> 55 개</span>
      </div>

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
    </>
  );
};

const CardItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 40px;
  justify-items: center;
  width: inherite;
`;

export default WineCard;
