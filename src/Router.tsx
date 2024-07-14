import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
