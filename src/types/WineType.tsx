export enum WineType {
  RED,
  WHITE,
  ROSE,
  SPARKLING,
  ETC,
}

export const NAME_BY_WINE_TYPE: Record<WineType, string> = {
  [WineType.RED]: "Red",
  [WineType.WHITE]: "White",
  [WineType.ROSE]: "Rose",
  [WineType.SPARKLING]: "Sparkling",
  [WineType.ETC]: "etc",
};

export const KR_NAME_BY_WINE_TYPE: Record<WineType, string> = {
  [WineType.RED]: "red",
  [WineType.WHITE]: "white",
  [WineType.ROSE]: "rose",
  [WineType.SPARKLING]: "sparkling",
  [WineType.ETC]: "기타",
};
