import { render } from '@testing-library/react';
import { ResultItemComponent } from '../../../src/components/result-item/result-item';
import '@testing-library/jest-dom';

describe('ResultTiemComponent', () => {
  test('should render', () => {
    const name = 'test';
    const weight = 100;
    const height = 100;
    const i = 0;
    const imgUrl = 'test-url';

    const { container } = render(
      <ResultItemComponent
        name={name}
        weight={weight}
        height={height}
        imgUrl={imgUrl}
        key={i}
      />,
    );
    const item = container.querySelector('.list-item');
    expect(item).toBeInTheDocument();

    const itemName = item?.querySelector('.name');
    expect(itemName!.textContent).toEqual('test');

    const stats = item?.querySelector('.stats');
    expect(stats?.textContent).toBe(`Weight: ${weight}, Height: ${height}`);
  });
});
