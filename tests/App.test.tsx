import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../src/App';

jest.mock('../src/components/search/search.tsx', () => {
  return {
    SearchComponent: () => <div className="search"></div>,
  };
});
jest.mock('../src/components/results/result.tsx', () => {
  return {
    ResultsComponent: () => <div className="results"></div>,
  };
});
jest.mock('../src/components/error-btn/error-btn.tsx', () => {
  return {
    ErrorBtnComponent: () => <div className="btn"></div>,
  };
});

describe('App', () => {
  test('should render children', () => {
    const { container } = render(<App />);
    const search = container.querySelector('.search');
    const results = container.querySelector('.results');
    const btn = container.querySelector('.btn');
    expect(search).toBeInTheDocument();
    expect(results).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
