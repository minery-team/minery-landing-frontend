import React from "react";
import styled from "styled-components";
import Text from "@/components/common/Text";

const WineInfoDesc = ({ maker, country }) => {
  return (
    <DescContainer>
      <Col>
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
      </Col>
      <DescText>
        <Text size="lg" color="pointRed" weight="regular">
          {maker}
        </Text>
        <Text size="lg" color="gray900" weight="regular">
          {country}
        </Text>
        <Text size="lg" color="gray900" weight="regular">
          모나스트렐 (Monastrell) , 카베르네 소비뇽 (Cabernet Sauvignon)
        </Text>
        <Text size="lg" color="gray900" weight="regular">
          19~20℃
        </Text>
      </DescText>
    </DescContainer>
  );
};

const DescContainer = styled.div`
  border: 1.8px solid ${({ theme }) => theme.colors.gray300};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  height: 14rem;
`;

const Col = styled.div`
  min-width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid blue;
  div {
    margin-bottom: 2rem;
  }
  div:last-child {
    margin-bottom: 0rem;
  }
`;

export default WineInfoDesc;
