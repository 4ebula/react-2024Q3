import { PropsWithChildren } from 'react';
import { ResponseResults } from './api-response.model';

export interface ResultComponentProps {
  query: string | null;
}

export interface CardComponentProps {
  name: string;
  imgUrl: string;
  weight: number;
  height: number;
}

export interface SearchComponentProps {
  query: string | null;
  changeSearch: (value: string) => void;
}

export interface ResultItemProps {
  data: ResponseResults;
}


export interface PaginatorProps extends PropsWithChildren {
  pages: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export interface SpinnerComponentProps {
  size: number;
}