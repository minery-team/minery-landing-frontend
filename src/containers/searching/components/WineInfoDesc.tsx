import React from "react";
import styled from "styled-components";
import Text from "components/common/Text";

const WineInfoDesc = ({ maker, country }) => {
  return (
    <DescContainer>
      <Wrapper>
        <Text size="lg" color="gray900" weight="extrabold">
          브랜드
        </Text>
        <Text size="lg" color="gray900" weight="extrabold">
          생산지
        </Text>
        <Text size="lg" color="gray900" weight="extrabold">
          주요품종
        </Text>
        <Text size="lg" color="gray900" weight="extrabold">
          음용온도
        </Text>
      </Wrapper>
      <Wrapper>
        <StyledText size="lg" color="pointRed" weight="regular">
          {maker}
        </StyledText>
        <StyledText size="lg" color="gray900" weight="regular">
          {country}
        </StyledText>
        <StyledText size="lg" color="gray900" weight="regular">
          모나스트렐 (Monastrell) , 카베르네 소비뇽 (Cabernet Sauvignon)
        </StyledText>
        <StyledText size="lg" color="gray900" weight="regular">
          19~20℃
        </StyledText>
      </Wrapper>
    </DescContainer>
  );
};
const StyledText = styled(Text)`
  margin-left: 2rem;
`;
const DescContainer = styled.div`
  border: 1.8px solid ${({ theme }) => theme.colors.gray300};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 2rem;
  }
  div:last-child {
    margin-bottom: 0rem;
  }
`;

export default WineInfoDesc;
