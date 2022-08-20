import React from "react";
import MainSection from "./components/section/MainSection";
import styled from "styled-components";

const DetailPage = ({ wineDetail }) => {
  return (
    <Container>
      <MainSection wineDetail={wineDetail} />
    </Container>
  );
};

const Container = styled.div`
  min-width: 70vw;
  padding: 2rem;
`;

export default DetailPage;
