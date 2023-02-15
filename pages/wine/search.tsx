import type { NextPage, GetStaticProps } from "next";
import styled from "styled-components";
import media from "@/styles/media";
import Image from "next/image";

import ListPage from "@/containers/searching/ListPage";
import TopList from "@/containers/searching/TopList";
import Spacing from "@/components/common/Spacing";
import { fetchTop10Wines } from "@/remotes/requester";

// @ts-ignore
const SearchPage: NextPage = ({ top10Wine }) => {
  return (
    <Container>
      <ListPage />
      <TopList top10Wine={top10Wine} />
      <Spacing height={8} />
      <div data-aos="fade-up">
        <Image
          src={"/images/downImg.png"}
          width={1420}
          height={620}
          alt="download app"
        />
      </div>
      <Spacing height={8} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const top10Wine = await fetchTop10Wines();
  if (!top10Wine) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      top10Wine,
    },
  };
};

export const Container = styled.div`
  padding: 2rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${media.mobile} {
    max-width: 57.6rem;
  }
`;

export default SearchPage;
