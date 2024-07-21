import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/error-boundary/error-boundary.tsx';
import { App } from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
