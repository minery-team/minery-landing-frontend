import type { NextPage, GetStaticProps } from "next";
import styled from "styled-components";
import media from "@/styles/media";
import Image from "next/image";

import ListPage from "@/containers/searching/ListPage";
import TopList from "@/containers/searching/TopList";
import Spacing from "@/components/common/Spacing";
import { fetchTop10Wines } from "@/remotes/requester";
import { WineWithRatesDTO } from "@/types/Wine";

interface Props {
  top10Wines: WineWithRatesDTO[];
}

const SearchPage: NextPage = ({ top10Wines }: Props) => {
  return (
    <Container>
      <ListPage />
      <TopList top10Wines={top10Wines} />
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
  const top10Wines = await fetchTop10Wines();
  if (!top10Wines) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      top10Wines,
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

export default SearchPage;
