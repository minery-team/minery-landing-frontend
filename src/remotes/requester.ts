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

export const requestWine = async (page = 0) => {
  const res = await requester.post(`/wine/search/`, { page: page });
  return res.data;
};
