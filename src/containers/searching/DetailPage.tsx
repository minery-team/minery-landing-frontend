import React from "react";
import WineInfoCard from "@/containers/searching/components/WineInfoCard";
import styled from "styled-components";
import UserReview from "./components/UserReview";
import Spacing from "@/components/common/Spacing";
import media from "@/styles/media";
import { SEO } from "@/components/common/SEO";
import Layout from "@/components/common/Layout";

const DetailPage = ({ wineDetail }) => {
  return (
    <Layout>
      <SEO
        title={wineDetail.name}
        description={wineDetail.enName}
        image={wineDetail.image}
      />
      <Container>
        <WineInfoCard wineDetail={wineDetail} />
        <Spacing height={9} />
        <UserReview />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding: 2rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 72rem;
  ${media.tabletL} {
    max-width: 64rem;
  }
  ${media.tabletS} {
    max-width: 57.6rem;
  }
  ${media.mobile} {
    max-width: 26rem;
  }
`;

export default DetailPage;
