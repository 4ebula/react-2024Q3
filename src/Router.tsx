import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { MainPage } from './pages/main/main.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
