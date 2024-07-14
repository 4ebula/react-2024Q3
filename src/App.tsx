import React, { ReactNode } from 'react';
import { SearchComponent } from './components/search/search';
import { ResultsComponent } from './components/results/result';
import './App.scss';
import { ErrorBtnComponent } from './components/error-btn/error-btn';
import { AppState } from './models/props.model';

export class App extends React.Component {
  private readonly searchDefaultKey = 'query';
  state: AppState = {
    query: localStorage.getItem(this.searchDefaultKey),
    hasError: false,
  };

  searchChangeCb = (value: string): void => {
    const query = value.trim().toLowerCase();
    this.setState({ query, hasError: false });
    localStorage.setItem(this.searchDefaultKey, query);
  };

  render(): ReactNode {
    return (
      <>
        <div className="search-container">
          <ErrorBtnComponent></ErrorBtnComponent>
          <SearchComponent
            query={this.state.query}
            changeSearch={this.searchChangeCb}
          ></SearchComponent>
        </div>
        <ResultsComponent query={this.state.query}></ResultsComponent>
      </>
    );
  }
}
