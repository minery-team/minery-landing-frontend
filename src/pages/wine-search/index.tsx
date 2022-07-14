import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import SearchBar from "src/components/search/SearchBar";
import WineCard from "src/components/search/WineCard";
import { WineRequest } from "src/types/request";
import styled from "styled-components";

interface HomeProps {
  list: WineRequest[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <WineCard wineList={props.list} />
    </>
  );
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  filter: {
    type: 0,
  },
  page: 1231,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
} as const;

export const getStaticProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const res = await fetch(
    "https://6trd8f6686.execute-api.ap-northeast-2.amazonaws.com/live/wine/search",
    requestOptions
  );
  const data = await res.json();
  return {
    props: {
      list: data.list,
    },
  };
};

export default Home;
