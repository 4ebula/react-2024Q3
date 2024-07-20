import { ReactNode } from 'react';
import { SearchComponent } from './components/search/search';
import { ResultsComponent } from './components/results/result';
import { ErrorBtnComponent } from './components/error-btn/error-btn';
import './App.scss';
import { useStorage } from './hooks/storage.hook';

export function App(): ReactNode {
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