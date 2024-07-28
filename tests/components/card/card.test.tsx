import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardComponent } from '../../../src/components/card/card';
import { SelectedItem } from '../../../src/contexts/selected-item';

describe('CardComponent', () => {
  const mockedResult = {
    id: 1,
    height: 100,
    weight: 100,
    name: 'Test',
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test.only('should render card', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedResult),
      status: 200,
    } as unknown as Response);
    const { container } = render(
      <SelectedItem.Provider value={{ id: 1, setId: () => {} }}>
        <CardComponent />
      </SelectedItem.Provider>,
    );

    await waitFor(() => {
      const results = container.querySelector('li.card');
      expect(results).toBeInTheDocument();

      const nameEl = results?.querySelector('.name');
      expect(nameEl?.textContent).toBe('Test');
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
