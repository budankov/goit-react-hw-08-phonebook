import { Outlet } from 'react-router-dom';
import NavbarAuth from 'components/NavbarAuth/NavbarAuth';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <NavbarAuth />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
