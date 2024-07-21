import { render } from '@testing-library/react';
import { ResultItemComponent } from '../../../src/components/result-item/result-item';
import '@testing-library/jest-dom';
import { SelectedItem } from '../../../src/contexts/selected-item';
import { ShowCardContext } from '../../../src/contexts/show-card';

describe('ResultItemComponent', () => {
  const i = 0;
  const id = 1;
  const data = {
    id,
    name: 'Test',
    weight: 100,
    height: 100,
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
  };

  test('should render', () => {

    const { container } = render(
      <ShowCardContext.Provider
        value={{ showCard: false, setShowCard: () => {} }}
      >
        <SelectedItem.Provider value={{ id, setId: () => {} }}>
          <ResultItemComponent data={data} key={i} />,
        </SelectedItem.Provider>
      </ShowCardContext.Provider>,
    );
    const item = container.querySelector('.result-item');
    expect(item).toBeInTheDocument();

    const info = item?.querySelector('.result-item-info')?.querySelectorAll('p');
    if (info) {
      const [id, name] = [...info].map(el => el.textContent);
      expect(id).toEqual('1');
      expect(name).toBe('Test');
    }
  });

  test('should trigger item select', () => {

    const setId = jest.fn();

    const { container } = render(
      <ShowCardContext.Provider
        value={{ showCard: false, setShowCard: () => {} }}
      >
        <SelectedItem.Provider value={{ id, setId }}>
          <ResultItemComponent data={data} key={i} />,
        </SelectedItem.Provider>
      </ShowCardContext.Provider>,
    );
    const item = container.querySelector('.result-item');
    expect(item).toBeInTheDocument();

    const info = item?.querySelector('.result-item-info');
    (info as HTMLDivElement).click();

    expect(setId).toHaveBeenCalled();
  });
});
