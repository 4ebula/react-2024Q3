import React, { ReactNode } from 'react';
import './search.scss';

type SearchComp = { searchDefault: string, changeSearch: (value: string) => void }

export class SearchComponent extends React.Component<SearchComp> {
  render(): ReactNode {
    return (
      <form className="search" onSubmit={(e) => this.handleFormSubmit(e)}>
        <input
          placeholder="Enter request"
          defaultValue={this.props.searchDefault}
          name="search"
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    );
  }

  private handleFormSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);

    const formData = Object.fromEntries(form.entries());

    const { search: searchPhrase } = formData;
    this.props.changeSearch(searchPhrase as string);
    console.log(searchPhrase);
  }
}
