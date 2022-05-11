import type { GetServerSideProps, NextPage } from "next";
import SearchBar from "src/components/search/SearchBar";
import WineCard from "src/components/search/WineCard";

type WineT = {
  id: number;
  order: number;
  name: string;
  enName: string;
  rate: number;
  image: string;
  country: string;
  type: number;
  minAlcohol: number;
  maxAlcohol: number;
  sweetness: number;
  acidity: number;
  body: number;
  tannins: number;
  searchable: boolean;
};

interface HomeProps {
  list: WineT[];
}

const Home: NextPage<HomeProps> = (props) => {
  // console.log(props);
  return (
    <>
      <SearchBar />
      <WineCard />
    </>
  );
};

//1. undefined 값을 빼가지고 리턴
//2. 엥 설마 post 요청이라 안되나? 왜냐. fetch 는 get임
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
} as const; //as const 용례 찾기

export const getStaticProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const res = await fetch(
    "https://6trd8f6686.execute-api.ap-northeast-2.amazonaws.com/live/wine/search",
    requestOptions
  );
  const data = await res.json();
  console.log(data);
  // const list = data.list.map((wine: WineT) => {
  //   return { ...wine, rates: undefined };
  // });
  return {
    props: {
      list: data.list,
    },
  };
};

export default Home;
