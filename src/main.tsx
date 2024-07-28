import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/error-boundary/error-boundary.tsx';
import { App } from './App.tsx';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);
