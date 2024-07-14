import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/error-boundary/error-boundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
