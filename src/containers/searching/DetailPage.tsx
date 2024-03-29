import React from "react";
import WineInfoCard from "@/containers/searching/components/WineInfoCard";
import styled from "styled-components";
import UserReview from "./components/UserReview";
import Spacing from "@/components/common/Spacing";
import media from "@/styles/media";
import { SEO } from "@/components/common/SEO";

const DetailPage = ({ wineDetail }) => {
  return (
    <>
      <SEO
        title={wineDetail.name}
        description={wineDetail.enName}
        image={wineDetail.image}
      />
      <Container>
        <WineInfoCard wineDetail={wineDetail} />
        <Spacing height={70} />
        <UserReview />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 2rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 72rem;

  ${media.mobile} {
    max-width: 57.6rem;
  }
`;

export default DetailPage;
