export interface ResultComponentProps {
  query: string | null;
}

export interface ResultItemComponentProps {
  name: string;
  weight: number;
  height: number;
}

export interface SearchComponentProps {
  searchDefault: string;
  changeSearch: (value: string) => void;
}
