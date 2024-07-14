import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ResultsComponent } from '../../../src/components/results/result';

jest.mock('../../../src/components/result-item/result-item.tsx', () => {
  return {
    ResultItemComponent: () => <div className="result-item"></div>,
  };
});

describe('Results', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('should render empty result', () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
      status: 200,
    } as unknown as Response);
    const { container } = render(<ResultsComponent query="test" />);
    setTimeout(() => {
      const results = container.querySelector('div');
      expect(results).toBeInTheDocument();
      expect(results?.textContent).toBe('No items found');
    }, 0);
  });

  test('should render empty result', () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue([
          {
            id: 0,
            name: 'Test',
            weight: 100,
            height: 100,
            sprites: {
              other: { 'official-artwork': { front_default: 'test' } },
            },
          },
        ]),
      status: 200,
    } as unknown as Response);
    const { container } = render(<ResultsComponent query="test" />);
    setTimeout(() => {
      const results = container.querySelector('ul');
      expect(results).toBeInTheDocument();
      const item = results?.querySelector('.result-item');
      expect(item).toBeInTheDocument();
    }, 0);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
