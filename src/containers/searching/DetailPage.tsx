import React from "react";
import Image from "next/image";
import styled from "styled-components";

import PropertyItem from "containers/searching/components/PropertyItem";
import Text from "components/common/Text";
import theme from "styles/theme";
import WinePropertyCard from "./components/WinePropertyCard";

const LABEL_BY_LEVEL: Record<number, string> = {
  [1]: "매우낮음",
  [2]: "낮음",
  [3]: "보통",
  [4]: "높음",
  [5]: "매우높음",
};

const BODY_LABEL_BY_LEVEL: Record<number, string> = {
  [1]: "매우가벼움",
  [2]: "가벼움",
  [3]: "보통",
  [4]: "무거움",
  [5]: "매우무거움",
};

const DetailPage = ({ wineDetail }) => {
  const [wineDetailItem] = [...wineDetail];

  const {
    name,
    enName,
    rate,
    image,
    country,
    type,
    tannins,
    body,
    sweetness,
    acidity,
  } = wineDetailItem;

  return (
    <>
      <Image src={image} alt={name} width={40} height={40} />
      <div>{enName}</div>
      <Text size="xs" color="descText" weight="light">
        전문가 평가
      </Text>
      {console.log(rate)}
      <WinePropertyCard wineDetail={wineDetail} />
    </>
  );
};

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.brighterBg};
  padding: 8px 20px;
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
