import React, { ReactNode } from 'react';
import { SearchComponent } from './components/search/search';
import { ResultsComponent } from './components/results/result';
import './App.scss';
import { ErrorBtnComponent } from './components/error-btn/error-btn';
import { AppState } from './models/props.model';

export class App extends React.Component {
  private readonly searchDefaultKey = 'query';
  state: AppState = {
    query: '',
    hasError: false,
  };

  searchChangeCb = (value: string): void => {
    const query = value.trim().toLowerCase();
    this.setState({ query });
    localStorage.setItem(this.searchDefaultKey, query);
  };

  componentDidMount(): void {
    const query = localStorage.getItem(this.searchDefaultKey);
    if (query) {
      this.setState({ query });
    }
  }

  render(): ReactNode {
    return (
      <>
        <ErrorBtnComponent></ErrorBtnComponent>
        <SearchComponent
          query={this.state.query}
          changeSearch={this.searchChangeCb}
        ></SearchComponent>
        {!this.state.hasError ? (
          <ResultsComponent query={this.state.query}></ResultsComponent>
        ) : (
          <p>{this.state.error?.message}</p>
        )}
      </>
    );
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    this.logError(error);
  }

  private logError(error: Error): void {
    console.log('Error: ', error);
  }
}
