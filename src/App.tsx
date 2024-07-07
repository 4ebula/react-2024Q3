import React, { ReactNode } from 'react';
import { SearchComponent } from './components/search/search';
import { ResultsComponent } from './components/results/result';
import './App.scss';

export class App extends React.Component {
  private readonly searchDefaultKey = 'searchDefault';
  state = {
    searchDefault: '',
  };

  searchChangeCb = (value: string): void => {
    const searchStr = value.trim().toLowerCase();
    this.setState({ searchDefault: searchStr });
    localStorage.setItem(this.searchDefaultKey, searchStr);
  };

  componentDidMount(): void {
    const searchDefault = localStorage.getItem(this.searchDefaultKey);
    if (searchDefault) {
      this.setState({ searchDefault });
    }
  }

  render(): ReactNode {
    return (
      <>
        <SearchComponent
          searchDefault={this.state.searchDefault}
          changeSearch={this.searchChangeCb}
        ></SearchComponent>
        <ResultsComponent query={this.state.searchDefault}></ResultsComponent>
      </>
    );
  }
}
