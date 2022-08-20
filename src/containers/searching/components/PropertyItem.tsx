import React from "react";
import styled from "styled-components";
import Text from "components/common/Text";
import Spacing from "components/common/Spacing";

const PropertyItem = ({ label, status }) => {
  return (
    <StyledPropertyItem>
      <Text size="xs" color="descText" weight="light">
        {label}
      </Text>
      <Spacing height={9} />
      <Text size="xs" color="gray900" weight="medium">
        <span>{status ?? "-"}</span>
      </Text>
    </StyledPropertyItem>
  );
};

export default PropertyItem;

const StyledPropertyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;
