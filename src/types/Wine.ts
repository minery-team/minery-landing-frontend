import { Country } from "./Country";
import { WineType } from "./WineType";

export interface WineBaseInfo {
  id: number;
  _id: number;
  name: string;
  enName: string;
  image?: string;
  rate?: number;
  type: WineType;
  country?: Country;
  price?: number;
}

export interface WinePropertyInfo {
  minAlcohol?: number;
  maxAlcohol?: number;
  body?: number;
  tannins?: number;
  sweetness?: number;
  acidity?: number;
  order: number;
  searchable: boolean;
  maker: string;
  style: string | null;
  rating: string | null;
  ferment: string | null;
  minTemperature: number;
  maxTemperature: number;
  foods: string[];
  importer: string | null;
  kinds: {
    id: string;
    name: string;
  }[];
}

export interface WineDTO extends WineBaseInfo, WinePropertyInfo {}

interface WineRateDTO {
  id: number;
  wineId: number;
  user: any;
  rate: number;
  content: string;
  date: Date;
  wine: WineDTO;
}

export interface WineWithRatesDTO extends WineDTO {
  rates: WineRateDTO[];
}
