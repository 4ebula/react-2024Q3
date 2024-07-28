import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useState } from 'react';

import { ErrorBoundary } from '../../../src/components/error-boundary/error-boundary';

describe('Error Boundary', () => {
  test('should execute', async () => {
    const ThrowError = () => {
      const [_, setError] = useState(null);
      const throwEror = (): void => {
        setError(() => {
          throw new Error('Error occured');
        });
      };
      return (
        <button className="error-btn" onClick={throwEror}>
          Throw
        </button>
      );
    };
    const { container } = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    await waitFor(() => {
      const errorBtn = container.querySelector('.error-btn') as HTMLButtonElement;
      errorBtn?.click();

      const btn = container.querySelector('button');
      expect(btn).toBeInTheDocument();
    });
  });
});
