import React from "react";
import styled from "styled-components";
import { FLAG_BY_COUNTRY } from "@/types/Country";
import { NAME_BY_WINE_TYPE } from "@/types/WineType";
import Text from "@/components/common/Text";

const WineInfoTags = ({ country, type }) => {
  return (
    <Wrapper>
      <Text size="xl">{FLAG_BY_COUNTRY[country]}</Text>
      <StyledText size="base" color="descText" weight="regular">
        {country} | {NAME_BY_WINE_TYPE[type]}
      </StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  margin-left: 0.5rem;
`;

export default WineInfoTags;
