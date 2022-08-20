import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "components/common/Text";
import WinePropertyCard from "containers/searching/components/WinePropertyCard";
import Rating from "containers/searching/components/Rating";

import WineInfoTags from "containers/searching/components/WineInfoTags";
import Spacing from "components/common/Spacing";
import WineInfoDesc from "./WineInfoDesc";

const WineInfoCard = ({ wineDetail }) => {
  const [wineDetailItem] = [...wineDetail];

  const {
    name,
    enName,
    rate,
    image,
    country,
    type,
    minAlcohol,
    maxAlcohol,
    maker,
    ferment,
  } = wineDetailItem;

  return (
    <>
      <CardContainer>
        <ImageWrapper>
          <Image src={image} alt={name} width={220} height={340} />
        </ImageWrapper>
        <InfoWrapper>
          <WineInfoTags
            minAlcohol={minAlcohol}
            maxAlcohol={maxAlcohol}
            country={country}
            type={type}
          />
          <Spacing height={18} />
          <Text size="x3l" color="gray900" weight="medium">
            {enName}
          </Text>
          <Spacing height={44} />
          <Rating rate={rate} />
          <Spacing height={66} />
          <WinePropertyCard wineDetail={wineDetail} />
        </InfoWrapper>
      </CardContainer>
      <Spacing height={48} />
      <WineInfoDesc maker={maker} country={country} />
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ImageWrapper = styled.div``;

const InfoWrapper = styled.div`
  width: 70%;
`;

export default WineInfoCard;
