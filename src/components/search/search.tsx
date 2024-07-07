import React, { ReactNode } from 'react';
import { SearchComponentProps } from '../../models/props.model';
import './search.scss';

export class SearchComponent extends React.Component<SearchComponentProps> {
  render(): ReactNode {
    return (
      <form className="search" onSubmit={(e) => this.handleFormSubmit(e)}>
        <input
          placeholder="Enter request"
          defaultValue={this.props.query}
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
    this.props.changeSearch(formData.search as string);
  }
}
