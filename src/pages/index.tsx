import type { NextPage } from "next";
import SearchBar from "src/components/search/SearchBar";
import WineCard from "src/components/search/WineCard";

const Home: NextPage = () => {
  return (
    <>
      <SearchBar />
      <WineCard />
    </>
  );
};

export default Home;
