export interface WineRequest {
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
}
