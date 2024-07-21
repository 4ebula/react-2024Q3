import React from 'react';
import { useStorage } from '../../hooks/storage.hook';
import { ResultsComponent } from '../../components/results/result';
import { HeaderComponent } from '../../components/header/header';
import './main.page.scss';

export function MainPage(): React.ReactNode {
  const searchDefaultKey = 'query';

  const [query, setQuery] = useStorage(searchDefaultKey);

  return (
    <>
      <HeaderComponent query={query} setQuery={setQuery}></HeaderComponent>
      <ResultsComponent query={query}></ResultsComponent>
    </>
  );
}
