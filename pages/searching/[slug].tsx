import React from "react";
import type { GetServerSideProps } from "next";
import { fetchTop10Wines } from "remotes/requester";
import DetailPage from "containers/searching/DetailPage";

const SearchingPage = ({ wineDetail }) => {
  return (
    <>
      {wineDetail && (
        <>
          <DetailPage wineDetail={wineDetail} />
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;

  const allWine = await fetchTop10Wines();

  const wineDetail = allWine.filter((wine) =>
    wine.name.replace(/ /gi, "").includes(slug)
  );

  return {
    props: { wineDetail: wineDetail },
  };
};

export default SearchingPage;
