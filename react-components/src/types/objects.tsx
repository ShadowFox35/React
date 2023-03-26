export interface navElemType {
  text: string;
  link: string;
}

export interface catalogElemType {
  category: string;
  name: string;
  brand: string;
  structure: string;
  weight: string;
  length: string;
  price: number;
  url: string;
}

export interface addedCardType {
  img: string | null;
  type: string;
  name: string;
  delivery: string | null;
  date: string;
}

export interface iselectedFileType {
  type: string;
}
