/* eslint-disable react/jsx-key */
'use client';

import React, { useState, ReactNode } from 'react';
import reactArrayToTree from 'react-array-to-tree';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import PodcastsProvider from 'src/contexts/PodcastsProvider';
import PodcastDetailProvider from 'src/contexts/PodcastDetailProvider';
import { CACHE_TIME } from 'src/constants/api';

const ContextProviders = reactArrayToTree([
  // All context providers should be added here
  <PodcastsProvider />,
  <PodcastDetailProvider />,
]);

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: CACHE_TIME,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProviders>
        <ReactQueryDevtools initialIsOpen />
        {children}
      </ContextProviders>
    </QueryClientProvider>
  );
};

export default Providers;
