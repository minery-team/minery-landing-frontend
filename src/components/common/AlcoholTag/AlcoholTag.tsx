import React from "react";
import styled from "styled-components";
import Text from "@/components/common/Text";

const AlcoholTag = ({ minAlcohol, maxAlcohol }) => {
  const isSameAlcohol = minAlcohol === maxAlcohol;

  return (
    <div>
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
    </div>
  );
};
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
export default AlcoholTag;
