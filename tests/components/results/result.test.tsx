import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ResultsComponent } from '../../../src/components/results/result';
import { ShowCardContext } from '../../../src/contexts/show-card';

jest.mock('../../../src/components/result-item/result-item.tsx', () => {
  return {
    ResultItemComponent: () => <div className="result-item"></div>,
  };
});

describe('Results', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('should render empty result', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
      status: 200,
    } as unknown as Response);
    const { container } = render(
      <ShowCardContext.Provider
        value={{ showCard: false, setShowCard: () => {} }}
      >
        <ResultsComponent query="test" />
      </ShowCardContext.Provider>,
    );

    await waitFor(() => {
      const results = container.querySelector('div');
      expect(results).toBeInTheDocument();
      expect(results?.textContent).toBe('No items found');
    });
  });

  test('should render single result', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([
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
    const { container } = render(
      <ShowCardContext.Provider
        value={{ showCard: false, setShowCard: () => {} }}
      >
        <ResultsComponent query="test" />
      </ShowCardContext.Provider>,
    );

    await waitFor(() => {
      const results = container.querySelector('ul');
      expect(results).toBeInTheDocument();
      const item = results?.querySelector('.result-item');
      expect(item).toBeInTheDocument();
    });
  });

  test('should render multiple result', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        count: 3,
        results: [
          {
            id: 0,
            name: 'Test 0',
            url: '/0/',
          },
          {
            id: 1,
            name: 'Test 1',
            url: '/1/',
          },
          {
            id: 2,
            name: 'Test 2',
            url: '/2/',
          },
        ],
      }),
      status: 200,
    } as unknown as Response);
    const { container } = render(
      <ShowCardContext.Provider
        value={{ showCard: false, setShowCard: () => {} }}
      >
        <ResultsComponent query={null} />
      </ShowCardContext.Provider>,
    );

    await waitFor(() => {
      const results = container.querySelector('ul');
      expect(results).toBeInTheDocument();
      const item = results?.querySelectorAll('.result-item');
      expect(item?.length).toEqual(3);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
