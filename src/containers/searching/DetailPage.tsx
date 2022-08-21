import React from "react";
import WineInfoCard from "containers/searching/components/WineInfoCard";
import styled from "styled-components";
import Footer from "components/common/footer/Footer";
import UserReview from "./components/UserReview";
import Spacing from "components/common/Spacing";

const DetailPage = ({ wineDetail }) => {
  return (
    <>
      <Container>
        <WineInfoCard wineDetail={wineDetail} />
        <Spacing height={98} />
        <UserReview />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  max-width: 57vw;
  padding: 2rem;
`;

export default DetailPage;
