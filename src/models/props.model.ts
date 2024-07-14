export interface ResultComponentProps {
  query: string | null;
}

export interface ResultItemComponentProps {
  name: string;
  imgUrl: string;
  weight: number;
  height: number;
}

export interface SearchComponentProps {
  query: string | null;
  changeSearch: (value: string) => void;
}
