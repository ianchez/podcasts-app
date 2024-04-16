import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import PodcastsProvider from './contexts/podcasts'

// screens
import NotFoundScreen from './screens/NotFoundScreen'
import RootLayout from './screens/RootLayout'
import HomeScreen from './screens/HomeScreen'
import PodcastDetailScreen from './screens/PodcastDetailScreen'
import ErrorScreen from './screens/ErrorScreen'

// TODO: Move this to a separate file
const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/podcast/:id',
        element: <PodcastDetailScreen />
      },
      {
        path: '*',
        element: <NotFoundScreen />
      }
    ]
  }
]

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const rootElement = document.getElementById('root')

if (rootElement === null) {
  throw new Error('Could not find root element')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <PodcastsProvider>
        <RouterProvider router={router} />
      </PodcastsProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
