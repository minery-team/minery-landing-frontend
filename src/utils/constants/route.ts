// TODO - 라우트 상수 정의한것으로 변경하기
export const URL = {
  HOME: () => "/",
  WINE_DETAIL: (id: number | string) => `/wine/${id}`,
} as const;

export const Insta =
  "https://www.instagram.com/minery_app/?igshid=YmMyMTA2M2Y%3D";
export const FaceBook = "https://www.facebook.com/minery.wine";
export const Tistory = "https://minery.tistory.com/";
export const GooglePlay =
  "https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US";
