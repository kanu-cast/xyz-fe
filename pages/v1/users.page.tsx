import React from 'react';
import LNavbar from '@/components/LayoutComponents/Navbar';
import SideMenu from '@/components/LayoutComponents/SideMenu';

import UsersWrapper from '@/components/PageWrappers/UsersWrapper';

export default function Users() {
  return (
    <>
      <LNavbar />
      <div className="relative flex-box" style={{ width: '100%' }}>
        <SideMenu />
        <UsersWrapper />
      </div>
    </>
  );
}
