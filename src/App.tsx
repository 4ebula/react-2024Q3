import React, { ReactNode } from 'react';
import { SearchComponent } from './components/search/search';
import './App.scss';

export class App extends React.Component {
  private readonly searchDefaultKey = 'searchDefault';
  state = {
    searchDefault: '',
  };

  searchChangeCb = (value: string): void => {
    this.setState({ searchDefault: value });
    localStorage.setItem(this.searchDefaultKey, value);
  };

  componentDidMount(): void {
    const searchDefault = localStorage.getItem(this.searchDefaultKey);
    if (searchDefault) {
      this.setState({ searchDefault });
    }
  }

  render(): ReactNode {
    return (
      <SearchComponent
        searchDefault={this.state.searchDefault}
        changeSearch={this.searchChangeCb}
      ></SearchComponent>
    );
  }
}
