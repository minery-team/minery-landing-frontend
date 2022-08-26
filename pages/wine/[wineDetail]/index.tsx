import React from "react";
import { requestWine } from "remotes/requester";
import DetailPage from "containers/searching/DetailPage";

const SearchingPage = ({ wineData }) => {
  return <>{wineData && <DetailPage wineDetail={wineData} />}</>;
};

export async function getStaticPaths() {
  const wines = await requestWine();
  const wineId = wines.list.map((wine) => wine._id);

  const newPaths = [];

  for (let id of wineId) {
    newPaths.push({ wineDetail: id });
  }

  return {
    fallback: true,
    paths: newPaths.map((item) => ({ params: item })),
  };
}

export async function getStaticProps(context) {
  const wineDetail = context.params.wineDetail;

  const allWine = await requestWine();

  const wineDetailItem = allWine.list.filter((wine) => wine._id === wineDetail);

  console.log(wineDetailItem);

  return {
    props: {
      wineData: wineDetailItem,
    },
  };
}

export default SearchingPage;
