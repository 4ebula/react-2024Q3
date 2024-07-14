import { ReactNode, useState } from 'react';
import { SearchComponent } from './components/search/search';
import { ResultsComponent } from './components/results/result';
import { ErrorBtnComponent } from './components/error-btn/error-btn';
import './App.scss';

export function App(): ReactNode {
  const searchDefaultKey = 'query';

  const [query, setQuery] = useState(localStorage.getItem(searchDefaultKey));

  const searchChangeCb = (value: string): void => {
    const query = value.trim().toLowerCase();
    setQuery(query);
    localStorage.setItem(searchDefaultKey, query);
  };

  return (
    <>
      <div className="search-container">
        <ErrorBtnComponent></ErrorBtnComponent>
        <SearchComponent
          query={query}
          changeSearch={searchChangeCb}
        ></SearchComponent>
      </div>
      <ResultsComponent query={query}></ResultsComponent>
    </>
  );
}