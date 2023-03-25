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