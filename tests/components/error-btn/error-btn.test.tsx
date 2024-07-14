import { render } from '@testing-library/react';
import { ErrorBtnComponent } from '../../../src/components/error-btn/error-btn';
import '@testing-library/jest-dom';

describe('Error button', () => {
  test('should render', () => {
    const { container } = render(<ErrorBtnComponent />);
    const div = container.querySelector('.error-btn');
    expect(div).toBeInTheDocument();
  });
});
