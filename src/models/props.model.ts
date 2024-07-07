export interface ResultComponentProps {
  query: string | null;
}

export interface ResultItemComponentProps {
  name: string;
  weight: number;
  height: number;
}

export interface SearchComponentProps {
  query: string;
  changeSearch: (value: string) => void;
}

export interface AppState {
  query: string;
  hasError: boolean;
  error?: Error;
}
