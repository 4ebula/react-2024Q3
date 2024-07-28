import { createContext, Dispatch, SetStateAction } from 'react';

export const ShowCardContext = createContext<{
  showCard: boolean;
  setShowCard: Dispatch<SetStateAction<boolean>>;
}>({ showCard: false, setShowCard: () => {} });
