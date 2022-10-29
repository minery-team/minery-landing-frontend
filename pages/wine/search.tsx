import type { NextPage, GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import ListPage from "@/containers/searching/ListPage";
import { fetchTop10Wines } from "@/remotes/requester";

const search: NextPage = () => {
  return (
    <>
      <ListPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("/wineList", fetchTop10Wines);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default search;
