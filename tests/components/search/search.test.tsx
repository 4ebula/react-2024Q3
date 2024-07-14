import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchComponent } from '../../../src/components/search/search';

describe('Search', () => {
  test('should render', () => {
    const { container } = render(<SearchComponent query="test" changeSearch={() => {}} />);
    const search = container.querySelector('.search');
    expect(search).toBeInTheDocument();
  });


  test('should execute callback on submit', () => {
    const cb = jest.fn();
    const { container } = render(<SearchComponent query="test" changeSearch={cb} />);
    const search = container.querySelector('.search');
    const btn = search?.querySelector('button');
    btn?.click();

    expect(cb).toHaveBeenCalled();
  });
});
