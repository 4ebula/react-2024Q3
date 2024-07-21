import { createContext, Dispatch, SetStateAction } from 'react';

export const SelectedItem = createContext<{
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}>({ id: 1, setId: () => {} });
