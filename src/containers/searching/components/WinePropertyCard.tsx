import React from "react";
import styled from "styled-components";
import PropertyItem from "containers/searching/components/PropertyItem";

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

const WinePropertyCard = ({ wineDetail }) => {
  const [wineDetailItem] = [...wineDetail];
  const { tannins, body, sweetness, acidity } = wineDetailItem;

  return (
    <Container>
      <PropertyItem label="탄닌" status={tannins && LABEL_BY_LEVEL[tannins]} />
      <PropertyItem label="바디감" status={body && BODY_LABEL_BY_LEVEL[body]} />
      <PropertyItem label="당도" status={body && LABEL_BY_LEVEL[sweetness]} />
      <PropertyItem label="산도" status={body && LABEL_BY_LEVEL[acidity]} />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.brighterBg};
  padding: 8px 20px;
  justify-content: space-evenly;
`;

export default WinePropertyCard;
