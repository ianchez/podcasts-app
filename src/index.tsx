import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// screens
import NotFoundScreen from './screens/NotFoundScreen'
import HomeScreen from './screens/HomeScreen'
import ErrorScreen from './screens/ErrorScreen'

// TODO: Move this to a separate file
const routes = [
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <ErrorScreen />
  },
  {
    path: '*',
    element: <NotFoundScreen />
  }
]

const router = createBrowserRouter(routes)

const rootElement = document.getElementById('root')

if (rootElement === null) {
  throw new Error('Could not find root element')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
