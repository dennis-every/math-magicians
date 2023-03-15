import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <section className="nav">
    <Navbar />
    <Outlet />
  </section>
);

export default Layout;
