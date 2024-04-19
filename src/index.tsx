import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import reactArrayToTree from 'react-array-to-tree';

import './index.css';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {RouterProvider} from 'react-router-dom';
import router from './routers/router';

import PodcastsProvider from './contexts/PodcastsProvider';
import PodcastDetailProvider from './contexts/PodcastDetailProvider';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Could not find root element');
}

const root = ReactDOM.createRoot(rootElement);

const ContextProviders = reactArrayToTree([
  <PodcastsProvider />,
  <PodcastDetailProvider />,
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProviders>
        <ReactQueryDevtools initialIsOpen />
        <RouterProvider router={router} />,
      </ContextProviders>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
