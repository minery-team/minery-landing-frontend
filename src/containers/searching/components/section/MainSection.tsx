import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Text from "components/common/Text";
import WinePropertyCard from "containers/searching/components/WinePropertyCard";
import Rating from "containers/searching/components/Rating";

import WineInfoTags from "containers/searching/components/WineInfoTags";
import Spacing from "components/common/Spacing";
import WineInfoCard from "../WineInfoCard";

const MainSection = ({ wineDetail }) => {
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
      <WineInfoCard wineDetail={wineDetail} />
    </>
  );
};

export default MainSection;
