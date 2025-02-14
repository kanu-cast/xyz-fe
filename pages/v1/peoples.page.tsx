import React from 'react';
import LNavbar from '@/components/LayoutComponents/Navbar';
import SideMenu from '@/components/LayoutComponents/SideMenu';

import PeoplesWrapper from '@/components/PageWrappers/PeoplesWrapper';

export default function Peoples() {
  return (
    <>
      <LNavbar />
      <div className="relative flex-box" style={{ width: '100%' }}>
        <SideMenu />
        <PeoplesWrapper />
      </div>
    </>
  );
}
