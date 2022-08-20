import React from "react";
import styled from "styled-components";
import { FLAG_BY_COUNTRY } from "types/Country";
import { NAME_BY_WINE_TYPE } from "types/WineType";
import Text from "components/common/Text";

const WineInfoTags = ({ minAlcohol, maxAlcohol, country, type }) => {
  const isSameAlcohol = minAlcohol === maxAlcohol;
  return (
    <Wrapper>
      <Text size="xl">{FLAG_BY_COUNTRY[country]}</Text>
      <Text size="base" color="descText" weight="regular">
        {country} | {NAME_BY_WINE_TYPE[type]}
      </Text>
      {(minAlcohol || maxAlcohol) && (
        <LabelWrapper>
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
        </LabelWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LabelWrapper = styled.div`
  max-width: max-content;
  margin-left: 12px;
`;

const AlcoholLabel = styled(Text)`
  background: ${({ theme }) => theme.colors.gray900};
  padding: 4px 9px;
  border-radius: 10px;
  overflow: hidden;
`;

export default WineInfoTags;
