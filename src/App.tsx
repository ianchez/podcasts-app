import React from 'react';
import reactArrayToTree from 'react-array-to-tree';
import {RouterProvider} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import router from './routers/router';

import PodcastsProvider from './contexts/PodcastsProvider';
import PodcastDetailProvider from './contexts/PodcastDetailProvider';

const queryClient = new QueryClient();

import './index.css';

const ContextProviders = reactArrayToTree([
  <PodcastsProvider />,
  <PodcastDetailProvider />,
]);

export const App: React.FC = () => {
	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ContextProviders>
					<ReactQueryDevtools initialIsOpen />
					<RouterProvider router={router} />,
				</ContextProviders>
			</QueryClientProvider>
		</React.StrictMode>
	);
}
