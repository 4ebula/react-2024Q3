import { render } from '@testing-library/react';
import { SpinnerComponent } from '../../../src/components/spinner/spinner';
import '@testing-library/jest-dom';

describe('Spinner', () => {
  test('should render', () => {
    const { container } = render(<SpinnerComponent size={50} />);
    const div = container.querySelector('.spinner');
    expect(div).toBeInTheDocument();
  });
});
