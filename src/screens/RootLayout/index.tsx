import { Outlet } from 'react-router-dom';
import './index.css';

import Header from '../../components/Header';

const RootLayout: React.FC<{}> = () => (
  <div id='layout'>
    <Header />
    <Outlet />
  </div>
);

export default RootLayout;
