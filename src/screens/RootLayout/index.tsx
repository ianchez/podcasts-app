// import HomeScreen from '../HomeScreen'

import { Outlet } from 'react-router-dom'

import './index.css'

const RootLayout: () => JSX.Element = () => {
  return (
    <div className='layout'>
      <h2>Header</h2>
      <Outlet />
    </div>
  )
}

export default RootLayout
