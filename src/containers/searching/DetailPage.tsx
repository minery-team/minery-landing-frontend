import React from "react";
import WineInfoCard from "containers/searching/components/WineInfoCard";
import styled from "styled-components";

const DetailPage = ({ wineDetail }) => {
  return (
    <Container>
      <WineInfoCard wineDetail={wineDetail} />
    </Container>
  );
};

const Container = styled.div`
  min-width: 70vw;
  padding: 2rem;
`;

export default DetailPage;
