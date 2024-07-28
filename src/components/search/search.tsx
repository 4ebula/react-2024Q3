import { FormEvent, ReactNode } from 'react';
import { SearchComponentProps } from '../../models/props.model';
import './search.scss';

export function SearchComponent(props: SearchComponentProps): ReactNode {
  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());
    props.changeSearch(formData.search as string);
  };

  return (
    <form className="search" onSubmit={(e) => handleFormSubmit(e)}>
      <input
        placeholder="Enter request"
        defaultValue={props.query || ''}
        name="search"
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
}
