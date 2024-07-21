import { HeaderComponentProps } from '../../models/props.model';
import { ErrorBtnComponent } from '../error-btn/error-btn';
import { SearchComponent } from '../search/search';
import { ThemeBtnComponent } from '../theme-btn/theme-btn';
import './header.scss';

export function HeaderComponent({ query, setQuery }: HeaderComponentProps): React.ReactNode {
  return (
    <div className="header">
      <ErrorBtnComponent></ErrorBtnComponent>
      <SearchComponent query={query} changeSearch={setQuery}></SearchComponent>
      <ThemeBtnComponent></ThemeBtnComponent>
    </div>
  );
}
