import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';
import './App.scss';

export function App(): React.ReactNode {
  return <RouterProvider router={router} />;
}
