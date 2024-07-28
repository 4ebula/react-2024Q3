import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SelectComponent } from '../../../src/components/select/select';
import { renderWithStore } from '../../utils/test-utils';

describe('Select', () => {
  test('should render', () => {
    const { container } = render(renderWithStore(<SelectComponent />));
    const div = container.querySelector('.select-container');
    expect(div).toBeInTheDocument();
  });
});
