import React from 'react';
import LNavbar from '@/components/LayoutComponents/Navbar';
import SideMenu from '@/components/LayoutComponents/SideMenu';

import HelpPageWrapper from '@/components/PageWrappers/HelpPageWrapper';

export default function Help() {
  return (
    <>
      <LNavbar />
      <div className="relative flex-box" style={{ width: '100%' }}>
        <SideMenu />
        <HelpPageWrapper />
      </div>
    </>
  );
}
