import React from "react";
import { requestWine } from "remotes/requester";
import DetailPage from "containers/searching/DetailPage";

const SearchingPage = ({ wineData }) => {
  return <>{wineData && <DetailPage wineDetail={wineData} />}</>;
};

/**
 * 반복문으로 돌려서 렌더링해도....
 * 애초에 페이지가 아이템 10개씩 짤려서 렌더 즉, 범위가 1-10, 11-20 ,21-30 페이지에 해당하는 애들만 들고옴
 * 앱에서는 setPage 로 페이지를 바꾸는 로직으로 페이지값을 변경하던데..전체 데이터를 프리패치 해야하는 웹에서는 어떻게 해야할지 ..
 */
export async function getStaticPaths() {
  const wines = await requestWine();

  const wineNames = wines.list.map((it) => it.name);

  const newPaths = [];

  for (let name of wineNames) {
    newPaths.push({ wineDetail: name });
  }

  return {
    fallback: true,
    paths: newPaths.map((item) => ({ params: item })),
  };
}

export async function getStaticProps(context) {
  const wineDetail = context.params.wineDetail;
  const allWine = await requestWine();

  const wineDetailItem = allWine.list.filter((wine) =>
    wine.name.includes(wineDetail)
  );

  return {
    props: {
      wineData: wineDetailItem,
    },
  };
}

export default SearchingPage;
