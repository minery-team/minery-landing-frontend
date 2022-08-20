import React from "react";
import Text from "components/common/Text";
import styled from "styled-components";
import StarIcon from "components/common/Star";

const Rating = ({ rate }) => {
  return (
    <>
      <Text size="xs" color="descText" weight="light">
        전문가 평가
      </Text>
      <Container>
        <div>
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return <StarIcon key={index} path={1} />;
            })}
        </div>
        <Text size="xxs" color="descText" weight="medium">
          {rate}
        </Text>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
`;
export default Rating;
