import React from 'react';
import { useStorage } from '../../hooks/storage.hook';
import { ErrorBtnComponent } from '../../components/error-btn/error-btn';
import { SearchComponent } from '../../components/search/search';
import { ResultsComponent } from '../../components/results/result';
import './main.page.scss';

export function MainPage(): React.ReactNode {
  const searchDefaultKey = 'query';

  const [query, setQuery] = useStorage(searchDefaultKey);

  return (
    <>
      <div className="search-container">
        <ErrorBtnComponent></ErrorBtnComponent>
        <SearchComponent
          query={query}
          changeSearch={setQuery}
        ></SearchComponent>
      </div>
      <ResultsComponent query={query}></ResultsComponent>
    </>
  );
}
