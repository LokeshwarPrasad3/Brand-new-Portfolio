import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout_container min-h-[calc(100svh-80px)]">
      <Outlet />
    </div>
  );
};

export default Layout;
