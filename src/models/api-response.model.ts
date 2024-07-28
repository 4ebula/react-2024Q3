export interface ResponseResults {
  name: string;
  weight: number;
  height: number;
  id: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface ApiResponse {
  results: { name: string; url: string, id?: number }[];
  count: number;
}

export interface ListItem {
  id: number;
  name: string;
  url: string;
}
