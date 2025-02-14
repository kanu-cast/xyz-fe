import React from 'react';
import LNavbar from '@/components/LayoutComponents/Navbar';
import SideMenu from '@/components/LayoutComponents/SideMenu';

import InventoryWrapper from '@/components/PageWrappers/InventoryWrapper';

export default function Inventory() {
  return (
    <>
      <LNavbar />
      <div className="relative flex-box" style={{ width: '100%' }}>
        <SideMenu />
        <InventoryWrapper />
      </div>
    </>
  );
}
