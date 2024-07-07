export interface ResultComponentProps {
  query: string | null;
}

export interface ResultItemComponentProps {
  name: string;
  weight: number;
  height: number;
}

export interface SearchComponentProps {
  query: string | null;
  changeSearch: (value: string) => void;
}

export interface AppState {
  query: string | null;
  hasError: boolean;
  error?: Error;
}
