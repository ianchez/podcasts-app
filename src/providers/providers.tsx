'use client';

import React, {ReactNode} from 'react';
import reactArrayToTree from 'react-array-to-tree';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import PodcastsProvider from 'src/contexts/PodcastsProvider';
import PodcastDetailProvider from 'src/contexts/PodcastDetailProvider';

const queryClient = new QueryClient();

const ContextProviders = reactArrayToTree([
	<PodcastsProvider />,
	<PodcastDetailProvider />,
]);

const Providers: React.FC<{children: ReactNode}> = ({children}) => {
	return (
    <QueryClientProvider client={queryClient}>
      <ContextProviders>
        <ReactQueryDevtools initialIsOpen />
        {children}
      </ContextProviders>
    </QueryClientProvider>
	);
}

export default Providers;
