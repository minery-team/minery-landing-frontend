import React from "react";
import { requestWineItem } from "remotes/requester";
import DetailPage from "containers/searching/DetailPage";

const SearchingPage = ({ wineData }) => {
  return <>{wineData && <DetailPage wineDetail={wineData} />}</>;
};

export async function getServerSideProps(context) {
  const wineDetail = context.params.id;
  const wineItem = await requestWineItem(wineDetail);

  return {
    props: {
      wineData: wineItem,
    },
  };
}

export default SearchingPage;
