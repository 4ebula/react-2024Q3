import { render } from '@testing-library/react';
import { NotFoundPage } from '../../../src/pages/not-found/not-found.page';
import '@testing-library/jest-dom';

describe('404', () => {
  test('should render', () => {
    const { container } = render(<NotFoundPage />);
    const div = container.querySelector('.not-found');
    expect(div).toBeInTheDocument();
  });
});
