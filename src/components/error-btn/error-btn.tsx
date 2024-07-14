import { ReactNode, useState } from 'react';
import './error-btn.scss';

export function ErrorBtnComponent(): ReactNode {
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
}
