import { ReactNode } from 'react';
import './not-found.page.scss';

export function NotFoundPage(): ReactNode {
  return (
    <div className="not-found">
      <p>404</p>
      <p>Page not found</p>
    </div>
  );
}
