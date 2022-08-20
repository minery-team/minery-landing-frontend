import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Text from "components/common/Text";
import WinePropertyCard from "./components/WinePropertyCard";
import Rating from "./components/Rating";

import { FLAG_BY_COUNTRY } from "types/Country";
import { NAME_BY_WINE_TYPE } from "types/WineType";

const DetailPage = ({ wineDetail }) => {
  const [wineDetailItem] = [...wineDetail];

  const { name, enName, rate, image, country, type, minAlcohol, maxAlcohol } =
    wineDetailItem;

  const isSameAlcohol = minAlcohol === maxAlcohol;
  return (
    <Container>
      <Image src={image} alt={name} width={220} height={340} />
      <div>
        <Text size="xl">{FLAG_BY_COUNTRY[country]}</Text>
        <Text size="base" color="descText" weight="regular">
          {country} | {NAME_BY_WINE_TYPE[type]}
        </Text>
        {(minAlcohol || maxAlcohol) && (
          <Wrapper>
            <AlcoholLabel color="white" size={12}>
              Acol.{" "}
              {minAlcohol != null && maxAlcohol != null
                ? isSameAlcohol
                  ? `${minAlcohol}%`
                  : `${minAlcohol}% ~ ${maxAlcohol}%`
                : minAlcohol || maxAlcohol
                ? `${minAlcohol || maxAlcohol}%`
                : ""}
            </AlcoholLabel>
          </Wrapper>
        )}
        <Text size="x3l" color="gray900" weight="medium">
          {enName}
        </Text>
        <Rating rate={rate} />
        <WinePropertyCard wineDetail={wineDetail} />
      </div>
    </Container>
  );
};

const Wrapper = styled.div`
  max-width: max-content;
`;

const AlcoholLabel = styled(Text)`
  background: ${({ theme }) => theme.colors.gray900};
  padding: 4px 9px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
`;

const StarImg = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center;
  }
`;

const StyledStar = styled.svg`
  fill: ${({ theme }) => theme.colors.pointRed};
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
export default DetailPage;
