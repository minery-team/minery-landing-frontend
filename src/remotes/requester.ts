import axios from "axios";
import { useQuery } from "react-query";
import { API_ENDPOINT } from "@/utils/constants/api";

export const requester = axios.create({
  baseURL: API_ENDPOINT,
});
requester.defaults.withCredentials = true;

//와인 top 10 조회
export const fetchTop10Wines = async () => {
  const res = await requester.get("/wine/top10");
  return res.data;
};

//TODO 와인 검색-page 옵션 처리 방법 질문하기
// 반환값 타입 달기
//Order Type (최신순, 별점순) 처리 방법..데이터가 어떻게 오는지 확인해보고 적용해야할듯
export const searchWine = async (options: {
  keyword?: string;
  page: number;
}) => {
  const res = await requester.post(`/wine/search/`, {
    keyword: options.keyword?.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-핳]/gi, ""),
    page: options.page,
  });
  return res.data;
};

export const useSearchResult = (keyword: string, page: number) => {
  return useQuery("/search", () => searchWine({ keyword, page }), {
    enabled: !!keyword,
  });
};

//와인 상세 개별 아이템 상세 조회
export const requestWineItem = async (id: number) => {
  const res = await requester.get(`/wine/${id}`);
  return res.data;
};
