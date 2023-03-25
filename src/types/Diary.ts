import { WineType } from "./WineType";
import { Country } from "./Country";

export interface Diary {
    content: string;
    date: string;
    id: number;
    images: DiaryImage[];
    title: string;
}

export interface DiaryImage {
    id: number;
    tags: Tag[];
    url: string;
    zoom: any;
}

export interface Tag {
    id: number;
    wine: TagedWine;
    wineRate: TagedWineRate;
    x: number;
    y: number;
}

export interface TagedWine {
    acidity?: number;
    body?: number;
    country?: Country;
    enName: string;
    ferment: string | null;
    foods: string[];
    id: number;
    image?: string;
    importer: string | null;
    maker: string;
    maxAlcohol?: number;
    maxTemperature: number;
    minAlcohol?: number;
    minTemperature: number;
    name: string;
    order: number;
    price?: number;
    rate?: number;
    rating: string | null;
    searchable: boolean;
    style: string | null;
    sweetness?: number;
    tannins?: number;
    type: WineType;
    viewCount?: number;
    _id: number;
}

export interface TagedWineRate {
    content: string;
    date: string;
    id: number;
    rate: number;
}