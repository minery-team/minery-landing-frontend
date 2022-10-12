import { Country } from "./Country";
import { WineType } from "./WineType";

export interface WineBaseInfo {
  id: number;
  name: string;
  enName: string;
  image?: string;
  rate?: number;
  type: WineType;
  country?: Country;
}

export interface WinePropertyInfo {
  minAlcohol?: number;
  maxAlcohol?: number;
  body?: number;
  tannins?: number;
  sweetness?: number;
  acidity?: number;
}

export interface WineDTO extends WineBaseInfo, WinePropertyInfo {}

export interface WineWithRatesDTO extends WineDTO {
  rates: string[];
}

// export namespace Wine {
//   export function getImage(data: WineBaseInfo) {
//     return data.image
//       ? { uri: data.image }
//       : require("@assets/images/empty_wine.png");
//   }
// }
