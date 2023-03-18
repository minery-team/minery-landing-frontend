import type { NextPage, GetStaticProps } from "next";
import styled from "styled-components";
import media from "@/styles/media";
import Image from "next/image";

import ListPage from "@/containers/searching/ListPage";
import TopList from "@/containers/searching/TopList";
import Spacing from "@/components/common/Spacing";
import { fetchTop10Wines } from "@/remotes/requester";
import { useEffect, useMemo, useState } from "react";
import Breakpoints from "@/styles/breakpoints";
import useWindowWidth from "@/hooks/useWindowWidth";

// @ts-ignore
const SearchPage: NextPage = ({ top10Wine }) => {
  const width = useWindowWidth();

  const bannerInfo = useMemo(() => {
    if (width <= Breakpoints.mobile)
      return { image: "/images/appDownImgMobile.png", width: 520, height: 280 };
    else
      return { image: "/images/appDownImgWeb.png", width: 1020, height: 420 };
  }, [width]);

  const [link, setLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const os = window.navigator.userAgent.includes("Mac") ? "ios" : "android";

      if (os === "ios")
        setLink(
          "https://apps.apple.com/kr/app/마이너리-나만의-와인-일기-와인-검색-기록-평가/id1608336149"
        );
      else
        setLink("https://play.google.com/store/apps/details?id=com.minery.app");
    }
  }, []);

  return (
    <Container>
      <ListPage />
      <TopList top10Wine={top10Wine} />
      <Spacing height={20} />
      <ImgWrapper data-aos="fade-up">
        <a href={link}>
          <Image
            src={bannerInfo.image}
            width={bannerInfo.width}
            height={bannerInfo.height}
            alt="download app"
          />
        </a>
      </ImgWrapper>
      <Spacing height={20} />
    </Container>
  );
};
const ImgWrapper = styled.div`
  ${media.mobile} {
    padding: 2rem;
  }
`;
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
  margin: 0 22.5rem;
  width: 100%;
  max-width: 70rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile} {
    max-width: 57.6rem;
  }
`;

export default SearchPage;
