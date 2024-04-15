import { Outlet } from 'react-router-dom'
import './index.css'

import Header from '../../components/Header'

const RootLayout: () => JSX.Element = () => {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootLayout
