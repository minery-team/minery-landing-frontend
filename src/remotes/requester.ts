import axios from "axios";
import { API_ENDPOINT } from "utils/constants";

export const requester = axios.create({
  baseURL: API_ENDPOINT,
});
requester.defaults.withCredentials = true;

//와인 top 10 조회
export const fetchTop10Wines = async () => {
  const res = await requester.get("/wine/top10");
  return res.data;
};

//와인 상세 조회
export const getWineDetail = async (wineId: number) => {
  const res = await requester.get(`/wine/${wineId}`);
  return res.data;
};

// 와인 검색
export const OrderType = {
  Created: "created",
  Rate: "rate",
} as const;

type OrderType = typeof OrderType[keyof typeof OrderType];

export const searchWine = async (options: string) => {
  const res = await requester.get(`/wine/${options}`);
  return res.data;
};
